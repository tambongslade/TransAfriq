import type { VehicleCategory, EquipmentCategory, MainCategory } from '../../types/vehicle';
import { VEHICLE_CATEGORIES, EQUIPMENT_CATEGORIES } from '../../utils/constants';

interface QuickFilterChipsProps {
  mainCategory: MainCategory;
  activeCategory: VehicleCategory | EquipmentCategory;
  onCategoryChange: (category: VehicleCategory | EquipmentCategory) => void;
}

export default function QuickFilterChips({
  mainCategory,
  activeCategory,
  onCategoryChange,
}: QuickFilterChipsProps) {
  const categories = mainCategory === 'vehicles' ? VEHICLE_CATEGORIES : EQUIPMENT_CATEGORIES;

  return (
    <div className="bg-white border-b border-gray-200 sticky top-[136px] z-30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => onCategoryChange(category as VehicleCategory | EquipmentCategory)}
                className={`
                  snap-start shrink-0 px-4 py-2 rounded-full font-medium text-sm
                  transition-all duration-200 min-w-fit
                  ${
                    isActive
                      ? 'bg-[#1e88e5] text-white shadow-md scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:scale-95'
                  }
                `}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
