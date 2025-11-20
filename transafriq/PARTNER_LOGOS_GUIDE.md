# Partner Logos Setup Guide

## Download Partner Logos

### Payment Partners

1. **Orange Money**
   - Download from: https://seeklogo.com/vector-logo/440383/orange-money
   - Format: PNG (transparent background)
   - Recommended size: 200x200px
   - Save as: `public/partners/orange-money.png`

2. **MTN Mobile Money**
   - Download from: https://seeklogo.com/vector-logo/297575/mtn-mobile-money
   - Format: PNG (transparent background)
   - Recommended size: 200x200px
   - Save as: `public/partners/mtn-momo.png`

3. **Wave**
   - Download from: https://www.wave.com (official website)
   - Format: PNG (transparent background)
   - Recommended size: 200x200px
   - Save as: `public/partners/wave.png`

4. **Moov Money**
   - Search for official logo on Google or their website
   - Format: PNG (transparent background)
   - Recommended size: 200x200px
   - Save as: `public/partners/moov-money.png`

5. **Airtel Money**
   - Download from: https://seeklogo.com (search "Airtel Money")
   - Format: PNG (transparent background)
   - Recommended size: 200x200px
   - Save as: `public/partners/airtel-money.png`

### Shipping Partners

1. **DHL**
   - Download from: https://seeklogo.com (search "DHL")
   - Format: PNG (transparent background)
   - Recommended size: 200x200px
   - Save as: `public/partners/dhl.png`

## Steps to Add Logos

### 1. Create Partners Directory
```bash
mkdir public/partners
```

### 2. Download and Place Logos
Download the logos from the sources above and place them in the `public/partners/` directory.

### 3. Update the PartnerLogos Component

Replace the content in `src/components/common/PartnerLogos.tsx` with:

```tsx
const PartnerLogos = () => {
  const paymentPartners = [
    { name: 'Orange Money', logo: '/partners/orange-money.png' },
    { name: 'MTN MoMo', logo: '/partners/mtn-momo.png' },
    { name: 'Wave', logo: '/partners/wave.png' },
    { name: 'Moov Money', logo: '/partners/moov-money.png' },
    { name: 'Airtel Money', logo: '/partners/airtel-money.png' }
  ];

  const shippingPartners = [
    { name: 'DHL', logo: '/partners/dhl.png' }
  ];

  return (
    <div className="space-y-8">
      {/* Payment Partners */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
          Méthodes de paiement acceptées
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {paymentPartners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white px-4 py-3 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Shipping Partners */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
          Partenaire de livraison
        </h3>
        <div className="flex justify-center items-center gap-4">
          {shippingPartners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white px-6 py-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;
```

## Alternative: Use Icon Placeholders (Current Setup)

The current setup uses colored circles as placeholders. You can keep this if you prefer a simpler design or until you obtain the official logos.

## Notes

- Always use official logos from the companies' brand assets or authorized logo repositories
- Ensure you have the right to use these logos
- Keep logos in PNG format with transparent backgrounds for best results
- Maintain aspect ratios when resizing logos
