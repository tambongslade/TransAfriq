#!/usr/bin/env python3
"""
Facebook Page Scraper
Scrapes data from a Facebook page and stores it on the server
"""

import json
import time
import os
import random
from datetime import datetime
from typing import Dict, List, Optional
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import TimeoutException, NoSuchElementException
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


class FacebookScraper:
    def __init__(self, email: str, password: str, page_url: str, headless: bool = False):
        """
        Initialize the Facebook scraper

        Args:
            email: Facebook login email
            password: Facebook login password
            page_url: URL of the Facebook page to scrape
            headless: Run browser in headless mode
        """
        self.email = email
        self.password = password
        self.page_url = page_url
        self.headless = headless
        self.driver = None

    def setup_driver(self):
        """Set up Chrome WebDriver with enhanced anti-detection options"""
        chrome_options = Options()

        if self.headless:
            chrome_options.add_argument('--headless=new')

        # Anti-detection arguments
        chrome_options.add_argument('--disable-blink-features=AutomationControlled')
        chrome_options.add_experimental_option("excludeSwitches", ["enable-automation"])
        chrome_options.add_experimental_option('useAutomationExtension', False)

        # More realistic user agent
        chrome_options.add_argument('--user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36')

        # Additional stealth options
        chrome_options.add_argument('--disable-dev-shm-usage')
        chrome_options.add_argument('--no-sandbox')
        chrome_options.add_argument('--disable-gpu')
        chrome_options.add_argument('--disable-extensions')
        chrome_options.add_argument('--disable-infobars')
        chrome_options.add_argument('--start-maximized')
        chrome_options.add_argument('--disable-notifications')

        # Preferences to appear more human-like
        prefs = {
            "profile.default_content_setting_values.notifications": 2,
            "credentials_enable_service": False,
            "profile.password_manager_enabled": False,
            "profile.default_content_settings.popups": 0,
        }
        chrome_options.add_experimental_option("prefs", prefs)

        self.driver = webdriver.Chrome(options=chrome_options)

        # Execute CDP commands to hide automation
        self.driver.execute_cdp_cmd('Network.setUserAgentOverride', {
            "userAgent": 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        })
        self.driver.execute_script("Object.defineProperty(navigator, 'webdriver', {get: () => undefined})")

        self.driver.maximize_window()
        logger.info("WebDriver initialized with anti-detection measures")

    def human_like_delay(self, min_seconds=1, max_seconds=3):
        """Add random human-like delay"""
        delay = random.uniform(min_seconds, max_seconds)
        time.sleep(delay)

    def human_like_typing(self, element, text):
        """Type text in a human-like manner"""
        for char in text:
            element.send_keys(char)
            time.sleep(random.uniform(0.05, 0.2))

    def random_mouse_movement(self):
        """Perform random mouse movements to appear more human"""
        try:
            actions = ActionChains(self.driver)
            for _ in range(random.randint(1, 3)):
                x_offset = random.randint(-100, 100)
                y_offset = random.randint(-100, 100)
                actions.move_by_offset(x_offset, y_offset)
            actions.perform()
        except:
            pass

    def handle_2fa(self):
        """Handle two-factor authentication"""
        try:
            logger.info("Checking for 2FA prompt...")
            time.sleep(3)

            # Check if 2FA is required (look for common 2FA elements)
            page_source = self.driver.page_source.lower()

            if any(keyword in page_source for keyword in ['verification', 'security code', 'two-factor', 'confirm', 'code']):
                logger.info("Two-factor authentication detected!")
                print("\n" + "="*60)
                print("TWO-FACTOR AUTHENTICATION REQUIRED")
                print("="*60)
                print("Facebook has sent a verification code to your phone/email.")
                print("Please check your messages and enter the code below.")
                print("="*60)

                # Prompt user for code
                verification_code = input("\nEnter the 2FA verification code: ").strip()

                # Try to find and fill the code input field
                try:
                    # Common selectors for 2FA code input
                    code_field = None

                    # Try multiple possible selectors
                    selectors = [
                        (By.NAME, "approvals_code"),
                        (By.ID, "approvals_code"),
                        (By.XPATH, "//input[@type='text' and @placeholder]"),
                        (By.XPATH, "//input[@type='tel']"),
                        (By.XPATH, "//input[@inputmode='numeric']")
                    ]

                    for by, selector in selectors:
                        try:
                            code_field = self.driver.find_element(by, selector)
                            if code_field:
                                break
                        except NoSuchElementException:
                            continue

                    if code_field:
                        code_field.clear()
                        code_field.send_keys(verification_code)
                        logger.info("Verification code entered")

                        # Try to find and click continue/submit button
                        time.sleep(1)
                        try:
                            submit_buttons = self.driver.find_elements(By.XPATH, "//button[@type='submit']")
                            if submit_buttons:
                                submit_buttons[0].click()
                                logger.info("Clicked submit button")
                            else:
                                # Try alternative button selectors
                                continue_button = self.driver.find_element(By.XPATH, "//button[contains(text(), 'Continue') or contains(text(), 'Submit')]")
                                continue_button.click()
                        except:
                            logger.warning("Could not find submit button - you may need to click it manually")
                            input("\nPress Enter after you've clicked the submit button...")

                        time.sleep(5)
                        logger.info("2FA verification completed")
                        return True
                    else:
                        logger.warning("Could not find code input field")
                        print("\nCould not automatically find the code input field.")
                        input("Please enter the code manually in the browser and press Enter when done...")
                        return True

                except Exception as e:
                    logger.error(f"Error entering 2FA code: {str(e)}")
                    print("\nError entering code automatically.")
                    input("Please complete 2FA manually in the browser and press Enter when done...")
                    return True
            else:
                logger.info("No 2FA detected - proceeding")
                return True

        except Exception as e:
            logger.error(f"Error handling 2FA: {str(e)}")
            return False

    def login(self):
        """Log in to Facebook with human-like behavior"""
        try:
            logger.info("Attempting to log in to Facebook...")
            self.driver.get("https://www.facebook.com")

            # Random delay to appear human
            self.human_like_delay(2, 4)

            # Random mouse movement
            self.random_mouse_movement()

            # Wait for and fill email
            email_field = WebDriverWait(self.driver, 10).until(
                EC.presence_of_element_located((By.ID, "email"))
            )

            # Click on email field before typing
            email_field.click()
            self.human_like_delay(0.5, 1)

            # Type email in human-like manner
            self.human_like_typing(email_field, self.email)
            self.human_like_delay(0.5, 1.5)

            # Fill password
            password_field = self.driver.find_element(By.ID, "pass")
            password_field.click()
            self.human_like_delay(0.3, 0.8)

            # Type password in human-like manner
            self.human_like_typing(password_field, self.password)
            self.human_like_delay(0.5, 1.5)

            # Random mouse movement before clicking
            self.random_mouse_movement()

            # Click login button
            login_button = self.driver.find_element(By.NAME, "login")
            login_button.click()

            # Wait for login to complete
            logger.info("Waiting for login to process...")
            self.human_like_delay(5, 8)

            # Handle 2FA if required
            if not self.handle_2fa():
                logger.error("2FA handling failed")
                return False

            # Check if login was successful
            if "login" in self.driver.current_url.lower():
                logger.error("Login failed - still on login page")
                return False

            logger.info("Successfully logged in to Facebook")
            return True

        except Exception as e:
            logger.error(f"Login failed: {str(e)}")
            return False

    def scroll_page(self, scrolls: int = 3):
        """
        Scroll down the page to load more content with human-like behavior

        Args:
            scrolls: Number of times to scroll
        """
        for i in range(scrolls):
            # Scroll gradually instead of jumping to bottom
            current_height = self.driver.execute_script("return window.pageYOffset")
            total_height = self.driver.execute_script("return document.body.scrollHeight")

            # Scroll in smaller increments
            scroll_increment = (total_height - current_height) // random.randint(3, 6)

            for _ in range(random.randint(3, 5)):
                self.driver.execute_script(f"window.scrollBy(0, {scroll_increment});")
                self.human_like_delay(0.3, 0.8)

            # Random pause at the bottom
            self.human_like_delay(2, 4)
            logger.info(f"Scroll {i+1}/{scrolls} completed")

    def scrape_posts(self, num_scrolls: int = 3) -> List[Dict]:
        """
        Scrape posts from the Facebook page

        Args:
            num_scrolls: Number of times to scroll to load more posts

        Returns:
            List of post dictionaries containing scraped data
        """
        try:
            logger.info(f"Navigating to page: {self.page_url}")
            self.driver.get(self.page_url)
            time.sleep(5)

            # Scroll to load more posts
            self.scroll_page(num_scrolls)

            # Get page source and parse with BeautifulSoup
            page_source = self.driver.page_source
            soup = BeautifulSoup(page_source, 'html.parser')

            posts = []

            # Find all post elements (Facebook's structure changes frequently)
            # This is a generic approach - may need adjustment
            post_elements = soup.find_all('div', {'data-ad-preview': 'message'})

            if not post_elements:
                # Try alternative selectors
                post_elements = soup.find_all('div', {'role': 'article'})

            logger.info(f"Found {len(post_elements)} potential posts")

            for idx, post in enumerate(post_elements[:20]):  # Limit to 20 posts
                try:
                    post_data = {
                        'id': f'post_{idx}_{int(time.time())}',
                        'scraped_at': datetime.now().isoformat(),
                        'text': '',
                        'likes': 0,
                        'comments': 0,
                        'shares': 0,
                        'timestamp': '',
                        'images': [],
                        'links': []
                    }

                    # Extract text content
                    text_elements = post.find_all(['span', 'p'], recursive=True)
                    text_content = ' '.join([elem.get_text(strip=True) for elem in text_elements])
                    post_data['text'] = text_content[:500]  # Limit text length

                    # Extract images
                    images = post.find_all('img')
                    post_data['images'] = [img.get('src') for img in images if img.get('src')]

                    # Extract links
                    links = post.find_all('a')
                    post_data['links'] = [link.get('href') for link in links if link.get('href')]

                    if post_data['text']:  # Only add if there's content
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
        """
        Scrape general page information

        Returns:
            Dictionary containing page information
        """
        try:
            logger.info("Scraping page information...")

            page_source = self.driver.page_source
            soup = BeautifulSoup(page_source, 'html.parser')

            page_info = {
                'page_url': self.page_url,
                'scraped_at': datetime.now().isoformat(),
                'page_name': '',
                'followers': '',
                'description': ''
            }

            # Try to extract page name
            title_tag = soup.find('title')
            if title_tag:
                page_info['page_name'] = title_tag.get_text(strip=True)

            # Extract meta description
            meta_desc = soup.find('meta', {'name': 'description'})
            if meta_desc:
                page_info['description'] = meta_desc.get('content', '')

            logger.info(f"Page info scraped: {page_info['page_name']}")
            return page_info

        except Exception as e:
            logger.error(f"Error scraping page info: {str(e)}")
            return {}

    def save_data(self, data: Dict, filename: str):
        """
        Save scraped data to JSON file

        Args:
            data: Data to save
            filename: Output filename
        """
        try:
            # Create data directory if it doesn't exist
            os.makedirs('scraped_data', exist_ok=True)

            filepath = os.path.join('scraped_data', filename)

            with open(filepath, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=2)

            logger.info(f"Data saved to {filepath}")

        except Exception as e:
            logger.error(f"Error saving data: {str(e)}")

    def run(self, num_scrolls: int = 3):
        """
        Run the complete scraping process

        Args:
            num_scrolls: Number of scrolls to perform
        """
        try:
            self.setup_driver()

            if not self.login():
                logger.error("Failed to login. Exiting...")
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

            logger.info("Scraping completed successfully!")

        except Exception as e:
            logger.error(f"Error during scraping: {str(e)}")

        finally:
            if self.driver:
                self.driver.quit()
                logger.info("WebDriver closed")


def main():
    """Main function to run the scraper"""

    # Load configuration
    from config import FACEBOOK_EMAIL, FACEBOOK_PASSWORD, FACEBOOK_PAGE_URL

    # Initialize scraper
    scraper = FacebookScraper(
        email=FACEBOOK_EMAIL,
        password=FACEBOOK_PASSWORD,
        page_url=FACEBOOK_PAGE_URL,
        headless=False  # Set to True for headless mode
    )

    # Run scraper
    scraper.run(num_scrolls=5)


if __name__ == "__main__":
    main()
