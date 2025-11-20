# FRONTEND SPECIFICATIONS - Car Import Site (Mobile-First)

## 🎯 CONCEPT: ALIBABA-STYLE SIMPLICITY

**User Flow (3 Steps):**
1. **Land on site** → See cars immediately (no marketing fluff)
2. **Click car** → View details
3. **Click WhatsApp** → Order via WhatsApp

**Design Philosophy:**
- **Mobile-first** (90% of users on phones)
- **Product-focused** (cars are the hero)
- **Minimal navigation** (don't overwhelm)
- **One goal: Get to WhatsApp fast**

---

## 📱 MOBILE-FIRST STRUCTURE

### **LAYOUT PRIORITY**

```
Mobile (320px - 768px) → Design THIS first
Tablet (768px - 1024px) → Adapt from mobile
Desktop (1024px+) → Enhance mobile design
```

---

## 🏗️ SIMPLIFIED SITE ARCHITECTURE

### **PAGE HIERARCHY**

```
1. Homepage (/) 
   ↓
2. Vehicle Detail (/vehicule/:id)
   ↓
3. WhatsApp Order

Additional Pages (Accessible from menu):
- Comment ça marche (/comment-ca-marche)
- À propos (/a-propos)
- Contact (/contact)
- Admin Panel (/admin/*)
```

---

## 📄 PAGE-BY-PAGE BREAKDOWN

### **1. HOMEPAGE (`/`) - ALIBABA STYLE**

**Layout:**
```
┌─────────────────────────┐
│ [Logo]    [Menu] [Lang] │ ← Sticky Header (minimal)
├─────────────────────────┤
│   Quick Filter Chips    │ ← SUV, Berline, Pick-up, Tout
├─────────────────────────┤
│                         │
│  ┌─────┐ ┌─────┐       │
│  │ CAR │ │ CAR │       │ ← 2 columns on mobile
│  │ IMG │ │ IMG │       │
│  └─────┘ └─────┘       │
│                         │
│  ┌─────┐ ┌─────┐       │
│  │ CAR │ │ CAR │       │
│  │ IMG │ │ IMG │       │
│  └─────┘ └─────┘       │
│                         │
│    [Load More]          │
├─────────────────────────┤
│  Payment Partners       │
│  🟧 Orange Money        │
│  📱 MTN 🌊 Wave         │
└─────────────────────────┘
```

**Components:**

```jsx
// pages/Home.jsx
<HomePage>
  <StickyHeader />
  
  <QuickFilterChips>
    <Chip active>Tout</Chip>
    <Chip>SUV</Chip>
    <Chip>Berline</Chip>
    <Chip>Pick-up</Chip>
    <Chip>Camionnette</Chip>
  </QuickFilterChips>
  
  <VehicleGrid>
    {vehicles.map(vehicle => (
      <VehicleCard key={vehicle.id} vehicle={vehicle} />
    ))}
  </VehicleGrid>
  
  <LoadMoreButton />
  
  <FloatingWhatsAppButton /> {/* Fixed bottom-right */}
  
  <SimpleFooter>
    <PartnerLogos />
    <QuickLinks /> {/* Comment ça marche, À propos, Contact */}
  </SimpleFooter>
</HomePage>
```

**Key Points:**
- ✅ **NO hero banner** (waste of screen space)
- ✅ **Cars immediately visible** (above the fold)
- ✅ **Infinite scroll or Load More** (better than pagination on mobile)
- ✅ **Large product cards** (easy to tap)
- ✅ **Minimal header** (logo + hamburger menu)

---

### **2. VEHICLE DETAIL PAGE (`/vehicule/:id`)**

**Layout (Mobile-First):**

```
┌─────────────────────────┐
│ [<Back]   [Share]       │
├─────────────────────────┤
│                         │
│   Large Image Gallery   │ ← Swipeable (Swiper.js)
│   • • • •               │ ← Dots indicator
│                         │
├─────────────────────────┤
│ Toyota Camry 2020       │ ← Title
│ 15 000 000 XAF          │ ← Price (big & bold)
├─────────────────────────┤
│ 📋 Caractéristiques     │
│ ⛽ Essence               │
│ 🔧 Automatique          │
│ 📏 150 000 km           │
│ 🎨 Noir                 │
│ 🚪 4 portes             │
├─────────────────────────┤
│ 📦 Livraison            │
│ Aérienne: 5-7 jours     │
│ Maritime: 25-35 jours   │
├─────────────────────────┤
│ 💰 Paiement             │
│ • 15% à la commande     │
│ • 85% à la livraison    │
├─────────────────────────┤
│ 📝 Description          │
│ [Full vehicle desc]     │
├─────────────────────────┤
│ ✨ Équipements          │
│ • Climatisation         │
│ • GPS Navigation        │
│ • Caméra de recul       │
└─────────────────────────┘

┌─────────────────────────┐
│ [Commander WhatsApp] 💬 │ ← Sticky Bottom Button
└─────────────────────────┘
```

**Component Structure:**

```jsx
// pages/VehicleDetail.jsx
<VehicleDetailPage>
  <BackButton />
  
  <ImageGallery images={vehicle.images} />
  
  <PriceSection>
    <h1>{vehicle.brand} {vehicle.model} {vehicle.year}</h1>
    <p className="price">{formatPrice(vehicle.price)}</p>
  </PriceSection>
  
  <SpecsGrid specs={vehicle.specs} />
  
  <ShippingInfo />
  
  <PaymentInfo />
  
  <Description text={vehicle.description} />
  
  <FeaturesList features={vehicle.features} />
  
  <StickyOrderButton onClick={openWhatsAppModal}>
    💬 Commander sur WhatsApp
  </StickyOrderButton>
  
  <WhatsAppModal 
    isOpen={modalOpen} 
    vehicle={vehicle}
    onClose={closeModal}
  />
</VehicleDetailPage>
```

**Key Points:**
- ✅ **Image gallery at top** (users want to see the car first)
- ✅ **Price immediately visible** (no hiding it)
- ✅ **Sticky WhatsApp button** (always accessible)
- ✅ **Simple specs grid** (icons + text, easy to scan)
- ✅ **No clutter** (only essential info)

---

### **3. WHATSAPP ORDER MODAL**

**Flow:**

```
Click "Commander WhatsApp"
    ↓
Modal opens (full screen on mobile)
    ↓
Simple form (3-4 fields max)
    ↓
Click "Envoyer WhatsApp"
    ↓
Redirect to WhatsApp with pre-filled message
```

**Modal Component:**

```jsx
// components/WhatsAppModal.jsx
<Modal isOpen={isOpen} onClose={onClose} fullScreen>
  <div className="modal-header">
    <h2>Commander ce véhicule</h2>
    <button onClick={onClose}>✕</button>
  </div>
  
  <div className="vehicle-summary">
    <img src={vehicle.thumbnail} />
    <div>
      <h3>{vehicle.brand} {vehicle.model}</h3>
      <p>{formatPrice(vehicle.price)}</p>
    </div>
  </div>
  
  <form onSubmit={handleSubmit}>
    <Input 
      label="Votre nom" 
      placeholder="Ex: Jean Dupont"
      required
      autoFocus
    />
    
    <Input 
      label="WhatsApp" 
      type="tel"
      placeholder="+237 6XX XXX XXX"
      required
    />
    
    <Select label="Livraison" required>
      <option value="sea">🚢 Maritime (25-35 jours)</option>
      <option value="air">📦 Aérienne (5-7 jours)</option>
    </Select>
    
    <Button type="submit" size="large" fullWidth>
      <WhatsAppIcon /> Envoyer sur WhatsApp
    </Button>
  </form>
  
  <p className="payment-reminder">
    💡 Acompte de 15% requis à la commande
  </p>
</Modal>
```

**WhatsApp Message Format:**

```
🚗 COMMANDE VÉHICULE

Client: Jean Dupont
Tel: +237 6XX XXX XXX

Véhicule: Toyota Camry 2020
Prix: 15 000 000 XAF

Livraison: 🚢 Maritime (25-35 jours)

---
Commande du site web
```

---

### **4. COMMENT ÇA MARCHE PAGE** (Simple)

```jsx
<HowItWorksPage>
  <Header />
  
  <Steps>
    <Step number="1">
      <Icon>🔍</Icon>
      <h3>Parcourez le catalogue</h3>
      <p>Plus de 100 véhicules disponibles</p>
    </Step>
    
    <Step number="2">
      <Icon>💬</Icon>
      <h3>Commandez via WhatsApp</h3>
      <p>Simple et rapide</p>
    </Step>
    
    <Step number="3">
      <Icon>💰</Icon>
      <h3>Payez 15% d'acompte</h3>
      <p>Orange Money, MTN, Wave acceptés</p>
    </Step>
    
    <Step number="4">
      <Icon>🚢</Icon>
      <h3>Expédition Chine → Afrique</h3>
      <p>5-7 jours (aérien) ou 25-35 jours (maritime)</p>
    </Step>
    
    <Step number="5">
      <Icon>🎉</Icon>
      <h3>Réception & paiement du solde</h3>
      <p>Vous payez le reste à la livraison</p>
    </Step>
  </Steps>
  
  <CTAButton to="/">Voir les véhicules</CTAButton>
</HowItWorksPage>
```

---

### **5. À PROPOS & CONTACT PAGES** (Minimal)

Keep these **dead simple** - just text and a contact form. Not the focus.

---

## 🎨 MOBILE-FIRST DESIGN SYSTEM

### **Typography (Mobile)**

```css
:root {
  /* Base size: 16px */
  --text-xs: 0.75rem;   /* 12px */
  --text-sm: 0.875rem;  /* 14px */
  --text-base: 1rem;    /* 16px - minimum for body */
  --text-lg: 1.125rem;  /* 18px */
  --text-xl: 1.25rem;   /* 20px */
  --text-2xl: 1.5rem;   /* 24px */
  --text-3xl: 1.875rem; /* 30px */
  --text-4xl: 2.25rem;  /* 36px - for prices */
}
```

### **Spacing (Thumb-Friendly)**

```css
:root {
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-6: 1.5rem;   /* 24px */
  --space-8: 2rem;     /* 32px */
  --space-12: 3rem;    /* 48px */
}
```

### **Touch Targets**

```css
/* All interactive elements */
button, a.button, .tap-target {
  min-height: 44px;  /* Apple's recommendation */
  min-width: 44px;
  padding: 12px 24px;
}
```

### **Colors**

```css
:root {
  /* Primary */
  --primary: #25D366;      /* WhatsApp green */
  --primary-dark: #1FA855;
  
  /* Accent */
  --accent: #FF6B35;       /* Orange - Call to action */
  
  /* Neutrals */
  --dark: #1A1A1A;
  --gray-dark: #4A4A4A;
  --gray: #9E9E9E;
  --gray-light: #E0E0E0;
  --white: #FFFFFF;
  
  /* Background */
  --bg-primary: #FFFFFF;
  --bg-secondary: #F5F5F5;
  
  /* Status */
  --success: #4CAF50;
  --warning: #FFC107;
  --error: #F44336;
}
```

---

## 🧩 CORE COMPONENTS

### **1. VehicleCard (Mobile-Optimized)**

```jsx
// components/VehicleCard.jsx
const VehicleCard = ({ vehicle }) => {
  return (
    <Link to={`/vehicule/${vehicle.id}`} className="vehicle-card">
      <div className="image-wrapper">
        <img 
          src={vehicle.thumbnail} 
          alt={`${vehicle.brand} ${vehicle.model}`}
          loading="lazy"
        />
        {!vehicle.available && (
          <div className="badge-sold">VENDU</div>
        )}
      </div>
      
      <div className="card-body">
        <h3 className="title">{vehicle.brand} {vehicle.model}</h3>
        <p className="year">{vehicle.year}</p>
        
        <div className="specs">
          <span>🔧 {vehicle.specs.transmission}</span>
          <span>⛽ {vehicle.specs.fuelType}</span>
        </div>
        
        <p className="price">{formatPrice(vehicle.price)}</p>
      </div>
    </Link>
  );
};
```

**Styles (Mobile-First):**

```css
.vehicle-card {
  display: flex;
  flex-direction: column;
  background: var(--white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.vehicle-card:active {
  transform: scale(0.98); /* Tap feedback */
}

.image-wrapper {
  position: relative;
  aspect-ratio: 4/3; /* Consistent image ratio */
  overflow: hidden;
  background: var(--gray-light);
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-body {
  padding: 12px;
}

.title {
  font-size: var(--text-lg);
  font-weight: 600;
  margin-bottom: 4px;
  color: var(--dark);
}

.year {
  font-size: var(--text-sm);
  color: var(--gray);
  margin-bottom: 8px;
}

.specs {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
  font-size: var(--text-sm);
  color: var(--gray-dark);
}

.price {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--primary);
}

/* Grid layout - 2 columns on mobile */
.vehicle-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 12px;
}

/* Single column on very small screens */
@media (max-width: 400px) {
  .vehicle-grid {
    grid-template-columns: 1fr;
  }
}

/* 3 columns on tablet */
@media (min-width: 768px) {
  .vehicle-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding: 24px;
  }
}

/* 4 columns on desktop */
@media (min-width: 1024px) {
  .vehicle-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
}
```

---

### **2. StickyHeader (Minimal)**

```jsx
// components/layout/Header.jsx
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <header className="sticky-header">
      <div className="container">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Logo" />
        </Link>
        
        <button 
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
      
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
};
```

**Styles:**

```css
.sticky-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--white);
  border-bottom: 1px solid var(--gray-light);
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.sticky-header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  max-width: 1280px;
  margin: 0 auto;
}

.logo img {
  height: 40px;
  width: auto;
}

.menu-toggle {
  font-size: 24px;
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  min-width: 44px;
  min-height: 44px;
}
```

---

### **3. ImageGallery (Swipeable)**

```jsx
// components/ImageGallery.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        className="gallery-swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img 
              src={image} 
              alt={`Vehicle image ${index + 1}`}
              className="gallery-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
```

**Styles:**

```css
.image-gallery {
  width: 100%;
  aspect-ratio: 4/3;
  background: var(--gray-light);
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-pagination-bullet {
  background: var(--white);
  opacity: 0.5;
}

.swiper-pagination-bullet-active {
  background: var(--primary);
  opacity: 1;
}
```

---

### **4. FloatingWhatsAppButton**

```jsx
// components/FloatingWhatsAppButton.jsx
const FloatingWhatsAppButton = () => {
  const handleClick = () => {
    const message = "Bonjour, je suis intéressé par vos véhicules.";
    const phone = "+237XXXXXXXXX"; // Client's number
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  
  return (
    <button 
      className="floating-whatsapp"
      onClick={handleClick}
      aria-label="Contact WhatsApp"
    >
      <WhatsAppIcon size={28} />
    </button>
  );
};
```

**Styles:**

```css
.floating-whatsapp {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background: var(--primary);
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  transition: transform 0.2s;
}

.floating-whatsapp:hover {
  transform: scale(1.1);
}

.floating-whatsapp:active {
  transform: scale(0.95);
}
```

---

## 🔧 UTILS & HELPERS

### **WhatsApp Integration**

```javascript
// utils/whatsapp.js

export const formatWhatsAppMessage = (data) => {
  const {
    customerName,
    phone,
    vehicle,
    shippingMethod
  } = data;
  
  const shipping = shippingMethod === 'air' 
    ? '📦 Aérienne (5-7 jours)' 
    : '🚢 Maritime (25-35 jours)';
  
  return `
🚗 *COMMANDE VÉHICULE*

*Client:* ${customerName}
*Tel:* ${phone}

*Véhicule:* ${vehicle.brand} ${vehicle.model} ${vehicle.year}
*Prix:* ${formatPrice(vehicle.price)}

*Livraison:* ${shipping}

---
_Commande via le site web_
  `.trim();
};

export const sendWhatsAppOrder = (businessPhone, message) => {
  const url = `https://wa.me/${businessPhone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};
```

### **Price Formatting**

```javascript
// utils/formatters.js

export const formatPrice = (price) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price) + ' XAF';
};

// Example: 15000000 → "15 000 000 XAF"
```

### **Image Optimization**

```javascript
// utils/imageOptimization.js

export const getOptimizedImageUrl = (url, size = 'medium') => {
  // If using Cloudinary or similar CDN
  const sizes = {
    thumbnail: 'w_400,h_300,c_fill',
    medium: 'w_800,h_600,c_fill',
    large: 'w_1200,h_900,c_fill'
  };
  
  // Add transformation parameters
  return url.replace('/upload/', `/upload/${sizes[size]}/`);
};

export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};
```

---

## 📊 DATA MODELS

### **Vehicle Type**

```typescript
// types/vehicle.ts

export interface Vehicle {
  id: string;
  
  // Basic Info
  brand: string;              // "Toyota"
  model: string;              // "Camry"
  year: number;               // 2020
  price: number;              // 15000000 (in XAF)
  
  // Images
  thumbnail: string;          // Main image URL
  images: string[];           // Array of image URLs
  
  // Specifications
  specs: {
    fuelType: 'Essence' | 'Diesel' | 'Électrique' | 'Hybride';
    transmission: 'Manuel' | 'Automatique';
    mileage: number;          // in km
    engineSize: string;       // "2.0L"
    doors: number;            // 2, 4, 5
    seats: number;            // 5, 7
    color: string;            // "Noir", "Blanc"
    condition: 'Neuf' | 'Occasion';
  };
  
  // Description
  description: string;
  features: string[];         // ["Climatisation", "GPS"]
  
  // Category
  category: 'SUV' | 'Berline' | 'Pick-up' | 'Camionnette' | 'Sport';
  
  // Status
  available: boolean;
  featured: boolean;
  
  // Metadata
  createdAt: string;
  updatedAt: string;
}
```

### **Order Type**

```typescript
// types/order.ts

export interface OrderData {
  customerName: string;
  phone: string;
  vehicleId: string;
  vehicle: {
    brand: string;
    model: string;
    year: number;
    price: number;
  };
  shippingMethod: 'air' | 'sea';
  timestamp: string;
}
```

---

## 🌐 API ENDPOINTS (What Backend Should Provide)

```javascript
// services/api.js

const API_BASE = process.env.VITE_API_URL || 'http://localhost:3000/api';

// PUBLIC ENDPOINTS
export const vehicleAPI = {
  // Get all vehicles (with pagination & filters)
  getAll: async (params) => {
    const queryString = new URLSearchParams(params).toString();
    const response = await fetch(`${API_BASE}/vehicles?${queryString}`);
    return response.json();
  },
  
  // Get single vehicle
  getById: async (id) => {
    const response = await fetch(`${API_BASE}/vehicles/${id}`);
    return response.json();
  },
  
  // Get vehicles by category (for quick filters)
  getByCategory: async (category) => {
    const response = await fetch(`${API_BASE}/vehicles?category=${category}`);
    return response.json();
  },
  
  // Search
  search: async (query) => {
    const response = await fetch(`${API_BASE}/vehicles/search?q=${query}`);
    return response.json();
  },
};

// ADMIN ENDPOINTS
export const adminAPI = {
  // Auth
  login: async (credentials) => {
    const response = await fetch(`${API_BASE}/admin/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    return response.json();
  },
  
  // CRUD Operations
  createVehicle: async (data, token) => {
    const response = await fetch(`${API_BASE}/admin/vehicles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
    return response.json();
  },
  
  updateVehicle: async (id, data, token) => {
    const response = await fetch(`${API_BASE}/admin/vehicles/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
    return response.json();
  },
  
  updatePrice: async (id, price, token) => {
    const response = await fetch(`${API_BASE}/admin/vehicles/${id}/price`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ price })
    });
    return response.json();
  },
  
  deleteVehicle: async (id, token) => {
    const response = await fetch(`${API_BASE}/admin/vehicles/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.json();
  },
  
  // Image upload
  uploadImages: async (formData, token) => {
    const response = await fetch(`${API_BASE}/admin/vehicles/images`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData // multipart/form-data
    });
    return response.json();
  },
};
```

**Expected API Response Formats:**

```typescript
// GET /vehicles?page=1&limit=12
{
  success: true,
  data: {
    vehicles: Vehicle[],
    pagination: {
      page: 1,
      limit: 12,
      total: 100,
      totalPages: 9
    }
  }
}

// GET /vehicles/:id
{
  success: true,
  data: Vehicle
}

// POST /admin/vehicles (Create/Update)
{
  success: true,
  message: "Véhicule créé avec succès",
  data: Vehicle
}

// DELETE /admin/vehicles/:id
{
  success: true,
  message: "Véhicule supprimé"
}
```

---

## 📦 REQUIRED PACKAGES

```json
{
  "name": "car-import-frontend",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    
    "swiper": "^11.0.0",
    "react-icons": "^4.12.0",
    "react-hook-form": "^7.49.0",
    "zustand": "^4.4.0",
    "@tanstack/react-query": "^5.0.0",
    "axios": "^1.6.0",
    "date-fns": "^2.30.0",
    "clsx": "^2.0.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "vite": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "typescript": "^5.3.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0"
  }
}
```

---

## 🎨 TAILWIND CONFIG (Mobile-First)

```javascript
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#25D366',
          dark: '#1FA855',
        },
        accent: '#FF6B35',
        dark: '#1A1A1A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      screens: {
        'xs': '400px',
      },
      spacing: {
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },
    },
  },
  plugins: [],
}
```

---

## 🚀 PROJECT SETUP INSTRUCTIONS

### **1. Initialize Project**

```bash
# Create Vite React app
npm create vite@latest car-import-frontend -- --template react

cd car-import-frontend

# Install dependencies
npm install

# Install additional packages
npm install react-router-dom swiper react-icons react-hook-form zustand @tanstack/react-query axios clsx

# Install Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### **2. Project Structure**

```bash
src/
├── assets/
│   └── logo.png
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── MobileMenu.jsx
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Modal.jsx
│   │   └── Loader.jsx
│   ├── home/
│   │   ├── QuickFilterChips.jsx
│   │   ├── VehicleCard.jsx
│   │   └── FloatingWhatsAppButton.jsx
│   └── vehicle/
│       ├── ImageGallery.jsx
│       ├── SpecsGrid.jsx
│       └── WhatsAppModal.jsx
├── pages/
│   ├── Home.jsx
│   ├── VehicleDetail.jsx
│   ├── HowItWorks.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── admin/
│       ├── Login.jsx
│       ├── Dashboard.jsx
│       └── VehicleForm.jsx
├── services/
│   └── api.js
├── utils/
│   ├── whatsapp.js
│   ├── formatters.js
│   └── constants.js
├── hooks/
│   └── useVehicles.js
├── store/
│   └── useStore.js
├── types/
│   └── vehicle.ts
├── App.jsx
├── main.jsx
└── index.css
```

### **3. Environment Variables**

```bash
# .env
VITE_API_URL=http://localhost:3000/api
VITE_WHATSAPP_BUSINESS=+237XXXXXXXXX
```

### **4. Router Setup**

```jsx
// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VehicleDetail from './pages/VehicleDetail';
import HowItWorks from './pages/HowItWorks';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminLogin from './pages/admin/Login';
import AdminDashboard from './pages/admin/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicule/:id" element={<VehicleDetail />} />
        <Route path="/comment-ca-marche" element={<HowItWorks />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

---

## ⚡ PERFORMANCE OPTIMIZATIONS (Critical for Cameroon)

### **1. Image Optimization**

```javascript
// utils/imageOptimization.js

export const lazyLoadConfig = {
  root: null,
  rootMargin: '50px',
  threshold: 0.01
};

// Component usage
<img 
  src={thumbnail} 
  loading="lazy"
  decoding="async"
  alt="Vehicle"
/>
```

### **2. Code Splitting**

```jsx
// Lazy load admin pages
const AdminDashboard = lazy(() => import('./pages/admin/Dashboard'));

<Suspense fallback={<Loader />}>
  <AdminDashboard />
</Suspense>
```

### **3. Infinite Scroll (Better than Pagination)**

```jsx
// hooks/useInfiniteVehicles.js
import { useInfiniteQuery } from '@tanstack/react-query';

export const useInfiniteVehicles = () => {
  return useInfiniteQuery({
    queryKey: ['vehicles'],
    queryFn: ({ pageParam = 1 }) => 
      vehicleAPI.getAll({ page: pageParam, limit: 12 }),
    getNextPageParam: (lastPage) => {
      const { page, totalPages } = lastPage.pagination;
      return page < totalPages ? page + 1 : undefined;
    },
  });
};
```

---

## ✅ MOBILE-FIRST CHECKLIST

Before launching:

- [ ] Test on iPhone SE (smallest screen: 375px)
- [ ] Test on Android (360px width)
- [ ] Tap targets minimum 44x44px
- [ ] Images compressed (use WebP format)
- [ ] Lazy loading implemented
- [ ] WhatsApp integration working
- [ ] Forms work with mobile keyboards
- [ ] No horizontal scroll on any page
- [ ] Fast loading (<3 seconds on 3G)
- [ ] Offline support (service worker)
- [ ] PWA installable
- [ ] French language throughout
- [ ] Partner logos visible
- [ ] Sticky WhatsApp button works
- [ ] Image gallery swipes smoothly

---

## 🎯 CRITICAL SUCCESS FACTORS

1. **Simplicity > Features** - Client wants simple, not impressive
2. **Mobile-first** - 90% of traffic will be mobile
3. **WhatsApp-focused** - Every path leads to WhatsApp
4. **Fast loading** - Cameroon has slow connections
5. **Visual-first** - Cars sell themselves with good photos
6. **Easy admin** - Client manages content himself

---

## 📝 DEVELOPMENT TIMELINE

### **Week 1: Core Structure**
- Day 1-2: Project setup, Tailwind config, basic layout
- Day 3-4: Homepage with vehicle grid
- Day 5-7: Vehicle detail page + WhatsApp integration

### **Week 2: Features & Polish**
- Day 8-10: Admin panel (CRUD operations)
- Day 11-12: Additional pages (About, Contact, How it Works)
- Day 13-14: Mobile testing, optimization, bug fixes

### **Week 3: Launch Prep**
- Day 15-17: Content upload (100 vehicles)
- Day 18-19: Final testing on real devices
- Day 20-21: Deployment + client training

**Total: 3 weeks**

---

## 🚀 NEXT STEPS

1. ✅ Review this document thoroughly
2. ✅ Set up Vite + React + Tailwind
3. ✅ Build HomePage with vehicle grid (PRIORITY)
4. ✅ Build VehicleDetail page (PRIORITY)
5. ✅ Implement WhatsApp integration (CRITICAL)
6. ✅ Build admin panel for CRUD operations
7. ✅ Test on real mobile devices
8. ✅ Deploy to Vercel/Netlify

---

## 💡 REMEMBER

**This is not a complex project. It's a simple, mobile-first catalog with WhatsApp ordering.**

- Keep it **SIMPLE**
- Make it **FAST**
- Focus on **MOBILE**
- Lead users to **WHATSAPP**

**Start with HomePage → VehicleDetail → WhatsApp. Everything else is secondary.** 🚀
