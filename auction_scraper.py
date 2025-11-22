#!/usr/bin/env python3
"""
AuctionExport Vehicle Scraper
Scrapes vehicle data from AuctionExport and stores in MongoDB
"""

import json
import time
import random
import os
import requests
from datetime import datetime
from typing import Dict, List, Optional
from urllib.parse import urlparse
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from selenium.common.exceptions import TimeoutException, NoSuchElementException
from bs4 import BeautifulSoup
from pymongo import MongoClient
from pymongo.errors import ConnectionFailure, DuplicateKeyError
import logging

# Set up logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('auction_scraper.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)


class AuctionExportScraper:
    def __init__(self, mongodb_uri: str, db_name: str = 'church', collection_name: str = 'vehicles_inventory', download_images: bool = True):
        """
        Initialize the AuctionExport scraper

        Args:
            mongodb_uri: MongoDB connection URI
            db_name: Database name
            collection_name: Collection name for vehicles
            download_images: Whether to download images locally
        """
        self.mongodb_uri = mongodb_uri
        self.db_name = db_name
        self.collection_name = collection_name
        self.download_images = download_images
        self.driver = None
        self.db = None
        self.collection = None
        self.base_url = "https://www.auctionexport.com"
        self.images_dir = "vehicle_images"

    def setup_driver(self):
        """Set up Chrome WebDriver with options"""
        chrome_options = Options()

        # Stealth options
        chrome_options.add_argument('--disable-blink-features=AutomationControlled')
        chrome_options.add_experimental_option("excludeSwitches", ["enable-automation"])
        chrome_options.add_experimental_option('useAutomationExtension', False)
        chrome_options.add_argument('--user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36')
        chrome_options.add_argument('--disable-dev-shm-usage')
        chrome_options.add_argument('--no-sandbox')
        chrome_options.add_argument('--start-maximized')

        self.driver = webdriver.Chrome(options=chrome_options)
        self.driver.execute_script("Object.defineProperty(navigator, 'webdriver', {get: () => undefined})")
        logger.info("WebDriver initialized")

    def connect_mongodb(self):
        """Connect to MongoDB"""
        try:
            self.client = MongoClient(self.mongodb_uri, serverSelectionTimeoutMS=5000)
            # Test connection
            self.client.server_info()
            self.db = self.client[self.db_name]
            self.collection = self.db[self.collection_name]

            # Create index on vehicle ID to prevent duplicates
            self.collection.create_index('vehicle_id', unique=True)

            logger.info(f"Connected to MongoDB: {self.db_name}.{self.collection_name}")
            return True
        except ConnectionFailure as e:
            logger.error(f"Failed to connect to MongoDB: {str(e)}")
            return False

    def human_like_delay(self, min_seconds=1, max_seconds=3):
        """Add random human-like delay"""
        delay = random.uniform(min_seconds, max_seconds)
        time.sleep(delay)

    def download_image(self, image_url: str, vehicle_id: str, image_index: int) -> Optional[str]:
        """
        Download image and save locally

        Args:
            image_url: URL of the image
            vehicle_id: Vehicle ID for folder organization
            image_index: Index of the image

        Returns:
            Local file path or None
        """
        try:
            # Create vehicle-specific directory
            vehicle_dir = os.path.join(self.images_dir, vehicle_id)
            os.makedirs(vehicle_dir, exist_ok=True)

            # Get file extension from URL
            parsed_url = urlparse(image_url)
            ext = os.path.splitext(parsed_url.path)[1] or '.jpg'

            # Create filename
            filename = f"image_{image_index}{ext}"
            filepath = os.path.join(vehicle_dir, filename)

            # Download image
            response = requests.get(image_url, timeout=10, stream=True)
            response.raise_for_status()

            # Save image
            with open(filepath, 'wb') as f:
                for chunk in response.iter_content(chunk_size=8192):
                    f.write(chunk)

            logger.info(f"Downloaded image: {filepath}")
            return filepath

        except Exception as e:
            logger.error(f"Error downloading image {image_url}: {str(e)}")
            return None

    def scrape_vehicle_details(self, vehicle_element) -> Optional[Dict]:
        """
        Extract vehicle details from a vehicle card element

        Args:
            vehicle_element: BeautifulSoup element containing vehicle data

        Returns:
            Dictionary with vehicle details or None
        """
        try:
            vehicle_data = {
                'scraped_at': datetime.now().isoformat(),
                'source': 'auctionexport',
                'vehicle_id': '',
                'title': '',
                'year': '',
                'make': '',
                'model': '',
                'price': '',
                'price_usd': 0,
                'mileage': '',
                'location': '',
                'auction_date': '',
                'lot_number': '',
                'vin': '',
                'body_type': '',
                'transmission': '',
                'fuel_type': '',
                'engine': '',
                'drive': '',
                'color_exterior': '',
                'color_interior': '',
                'damage': '',
                'images': [],
                'url': '',
                'status': 'available'
            }

            # Extract title
            title_elem = vehicle_element.find(['h3', 'h4', 'a'], class_=lambda x: x and 'title' in x.lower() if x else False)
            if not title_elem:
                title_elem = vehicle_element.find('a', href=lambda x: x and '/Inventory/Info/' in x if x else False)
            if title_elem:
                vehicle_data['title'] = title_elem.get_text(strip=True)

            # Extract URL and vehicle ID
            link_elem = vehicle_element.find('a', href=lambda x: x and '/Inventory/Info/' in x if x else False)
            if link_elem:
                href = link_elem.get('href')
                vehicle_data['url'] = self.base_url + href
                # Extract vehicle ID from URL
                vehicle_id = href.split('/')[-1].split('?')[0]
                vehicle_data['vehicle_id'] = vehicle_id

            # Extract price
            price_elem = vehicle_element.find(['span', 'div'], class_=lambda x: x and 'price' in x.lower() if x else False)
            if price_elem:
                price_text = price_elem.get_text(strip=True)
                vehicle_data['price'] = price_text
                # Extract numeric value
                try:
                    price_numeric = ''.join(filter(str.isdigit, price_text))
                    if price_numeric:
                        vehicle_data['price_usd'] = int(price_numeric)
                except:
                    pass

            # Extract year, make, model from title
            title = vehicle_data['title']
            if title:
                parts = title.split()
                if len(parts) >= 3:
                    # Try to extract year (first 4-digit number)
                    for part in parts:
                        if part.isdigit() and len(part) == 4 and 1900 <= int(part) <= 2030:
                            vehicle_data['year'] = part
                            break

                    # Extract make and model (usually after year)
                    if vehicle_data['year']:
                        year_index = parts.index(vehicle_data['year'])
                        if year_index + 1 < len(parts):
                            vehicle_data['make'] = parts[year_index + 1]
                        if year_index + 2 < len(parts):
                            vehicle_data['model'] = ' '.join(parts[year_index + 2:])

            # Extract mileage
            mileage_elem = vehicle_element.find(text=lambda x: x and ('mile' in x.lower() or 'km' in x.lower()) if x else False)
            if mileage_elem:
                parent = mileage_elem.find_parent()
                if parent:
                    vehicle_data['mileage'] = parent.get_text(strip=True)

            # Extract lot number
            lot_elem = vehicle_element.find(text=lambda x: x and 'lot' in x.lower() if x else False)
            if lot_elem:
                parent = lot_elem.find_parent()
                if parent:
                    vehicle_data['lot_number'] = parent.get_text(strip=True)

            # Extract images
            img_elements = vehicle_element.find_all('img')
            image_urls = []
            local_images = []

            for img in img_elements:
                img_src = img.get('src') or img.get('data-src')
                if img_src:
                    if not img_src.startswith('http'):
                        img_src = self.base_url + img_src
                    image_urls.append(img_src)

            vehicle_data['images'] = image_urls

            # Download images if enabled and vehicle_id is available
            if self.download_images and vehicle_data.get('vehicle_id'):
                for idx, img_url in enumerate(image_urls):
                    local_path = self.download_image(img_url, vehicle_data['vehicle_id'], idx)
                    if local_path:
                        local_images.append(local_path)

            vehicle_data['local_images'] = local_images

            # Extract location/auction
            location_elem = vehicle_element.find(['span', 'div'], class_=lambda x: x and ('location' in x.lower() or 'auction' in x.lower()) if x else False)
            if location_elem:
                vehicle_data['location'] = location_elem.get_text(strip=True)

            # Only return if we have essential data
            if vehicle_data['vehicle_id'] and vehicle_data['title']:
                logger.info(f"Scraped vehicle: {vehicle_data['title']}")
                return vehicle_data

            return None

        except Exception as e:
            logger.error(f"Error extracting vehicle details: {str(e)}")
            return None

    def wait_for_cloudflare(self):
        """Wait for Cloudflare verification to complete"""
        try:
            logger.info("Checking for Cloudflare challenge...")
            time.sleep(3)

            page_source = self.driver.page_source.lower()

            # Check for Cloudflare challenge
            if any(keyword in page_source for keyword in ['cloudflare', 'checking your browser', 'just a moment']):
                logger.info("Cloudflare verification detected!")
                print("\n" + "="*70)
                print("CLOUDFLARE VERIFICATION REQUIRED")
                print("="*70)
                print("The website is checking if you're a bot.")
                print("Please wait for the verification to complete in the browser.")
                print("This usually takes 5-10 seconds...")
                print("="*70 + "\n")

                # Wait for Cloudflare to complete
                max_wait = 30  # 30 seconds max
                waited = 0
                while waited < max_wait:
                    time.sleep(2)
                    waited += 2
                    page_source = self.driver.page_source.lower()

                    # Check if Cloudflare is gone
                    if not any(keyword in page_source for keyword in ['cloudflare', 'checking your browser', 'just a moment']):
                        logger.info("Cloudflare verification completed!")
                        return True

                    logger.info(f"Still waiting... ({waited}s)")

                # If still showing Cloudflare after 30s, ask user
                print("\nCloudflare is taking longer than expected.")
                input("Press Enter once the page has loaded and Cloudflare verification is complete...")
                return True

            return True

        except Exception as e:
            logger.error(f"Error handling Cloudflare: {str(e)}")
            return True  # Continue anyway

    def scrape_page(self, url: str) -> List[Dict]:
        """
        Scrape a single page of vehicle listings

        Args:
            url: URL of the page to scrape

        Returns:
            List of vehicle dictionaries
        """
        vehicles = []

        try:
            logger.info(f"Scraping page: {url}")
            self.driver.get(url)

            # Wait for Cloudflare if present
            self.wait_for_cloudflare()

            self.human_like_delay(3, 5)

            # Get page source and parse with BeautifulSoup
            page_source = self.driver.page_source
            soup = BeautifulSoup(page_source, 'html.parser')

            # Find all vehicle cards (adjust selectors based on actual site structure)
            vehicle_cards = soup.find_all(['div', 'article'], class_=lambda x: x and ('vehicle' in x.lower() or 'item' in x.lower() or 'card' in x.lower()) if x else False)

            if not vehicle_cards:
                # Try alternative selectors
                vehicle_cards = soup.find_all('div', {'data-id': True})

            if not vehicle_cards:
                # Try finding by links to vehicle details
                links = soup.find_all('a', href=lambda x: x and '/Inventory/Info/' in x if x else False)
                vehicle_cards = [link.find_parent(['div', 'article']) for link in links]
                vehicle_cards = [card for card in vehicle_cards if card]

            logger.info(f"Found {len(vehicle_cards)} vehicle cards")

            for card in vehicle_cards:
                vehicle_data = self.scrape_vehicle_details(card)
                if vehicle_data:
                    vehicles.append(vehicle_data)

        except Exception as e:
            logger.error(f"Error scraping page: {str(e)}")

        return vehicles

    def save_to_mongodb(self, vehicles: List[Dict]) -> int:
        """
        Save vehicles to MongoDB

        Args:
            vehicles: List of vehicle dictionaries

        Returns:
            Number of vehicles successfully saved
        """
        saved_count = 0

        for vehicle in vehicles:
            try:
                # Use vehicle_id as unique identifier
                self.collection.update_one(
                    {'vehicle_id': vehicle['vehicle_id']},
                    {'$set': vehicle},
                    upsert=True
                )
                saved_count += 1
                logger.info(f"Saved vehicle: {vehicle['vehicle_id']} - {vehicle['title']}")
            except DuplicateKeyError:
                logger.info(f"Vehicle already exists: {vehicle['vehicle_id']}")
            except Exception as e:
                logger.error(f"Error saving vehicle {vehicle.get('vehicle_id')}: {str(e)}")

        return saved_count

    def scrape_multiple_pages(self, base_url: str, max_pages: int = 10):
        """
        Scrape multiple pages of vehicle listings

        Args:
            base_url: Base URL for the search
            max_pages: Maximum number of pages to scrape
        """
        total_vehicles = 0

        for page in range(max_pages):
            offset = page * 15  # 15 vehicles per page
            url = base_url.replace('Offset=15', f'Offset={offset}')

            logger.info(f"Scraping page {page + 1}/{max_pages}")
            vehicles = self.scrape_page(url)

            if not vehicles:
                logger.info("No more vehicles found. Stopping.")
                break

            saved = self.save_to_mongodb(vehicles)
            total_vehicles += saved

            logger.info(f"Page {page + 1}: Scraped {len(vehicles)} vehicles, Saved {saved} to database")

            # Random delay between pages
            self.human_like_delay(2, 4)

        logger.info(f"Scraping completed! Total vehicles saved: {total_vehicles}")

    def run(self, search_url: str, max_pages: int = 10):
        """
        Run the complete scraping process

        Args:
            search_url: AuctionExport search URL
            max_pages: Maximum number of pages to scrape
        """
        try:
            # Connect to MongoDB
            if not self.connect_mongodb():
                logger.error("Cannot proceed without database connection")
                return

            # Set up driver
            self.setup_driver()

            # Scrape vehicles
            self.scrape_multiple_pages(search_url, max_pages)

            # Print summary
            total_count = self.collection.count_documents({})
            logger.info(f"Total vehicles in database: {total_count}")

        except Exception as e:
            logger.error(f"Error during scraping: {str(e)}")

        finally:
            if self.driver:
                self.driver.quit()
                logger.info("WebDriver closed")
            if self.client:
                self.client.close()
                logger.info("MongoDB connection closed")


def main():
    """Main function to run the scraper"""

    # MongoDB configuration
    MONGODB_URI = "mongodb://churchadmin:ChurchSecure2025!Mongo@173.249.49.3:27017/church?authSource=admin"
    DB_NAME = "church"
    COLLECTION_NAME = "vehicles_inventory"

    # AuctionExport search URL
    SEARCH_URL = "https://www.auctionexport.com/en/Inventory/Search_Results?OrderBy=None&PerPage=15&Keywords=&IsManual=True&auctionType=2&vehicleType=0&autoMake=&autoGroup=&autoModel=&autoYear_from=1901&autoYear_to=2025&price_from=0&price_to=0&mileage_from=0&mileage_to=0&Offset=15"

    # Number of pages to scrape (15 vehicles per page)
    MAX_PAGES = 20  # Adjust as needed

    print("="*70)
    print("AUCTIONEXPORT VEHICLE SCRAPER")
    print("="*70)
    print(f"Database: {DB_NAME}.{COLLECTION_NAME}")
    print(f"Max Pages: {MAX_PAGES}")
    print("="*70 + "\n")

    # Initialize and run scraper
    scraper = AuctionExportScraper(
        mongodb_uri=MONGODB_URI,
        db_name=DB_NAME,
        collection_name=COLLECTION_NAME
    )

    scraper.run(SEARCH_URL, MAX_PAGES)


if __name__ == "__main__":
    main()
