#!/usr/bin/env python3
"""
Facebook Page Scraper - Manual Login Version
This version allows you to log in manually, then automates the scraping
"""

import json
import time
import os
import random
from datetime import datetime
from typing import Dict, List
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup
import logging

# Set up logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('facebook_scraper.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)


class FacebookScraperManual:
    def __init__(self, page_url: str, headless: bool = False):
        """
        Initialize the Facebook scraper with manual login

        Args:
            page_url: URL of the Facebook page to scrape
            headless: Run browser in headless mode (not recommended for manual login)
        """
        self.page_url = page_url
        self.headless = headless
        self.driver = None

    def setup_driver(self):
        """Set up Chrome WebDriver with anti-detection options"""
        chrome_options = Options()

        if self.headless:
            chrome_options.add_argument('--headless=new')

        # Anti-detection arguments
        chrome_options.add_argument('--disable-blink-features=AutomationControlled')
        chrome_options.add_experimental_option("excludeSwitches", ["enable-automation"])
        chrome_options.add_experimental_option('useAutomationExtension', False)

        # Realistic user agent for Mac
        chrome_options.add_argument('--user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36')

        # Additional stealth options
        chrome_options.add_argument('--disable-dev-shm-usage')
        chrome_options.add_argument('--no-sandbox')
        chrome_options.add_argument('--start-maximized')

        # Preferences
        prefs = {
            "profile.default_content_setting_values.notifications": 2,
            "credentials_enable_service": False,
            "profile.password_manager_enabled": False,
        }
        chrome_options.add_experimental_option("prefs", prefs)

        self.driver = webdriver.Chrome(options=chrome_options)

        # Hide automation indicators
        self.driver.execute_cdp_cmd('Network.setUserAgentOverride', {
            "userAgent": 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        })
        self.driver.execute_script("Object.defineProperty(navigator, 'webdriver', {get: () => undefined})")

        self.driver.maximize_window()
        logger.info("WebDriver initialized")

    def manual_login(self):
        """Open Facebook and wait for manual login"""
        print("\n" + "="*70)
        print("MANUAL LOGIN MODE")
        print("="*70)
        print("1. A browser window will open to Facebook")
        print("2. Please log in manually")
        print("3. Complete any 2FA or CAPTCHA challenges")
        print("4. Once logged in, come back here and press Enter")
        print("="*70 + "\n")

        self.driver.get("https://www.facebook.com")
        input("Press Enter after you have successfully logged in to Facebook...")

        logger.info("Manual login completed")
        return True

    def human_like_delay(self, min_seconds=1, max_seconds=3):
        """Add random human-like delay"""
        delay = random.uniform(min_seconds, max_seconds)
        time.sleep(delay)

    def scroll_page(self, scrolls: int = 3):
        """Scroll down the page to load more content"""
        for i in range(scrolls):
            current_height = self.driver.execute_script("return window.pageYOffset")
            total_height = self.driver.execute_script("return document.body.scrollHeight")

            scroll_increment = (total_height - current_height) // random.randint(3, 6)

            for _ in range(random.randint(3, 5)):
                self.driver.execute_script(f"window.scrollBy(0, {scroll_increment});")
                self.human_like_delay(0.3, 0.8)

            self.human_like_delay(2, 4)
            logger.info(f"Scroll {i+1}/{scrolls} completed")

    def scrape_posts(self, num_scrolls: int = 3) -> List[Dict]:
        """Scrape posts from the Facebook page"""
        try:
            logger.info(f"Navigating to page: {self.page_url}")
            self.driver.get(self.page_url)
            self.human_like_delay(5, 8)

            # Scroll to load more posts
            self.scroll_page(num_scrolls)

            # Get page source and parse with BeautifulSoup
            page_source = self.driver.page_source
            soup = BeautifulSoup(page_source, 'html.parser')

            posts = []

            # Find all post elements
            post_elements = soup.find_all('div', {'role': 'article'})

            if not post_elements:
                post_elements = soup.find_all('div', {'data-ad-preview': 'message'})

            logger.info(f"Found {len(post_elements)} potential posts")

            for idx, post in enumerate(post_elements[:20]):
                try:
                    post_data = {
                        'id': f'post_{idx}_{int(time.time())}',
                        'scraped_at': datetime.now().isoformat(),
                        'text': '',
                        'images': [],
                        'links': []
                    }

                    # Extract text content
                    text_elements = post.find_all(['span', 'p', 'div'], recursive=True)
                    text_content = ' '.join([elem.get_text(strip=True) for elem in text_elements if elem.get_text(strip=True)])
                    post_data['text'] = text_content[:500]

                    # Extract images
                    images = post.find_all('img')
                    post_data['images'] = [img.get('src') for img in images if img.get('src') and 'http' in img.get('src', '')]

                    # Extract links
                    links = post.find_all('a')
                    post_data['links'] = [link.get('href') for link in links if link.get('href')]

                    if post_data['text']:
                        posts.append(post_data)
                        logger.info(f"Scraped post {idx + 1}: {post_data['text'][:50]}...")

                except Exception as e:
                    logger.warning(f"Error parsing post {idx}: {str(e)}")
                    continue

            logger.info(f"Successfully scraped {len(posts)} posts")
            return posts

        except Exception as e:
            logger.error(f"Error scraping posts: {str(e)}")
            return []

    def scrape_page_info(self) -> Dict:
        """Scrape general page information"""
        try:
            logger.info("Scraping page information...")

            page_source = self.driver.page_source
            soup = BeautifulSoup(page_source, 'html.parser')

            page_info = {
                'page_url': self.page_url,
                'scraped_at': datetime.now().isoformat(),
                'page_name': '',
                'description': ''
            }

            # Extract page name
            title_tag = soup.find('title')
            if title_tag:
                page_info['page_name'] = title_tag.get_text(strip=True)

            # Extract meta description
            meta_desc = soup.find('meta', {'name': 'description'})
            if meta_desc:
                page_info['description'] = meta_desc.get('content', '')

            # Try to get page name from h1
            h1_tags = soup.find_all('h1')
            if h1_tags:
                page_info['page_name'] = h1_tags[0].get_text(strip=True)

            logger.info(f"Page info scraped: {page_info['page_name']}")
            return page_info

        except Exception as e:
            logger.error(f"Error scraping page info: {str(e)}")
            return {}

    def save_data(self, data: Dict, filename: str):
        """Save scraped data to JSON file"""
        try:
            os.makedirs('scraped_data', exist_ok=True)
            filepath = os.path.join('scraped_data', filename)

            with open(filepath, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=2)

            logger.info(f"Data saved to {filepath}")
            print(f"\n✓ Data successfully saved to: {filepath}")

        except Exception as e:
            logger.error(f"Error saving data: {str(e)}")

    def run(self, num_scrolls: int = 5):
        """Run the complete scraping process with manual login"""
        try:
            self.setup_driver()

            # Manual login
            if not self.manual_login():
                logger.error("Login failed. Exiting...")
                return

            # Scrape page info
            page_info = self.scrape_page_info()

            # Scrape posts
            posts = self.scrape_posts(num_scrolls)

            # Combine all data
            scraped_data = {
                'page_info': page_info,
                'posts': posts,
                'total_posts': len(posts),
                'scrape_metadata': {
                    'timestamp': datetime.now().isoformat(),
                    'scrolls_performed': num_scrolls
                }
            }

            # Save to file
            timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
            self.save_data(scraped_data, f'facebook_data_{timestamp}.json')

            print(f"\n✓ Scraping completed successfully!")
            print(f"✓ Total posts scraped: {len(posts)}")

            input("\nPress Enter to close the browser...")

        except Exception as e:
            logger.error(f"Error during scraping: {str(e)}")

        finally:
            if self.driver:
                self.driver.quit()
                logger.info("WebDriver closed")


def main():
    """Main function to run the scraper"""
    from config import FACEBOOK_PAGE_URL

    print("\n" + "="*70)
    print("FACEBOOK PAGE SCRAPER - MANUAL LOGIN VERSION")
    print("="*70)
    print("This version lets you log in manually to avoid anti-bot detection")
    print("="*70 + "\n")

    # Initialize scraper
    scraper = FacebookScraperManual(
        page_url=FACEBOOK_PAGE_URL,
        headless=False
    )

    # Run scraper
    scraper.run(num_scrolls=5)


if __name__ == "__main__":
    main()
