import { CATEGORIES } from '../../utils/constants';

interface QuickFilterChipsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const QuickFilterChips = ({ activeFilter, onFilterChange }: QuickFilterChipsProps) => {
  return (
    <div className="sticky top-[45px] z-30 bg-white border-b border-gray-200 py-2.5 overflow-x-auto shadow-sm">
      <div className="container mx-auto px-3 max-w-7xl">
        <div className="flex gap-2 min-w-max md:justify-center">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => onFilterChange(category)}
              className={`px-3 py-1.5 rounded-full font-medium text-xs whitespace-nowrap transition-all ${
                activeFilter === category
                  ? 'bg-[var(--primary)] text-white shadow-md ring-2 ring-[var(--primary)] ring-opacity-50'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickFilterChips;
