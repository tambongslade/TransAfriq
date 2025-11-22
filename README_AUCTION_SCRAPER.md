# AuctionExport Vehicle Scraper

A Python scraper that collects vehicle data from AuctionExport.com and stores it in MongoDB for the TransAfriq platform.

## Features

- Automated vehicle data extraction from AuctionExport
- MongoDB integration for data storage
- Anti-bot detection measures
- Pagination support (scrapes multiple pages)
- Duplicate prevention (unique vehicle IDs)
- Comprehensive logging
- Extracts complete vehicle information:
  - Title, Year, Make, Model
  - Price (USD)
  - Mileage
  - Location/Auction
  - Lot Number, VIN
  - Body type, Transmission, Fuel type
  - Colors (exterior/interior)
  - Damage information
  - Multiple images
  - Vehicle URL

## Prerequisites

1. Python 3.8 or higher
2. Chrome browser installed
3. MongoDB server access

## Installation

Install the required dependencies:
```bash
python3 -m pip install -r requirements.txt
```

## Configuration

The scraper is pre-configured with your MongoDB connection:

```python
MONGODB_URI = "mongodb://churchadmin:ChurchSecure2025!Mongo@173.249.49.3:27017/church?authSource=admin"
DB_NAME = "church"
COLLECTION_NAME = "vehicles_inventory"
```

## Usage

### Basic Usage

Run the scraper:
```bash
python3 auction_scraper.py
```

This will:
1. Connect to your MongoDB database
2. Scrape 20 pages of vehicle listings (300 vehicles)
3. **Download all vehicle images** to `vehicle_images/` folder
4. Store all data in the `church.vehicles_inventory` collection
5. Prevent duplicates using vehicle IDs
6. Log all activities to `auction_scraper.log`

### Advanced Usage

Customize the scraper in the code:

```python
from auction_scraper import AuctionExportScraper

# Initialize scraper
scraper = AuctionExportScraper(
    mongodb_uri="your_mongodb_uri",
    db_name="your_database",
    collection_name="your_collection"
)

# Run with custom settings
search_url = "https://www.auctionexport.com/en/Inventory/Search_Results?..."
scraper.run(search_url, max_pages=50)  # Scrape 50 pages
```

### Filtering Vehicles

Modify the search URL to filter by:

**By Make:**
```
autoMake=TOYOTA
```

**By Year Range:**
```
autoYear_from=2020&autoYear_to=2025
```

**By Price Range:**
```
price_from=5000&price_to=20000
```

**By Vehicle Type:**
```
vehicleType=1  # 1=Car, 2=Truck, 3=SUV, etc.
```

## Data Structure

Each vehicle document in MongoDB contains:

```json
{
  "vehicle_id": "12345",
  "title": "2020 TOYOTA CAMRY",
  "year": "2020",
  "make": "TOYOTA",
  "model": "CAMRY",
  "price": "$15,000",
  "price_usd": 15000,
  "mileage": "45,000 miles",
  "location": "COPART - Dallas",
  "auction_date": "2025-11-25",
  "lot_number": "LOT-12345",
  "vin": "1234567890ABCDEFG",
  "body_type": "Sedan",
  "transmission": "Automatic",
  "fuel_type": "Gasoline",
  "engine": "2.5L 4-Cylinder",
  "drive": "FWD",
  "color_exterior": "Silver",
  "color_interior": "Black",
  "damage": "Front End",
  "images": [
    "https://www.auctionexport.com/images/vehicle1.jpg",
    "https://www.auctionexport.com/images/vehicle2.jpg"
  ],
  "local_images": [
    "vehicle_images/12345/image_0.jpg",
    "vehicle_images/12345/image_1.jpg"
  ],
  "url": "https://www.auctionexport.com/en/Inventory/Info/12345",
  "status": "available",
  "scraped_at": "2025-11-21T12:00:00",
  "source": "auctionexport"
}
```

## Database Management

### View Total Vehicles
```python
from pymongo import MongoClient

client = MongoClient("mongodb://churchadmin:ChurchSecure2025!Mongo@173.249.49.3:27017/church?authSource=admin")
db = client['church']
collection = db['vehicles']

print(f"Total vehicles: {collection.count_documents({})}")
```

### Query Vehicles
```python
# Find Toyota vehicles
toyotas = collection.find({"make": "TOYOTA"})

# Find vehicles under $10,000
affordable = collection.find({"price_usd": {"$lt": 10000}})

# Find recent additions
from datetime import datetime, timedelta
recent = collection.find({
    "scraped_at": {"$gte": (datetime.now() - timedelta(days=1)).isoformat()}
})
```

## Scheduling

To run the scraper automatically:

### Using cron (Mac/Linux):
```bash
# Run every day at 3 AM
0 3 * * * cd /path/to/TransAfriq && python3 auction_scraper.py
```

### Using Task Scheduler (Windows):
Create a task that runs `python3 auction_scraper.py` at your desired schedule.

## Logging

All activities are logged to `auction_scraper.log`:
- Connection status
- Vehicles found and scraped
- Database operations
- Errors and warnings

## Performance

- Scrapes approximately 15 vehicles per page
- Average time: 3-5 seconds per page
- 20 pages = ~300 vehicles in 1-2 minutes
- Respects rate limits with random delays

## Troubleshooting

### MongoDB Connection Issues
```
Error: Failed to connect to MongoDB
```
**Solution:** Check your MongoDB server is running and credentials are correct.

### No Vehicles Found
```
Found 0 vehicle cards
```
**Solution:** AuctionExport may have changed their HTML structure. Update selectors in `scrape_vehicle_details()` method.

### ChromeDriver Issues
```
Error: ChromeDriver not found
```
**Solution:** Install ChromeDriver or use webdriver-manager:
```bash
pip install webdriver-manager
```

## Integration with TransAfriq

The scraped data can be used directly in your TransAfriq application:

```typescript
// Example: Fetch vehicles from MongoDB
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db('church');
const vehicles = await db.collection('vehicles').find({}).toArray();
```

## Future Enhancements

- [ ] Add vehicle detail page scraping (more comprehensive data)
- [ ] Implement image downloading and local storage
- [ ] Add email notifications for new high-value vehicles
- [ ] Create REST API endpoints for vehicle data
- [ ] Add filtering by damage level
- [ ] Implement incremental updates (only new vehicles)

## Security Notes

- Keep your MongoDB credentials secure
- Never commit credentials to version control
- Use environment variables in production
- Respect AuctionExport's terms of service

## License

For internal TransAfriq use only.
