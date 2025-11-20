import { CATEGORIES } from '../../utils/constants';

interface QuickFilterChipsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const QuickFilterChips = ({ activeFilter, onFilterChange }: QuickFilterChipsProps) => {
  return (
    <div className="sticky top-[61px] z-30 bg-gray-50 border-b border-gray-200 py-3 overflow-x-auto">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex gap-2 min-w-max md:justify-center">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => onFilterChange(category)}
              className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
                activeFilter === category
                  ? 'bg-[var(--primary)] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
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
