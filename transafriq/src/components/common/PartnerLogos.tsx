export default function PartnerLogos() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-center text-sm font-semibold text-gray-600 mb-6">
          Paiements acceptés
        </h3>

        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
          {/* Orange Money */}
          <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm">
            <div className="w-8 h-8 bg-[#FF6600] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">OM</span>
            </div>
            <span className="text-sm font-semibold text-gray-700">Orange Money</span>
          </div>

          {/* MTN Mobile Money */}
          <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm">
            <div className="w-8 h-8 bg-[#FFCC00] rounded-full flex items-center justify-center">
              <span className="text-gray-800 font-bold text-xs">M</span>
            </div>
            <span className="text-sm font-semibold text-gray-700">MTN MoMo</span>
          </div>

          {/* Wave */}
          <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm">
            <div className="w-8 h-8 bg-[#00D9FF] rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-gray-700">Wave</span>
          </div>
        </div>

        {/* Additional Payment Info */}
        <p className="text-center text-xs text-gray-500 mt-6">
          💡 Acompte de 15% à la commande • Solde à la livraison
        </p>
      </div>
    </div>
  );
}
