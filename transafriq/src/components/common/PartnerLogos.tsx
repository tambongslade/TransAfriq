const PartnerLogos = () => {
  const paymentPartners = [
    { name: 'Orange Money', color: '#FF7900' },
    { name: 'MTN MoMo', color: '#FFCC00' },
    { name: 'Wave', color: '#00C2FF' },
    { name: 'Moov Money', color: '#0099CC' },
    { name: 'Airtel Money', color: '#E60000' }
  ];

  const shippingPartners = [
    { name: 'DHL', color: '#FFCC00' }
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
              {/* Placeholder for logo image - Replace with actual logo */}
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex-shrink-0"
                  style={{ backgroundColor: partner.color }}
                />
                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
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
              <div className="flex items-center gap-2">
                <div
                  className="w-10 h-10 rounded-full flex-shrink-0"
                  style={{ backgroundColor: partner.color }}
                />
                <span className="text-base font-bold text-gray-700">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;
