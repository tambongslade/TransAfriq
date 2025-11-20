import { Link } from 'react-router-dom';
import { HiCalendar, HiLocationMarker } from 'react-icons/hi';
import { BsFillFuelPumpFill } from 'react-icons/bs';
import { MdSpeed } from 'react-icons/md';
import type { Vehicle } from '../../types/vehicle';
import { formatPrice } from '../../utils/formatters';

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  return (
    <Link
      to={`/vehicule/${vehicle.id}`}
      className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200"
    >
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={vehicle.thumbnail}
          alt={`${vehicle.brand} ${vehicle.model}`}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        {!vehicle.available && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
            VENDU
          </div>
        )}
        {vehicle.featured && (
          <div className="absolute top-2 left-2 bg-[var(--accent)] text-white px-2 py-1 rounded text-xs font-bold">
            ⭐ VEDETTE
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-3 flex flex-col gap-2">
        {/* Brand and Model */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
              {vehicle.brand}
            </h3>
            <p className="text-xs text-gray-600 truncate">{vehicle.model}</p>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="text-base font-bold text-[var(--primary)]">
              {formatPrice(vehicle.price)}
            </p>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100">
          <div className="flex items-center gap-1.5 text-xs text-gray-600">
            <HiCalendar className="text-gray-400 flex-shrink-0" />
            <span className="truncate">{vehicle.year}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-600">
            <MdSpeed className="text-gray-400 flex-shrink-0" />
            <span className="truncate">{vehicle.specs.mileage.toLocaleString()} km</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-600">
            <BsFillFuelPumpFill className="text-gray-400 flex-shrink-0" />
            <span className="truncate">{vehicle.specs.fuelType}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-600">
            <HiLocationMarker className="text-gray-400 flex-shrink-0" />
            <span className="truncate">{vehicle.specs.transmission}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VehicleCard;
