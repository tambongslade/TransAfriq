# Logo Format Conversion Guide

## Current Status
The logo is currently in JPG format (`logo.JPG`). For better quality and transparency support, PNG format is recommended.

## Why Convert to PNG?
- **Transparency**: PNG supports transparent backgrounds
- **Quality**: Better quality for logos with text and sharp edges
- **Web Standard**: PNG is the standard format for logos on websites

## How to Convert JPG to PNG

### Method 1: Online Tools (Easiest)
1. Go to one of these free online converters:
   - https://convertio.co/jpg-png/
   - https://online-converting.com/image/convert2png/
   - https://www.iloveimg.com/convert-to-png

2. Upload `public/logo.JPG`
3. Convert to PNG
4. Download the result
5. Save as `public/logo.png`
6. Update the code (see below)

### Method 2: Using Image Editing Software
- **Photoshop**: File → Export As → PNG
- **GIMP**: File → Export As → Select PNG
- **Preview (Mac)**: File → Export → PNG

### Method 3: Using Command Line (ImageMagick)
```bash
# Install ImageMagick if not installed
# Windows: choco install imagemagick
# Mac: brew install imagemagick
# Linux: sudo apt-get install imagemagick

# Convert the logo
magick convert public/logo.JPG public/logo.png
```

## After Conversion

### Update the Code
Once you have `logo.png`, update the Header component:

In `src/components/layout/Header.tsx`, change:
```tsx
<img
  src="/logo.JPG"
  alt="TransAfriq Logo"
  className="h-8 w-auto md:h-10 lg:h-12"
/>
```

To:
```tsx
<img
  src="/logo.png"
  alt="TransAfriq Logo"
  className="h-8 w-auto md:h-10 lg:h-12"
/>
```

### Update index.html
In `index.html`, change:
```html
<link rel="icon" type="image/jpeg" href="/logo.JPG" />
<meta property="og:image" content="/logo.JPG" />
<meta property="twitter:image" content="/logo.JPG" />
```

To:
```html
<link rel="icon" type="image/png" href="/logo.png" />
<meta property="og:image" content="/logo.png" />
<meta property="twitter:image" content="/logo.png" />
```

## Current Logo Sizes (Optimized for Mobile)
- **Mobile**: 32px height (h-8)
- **Tablet**: 40px height (h-10)
- **Desktop**: 48px height (h-12)

These sizes follow web design best practices for 2025:
- Mobile headers should be 40-60px tall
- Logos should be 24-40px on mobile
- Leave 10px padding top/bottom

## Optional: Create Multiple Logo Sizes
For better performance, you can create optimized versions:
- `logo-small.png` (40px height) - for mobile
- `logo-medium.png` (80px height) - for tablet
- `logo-large.png` (120px height) - for desktop

Then use responsive images:
```tsx
<picture>
  <source media="(max-width: 768px)" srcSet="/logo-small.png" />
  <source media="(max-width: 1024px)" srcSet="/logo-medium.png" />
  <img src="/logo-large.png" alt="TransAfriq Logo" className="h-8 w-auto md:h-10 lg:h-12" />
</picture>
```

## Note
The current JPG logo works fine for now. Converting to PNG is optional but recommended for better quality and web standards compliance.
