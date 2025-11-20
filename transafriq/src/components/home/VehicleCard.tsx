import { Link } from 'react-router-dom';
import { HiCalendar } from 'react-icons/hi';
import { BsFillFuelPumpFill } from 'react-icons/bs';
import { MdSpeed, MdSettings } from 'react-icons/md';
import type { Vehicle } from '../../types/vehicle';
import { formatPrice } from '../../utils/formatters';

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  return (
    <Link
      to={`/vehicule/${vehicle.id}`}
      className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-primary-500"
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
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-[10px] font-bold">
            VENDU
          </div>
        )}
        {vehicle.featured && (
          <div className="absolute top-2 left-2 bg-accent-500 text-white px-2 py-1 rounded text-[10px] font-bold">
            ⭐ VEDETTE
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-3 flex flex-col gap-2">
        {/* Brand, Model and Price */}
        <div>
          <div className="flex items-baseline justify-between gap-2 mb-1">
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide">
              {vehicle.brand}
            </h3>
            <p className="text-sm font-bold text-primary-600 whitespace-nowrap">
              {formatPrice(vehicle.price)}
            </p>
          </div>
          <p className="text-[11px] text-gray-600 font-medium truncate">{vehicle.model}</p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-y-1.5 gap-x-2 pt-2 border-t border-gray-100">
          <div className="flex items-center gap-1.5 text-[10px] text-gray-600">
            <HiCalendar className="text-primary-500 flex-shrink-0" />
            <span className="truncate">{vehicle.year}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-gray-600">
            <MdSpeed className="text-primary-500 flex-shrink-0" />
            <span className="truncate">{vehicle.specs.mileage.toLocaleString()} km</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-gray-600">
            <BsFillFuelPumpFill className="text-primary-500 flex-shrink-0" />
            <span className="truncate">{vehicle.specs.fuelType}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-gray-600">
            <MdSettings className="text-primary-500 flex-shrink-0" />
            <span className="truncate">{vehicle.specs.transmission}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VehicleCard;
