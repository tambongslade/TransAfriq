# Vehicle Data Format Guide

This document explains the expected data format for vehicles scraped from AuctionExport or other sources.

## Updated Vehicle Structure

Based on your example: **"2021 GMC TERRAIN SLE AWD, Automatic 4 cylinder, Delivered to Ouaga HT by order"**

### MongoDB Collection: `vehicles_inventory`

```javascript
{
  // Required Fields
  "_id": ObjectId("..."),
  "vehicle_id": "unique-id-123",  // Unique identifier
  "mainCategory": "vehicles",      // Always "vehicles"

  // Basic Information
  "brand": "GMC",                  // Vehicle make
  "model": "TERRAIN SLE AWD",      // Model with trim
  "year": 2021,                    // Year as number
  "price": 15000000,               // Price in XAF

  // Optional: Full title (useful for display)
  "title": "2021 GMC TERRAIN SLE AWD",

  // Images (Required)
  "thumbnail": "https://example.com/image.jpg",
  "images": [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg"
  ],

  // Specifications (All optional except condition)
  "specs": {
    "transmission": "Automatic",      // "Automatic" or "Manual"
    "engineSize": "4 cylinder",       // e.g., "4 cylinder", "V6", "2.0L"
    "driveType": "AWD",               // e.g., "AWD", "FWD", "4WD", "RWD"
    "fuelType": "Essence",            // Optional: "Essence", "Diesel", "Électrique", "Hybride"
    "mileage": 45000,                 // Optional: in km
    "color": "Noir",                  // Optional: vehicle color
    "doors": 4,                       // Optional: number of doors
    "seats": 5,                       // Optional: number of seats
    "condition": "Occasion",          // Required: "Neuf" or "Occasion"
    "vin": "1GKLVGKD0MJ123456",      // Optional: VIN number
    "location": "Delivered to Ouaga HT by order"  // Delivery/location info
  },

  // Description
  "description": "Excellent GMC Terrain in great condition...",

  // Features (array of strings)
  "features": [
    "Climatisation automatique",
    "Caméra de recul",
    "Bluetooth",
    "Système de navigation",
    "Sièges chauffants"
  ],

  // Category
  "category": "SUV",  // Options: "SUV", "Berline", "Pick-up", "Camionnette", "Sport", "Autre"

  // Status
  "available": true,
  "featured": false,

  // Source Information
  "source": "AuctionExport",
  "sourceUrl": "https://auctionexport.com/vehicle/123456",

  // Timestamps
  "createdAt": "2025-11-21T10:00:00Z",
  "updatedAt": "2025-11-21T10:00:00Z"
}
```

## Parsing Your Example Data

### Input:
```
"2021 GMC TERRAIN SLE AWD"
"Automatic 4 cylinder"
"Delivered to Ouaga HT by order"
```

### Parse Strategy:

```python
def parse_vehicle_data(title, specs, location):
    """
    Parse vehicle data from scraped text

    Args:
        title: e.g., "2021 GMC TERRAIN SLE AWD"
        specs: e.g., "Automatic 4 cylinder"
        location: e.g., "Delivered to Ouaga HT by order"
    """
    # Parse title: "YEAR BRAND MODEL"
    parts = title.split()
    year = int(parts[0])
    brand = parts[1]
    model = " ".join(parts[2:])  # Everything after brand

    # Parse specs: "Transmission EngineSize"
    specs_parts = specs.split()
    transmission = specs_parts[0]  # "Automatic" or "Manual"
    engine_size = " ".join(specs_parts[1:])  # "4 cylinder"

    # Extract drive type from model if present
    drive_type = None
    if "AWD" in model:
        drive_type = "AWD"
    elif "FWD" in model:
        drive_type = "FWD"
    elif "4WD" in model:
        drive_type = "4WD"
    elif "RWD" in model:
        drive_type = "RWD"

    return {
        "brand": brand,
        "model": model,
        "year": year,
        "specs": {
            "transmission": transmission,
            "engineSize": engine_size,
            "driveType": drive_type,
            "location": location,
            "condition": "Occasion"  # Default for auction vehicles
        }
    }
```

## Updated Scraper Integration

### Python Example (auction_scraper.py):

```python
def scrape_vehicle(vehicle_element):
    """Scrape a single vehicle from AuctionExport"""

    # Extract basic info
    title = vehicle_element.find("h3", class_="vehicle-title").text.strip()
    # e.g., "2021 GMC TERRAIN SLE AWD"

    price_text = vehicle_element.find("span", class_="price").text.strip()
    price = parse_price(price_text)  # Convert to XAF

    # Extract specs
    specs_text = vehicle_element.find("div", class_="specs").text.strip()
    # e.g., "Automatic 4 cylinder"

    # Extract location/delivery info
    location_text = vehicle_element.find("div", class_="location").text.strip()
    # e.g., "Delivered to Ouaga HT by order"

    # Extract images
    thumbnail = vehicle_element.find("img")["src"]
    images = [img["src"] for img in vehicle_element.find_all("img", class_="gallery-image")]

    # Parse the data
    parsed = parse_vehicle_data(title, specs_text, location_text)

    # Build vehicle document
    vehicle_doc = {
        "vehicle_id": generate_unique_id(),
        "mainCategory": "vehicles",
        "brand": parsed["brand"],
        "model": parsed["model"],
        "year": parsed["year"],
        "title": title,
        "price": price,
        "thumbnail": download_and_store_image(thumbnail),
        "images": [download_and_store_image(img) for img in images],
        "specs": {
            "transmission": parsed["specs"]["transmission"],
            "engineSize": parsed["specs"]["engineSize"],
            "driveType": parsed["specs"]["driveType"],
            "location": parsed["specs"]["location"],
            "condition": "Occasion",
        },
        "description": f"{title}. {specs_text}. {location_text}",
        "features": extract_features(vehicle_element),  # Extract from listing
        "category": determine_category(parsed["model"]),
        "available": True,
        "featured": False,
        "source": "AuctionExport",
        "sourceUrl": get_vehicle_url(vehicle_element),
        "createdAt": datetime.utcnow().isoformat(),
        "updatedAt": datetime.utcnow().isoformat(),
    }

    return vehicle_doc


def determine_category(model):
    """Determine category from model name"""
    model_upper = model.upper()

    if any(word in model_upper for word in ["TERRAIN", "CRV", "RAV4", "ESCAPE", "ROGUE", "EXPLORER"]):
        return "SUV"
    elif any(word in model_upper for word in ["F-150", "SILVERADO", "RAM", "RANGER", "TACOMA"]):
        return "Pick-up"
    elif any(word in model_upper for word in ["CAMRY", "ACCORD", "CIVIC", "COROLLA", "ALTIMA"]):
        return "Berline"
    elif any(word in model_upper for word in ["MUSTANG", "CORVETTE", "CHALLENGER", "CAMARO"]):
        return "Sport"
    elif any(word in model_upper for word in ["TRANSIT", "SPRINTER", "PROMASTER"]):
        return "Camionnette"
    else:
        return "Autre"


def parse_price(price_text):
    """Convert USD to XAF (example rate: 1 USD = 600 XAF)"""
    # Remove $ and commas
    price_usd = float(price_text.replace("$", "").replace(",", ""))
    # Convert to XAF
    price_xaf = int(price_usd * 600)
    return price_xaf
```

## Display on Frontend

The frontend will now display:

### Vehicle Card (List View):
- **Title**: 2021 GMC TERRAIN SLE AWD
- **Year**: 2021
- **Price**: 15,000,000 FCFA
- **Specs**:
  - 🔧 Automatic
  - ⚡ 4 cylinder
  - 🔄 AWD

### Vehicle Detail Page:
- **Location Banner**: "📍 Livraison: Delivered to Ouaga HT by order"
- **Specs Grid**:
  - ✓ Transmission: Automatic
  - ✓ Moteur: 4 cylinder
  - ✓ Traction: AWD
  - ✓ État: Occasion
  - (+ all other specs if available)

## Required vs Optional Fields

### ✅ **Always Required:**
- `vehicle_id` (unique)
- `mainCategory` ("vehicles")
- `brand`
- `model`
- `year`
- `price`
- `thumbnail`
- `images` (at least 1)
- `specs.condition` ("Neuf" or "Occasion")
- `description`
- `category`
- `available`
- `createdAt`
- `updatedAt`

### 📋 **Optional (but recommended):**
- `title` - Full formatted title
- `specs.transmission` - Show in both card and detail
- `specs.engineSize` - Show in both card and detail
- `specs.driveType` - Show in both card and detail
- `specs.location` - Delivery info (shows prominently)
- `specs.fuelType` - Fuel type
- `specs.mileage` - Kilometers
- `specs.color` - Vehicle color
- `specs.doors` - Number of doors
- `specs.seats` - Number of seats
- `specs.vin` - VIN number
- `features` - Array of features
- `source` - Where scraped from
- `sourceUrl` - Original listing URL

## Testing Your Scraper

Create a test document with your example:

```python
test_vehicle = {
    "vehicle_id": "test-001",
    "mainCategory": "vehicles",
    "brand": "GMC",
    "model": "TERRAIN SLE AWD",
    "year": 2021,
    "title": "2021 GMC TERRAIN SLE AWD",
    "price": 15000000,
    "thumbnail": "https://via.placeholder.com/400x300",
    "images": [
        "https://via.placeholder.com/800x600",
        "https://via.placeholder.com/800x600"
    ],
    "specs": {
        "transmission": "Automatic",
        "engineSize": "4 cylinder",
        "driveType": "AWD",
        "location": "Delivered to Ouaga HT by order",
        "condition": "Occasion"
    },
    "description": "2021 GMC TERRAIN SLE AWD. Automatic 4 cylinder. Delivered to Ouaga HT by order.",
    "features": [
        "Climatisation automatique",
        "Caméra de recul",
        "Bluetooth"
    ],
    "category": "SUV",
    "available": True,
    "featured": False,
    "source": "AuctionExport",
    "createdAt": "2025-11-21T10:00:00Z",
    "updatedAt": "2025-11-21T10:00:00Z"
}

# Insert into MongoDB
collection.insert_one(test_vehicle)
```

## Next Steps

1. **Update your scraper** to parse data in this format
2. **Test with a few vehicles** to ensure parsing is correct
3. **Build the backend API** to serve this data
4. **Connect frontend to API** (replace mock data)

The frontend is now fully ready to handle this flexible data structure!
