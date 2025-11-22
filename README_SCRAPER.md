# Facebook Page Scraper

A Python script that scrapes data from your Facebook page using Selenium and BeautifulSoup, then stores it on your server.

## Features

- Automated or manual Facebook login
- Advanced anti-bot detection evasion
- Human-like behavior simulation
- Page information scraping
- Post content extraction (text, images, links)
- JSON data export
- Comprehensive logging
- Configurable scrolling for loading more posts

## Prerequisites

1. Python 3.8 or higher
2. Chrome browser installed
3. ChromeDriver (will be managed automatically by webdriver-manager)

## Installation

1. Install the required dependencies:
```bash
python3 -m pip install -r requirements.txt
```

2. Configure your credentials in `config.py`:
```python
FACEBOOK_EMAIL = "your_email@example.com"
FACEBOOK_PASSWORD = "your_password"
FACEBOOK_PAGE_URL = "https://www.facebook.com/share/1Gi9sUJatF/?mibextid=wwXIfr"
```

## Usage

### Recommended: Manual Login Version (Best for avoiding anti-bot detection)

This version opens a browser and lets you log in manually, then automates the scraping:

```bash
python3 facebook_scraper_manual.py
```

**Steps:**
1. Browser opens to Facebook login page
2. Log in manually with your credentials
3. Complete any 2FA or CAPTCHA challenges
4. Press Enter in terminal when logged in
5. Script automatically scrapes the page
6. Data is saved to `scraped_data/` directory

### Alternative: Automated Login Version

Run the scraper with automated login:
```bash
python3 facebook_scraper.py
```

This will:
- Use human-like typing and mouse movements
- Handle 2FA automatically (prompts you for code)
- Use anti-detection measures

### Advanced Usage

You can customize the scraper by modifying the script:

```python
from facebook_scraper import FacebookScraper

# Initialize scraper
scraper = FacebookScraper(
    email="your_email@example.com",
    password="your_password",
    page_url="https://www.facebook.com/your-page",
    headless=True  # Run in background
)

# Run with custom scroll count
scraper.run(num_scrolls=10)
```

## Output

The script creates a `scraped_data` directory containing JSON files with:

```json
{
  "page_info": {
    "page_url": "...",
    "page_name": "...",
    "description": "..."
  },
  "posts": [
    {
      "id": "post_1_...",
      "text": "Post content...",
      "images": ["url1", "url2"],
      "links": ["url1", "url2"],
      "scraped_at": "2025-11-21T..."
    }
  ],
  "total_posts": 15
}
```

## Important Notes

### Facebook's Terms of Service
- Ensure you have permission to scrape the page
- This is intended for your own page data
- Be aware of Facebook's rate limiting and anti-bot measures

### Security
- Never commit `config.py` with real credentials
- Use environment variables in production
- Keep your scraped data secure

### Reliability
- Facebook frequently changes its HTML structure
- The selectors may need updates over time
- Add delays between requests to avoid blocking

## Troubleshooting

### Login Issues
- Ensure credentials are correct
- Facebook may require CAPTCHA verification
- Try disabling headless mode to see what's happening
- You may need to handle 2FA manually

### No Posts Found
- Facebook's HTML structure may have changed
- Increase the number of scrolls
- Check if the page is public/accessible

### ChromeDriver Issues
```bash
# Install webdriver-manager to auto-manage ChromeDriver
pip install webdriver-manager
```

## Scheduling

To run the scraper automatically, use cron (Linux/Mac):

```bash
# Run every day at 2 AM
0 2 * * * cd /path/to/scraper && python facebook_scraper.py
```

Or Task Scheduler on Windows.

## Future Enhancements

- [ ] Handle 2FA authentication
- [ ] Add database storage (SQLite/PostgreSQL)
- [ ] Extract video content
- [ ] Parse comment threads
- [ ] Add proxy support
- [ ] Implement rate limiting
- [ ] Add email notifications

## License

For educational and authorized use only.
