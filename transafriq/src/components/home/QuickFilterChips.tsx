interface QuickFilterChipsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const QuickFilterChips = ({ activeFilter, onFilterChange }: QuickFilterChipsProps) => {
  const filters = ['Tout', 'SUV', 'Berline', 'Pick-up', 'Utilitaire'];

  return (
    <div className="sticky top-[61px] z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3 max-w-7xl">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => onFilterChange(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 min-h-[44px] ${
                activeFilter === filter
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickFilterChips;
