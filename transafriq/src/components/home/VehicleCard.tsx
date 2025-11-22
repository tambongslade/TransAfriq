import { Link } from 'react-router-dom';
import type { Item } from '../../types/vehicle';
import { formatPrice } from '../../utils/formatters';

interface VehicleCardProps {
  vehicle: Item;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const isVehicle = vehicle.mainCategory === 'vehicles';
  const title = isVehicle
    ? `${vehicle.brand} ${vehicle.model}`
    : vehicle.name;
  const linkPath = isVehicle ? `/vehicule/${vehicle.id}` : `/equipement/${vehicle.id}`;

  return (
    <Link
      to={linkPath}
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 active:scale-98 flex flex-col"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={vehicle.thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 right-2 flex justify-between items-start">
          {vehicle.featured && (
            <span className="bg-[#f9a825] text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
              ⭐ Populaire
            </span>
          )}
          {!vehicle.available && (
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md ml-auto">
              VENDU
            </span>
          )}
        </div>

        {/* Condition Badge */}
        <div className="absolute bottom-2 right-2">
          <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-2 py-1 rounded-md shadow">
            {vehicle.specs.condition}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col flex-1">
        {/* Title */}
        <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-1 line-clamp-1">
          {title}
        </h3>

        {/* Subtitle - Year for vehicles, Brand for equipment */}
        <p className="text-sm text-gray-500 mb-2">
          {isVehicle ? vehicle.year : vehicle.brand}
        </p>

        {/* Specs */}
        <div className="flex items-center gap-3 mb-3 text-xs text-gray-600">
          {isVehicle ? (
            <>
              {vehicle.specs.transmission && (
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  {vehicle.specs.transmission}
                </span>
              )}
              {vehicle.specs.engineSize && (
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  {vehicle.specs.engineSize}
                </span>
              )}
              {vehicle.specs.driveType && (
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  {vehicle.specs.driveType}
                </span>
              )}
            </>
          ) : (
            <>
              {vehicle.specs.power && (
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  {vehicle.specs.power}
                </span>
              )}
              {vehicle.specs.capacity && (
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  {vehicle.specs.capacity}
                </span>
              )}
            </>
          )}
        </div>

        {/* Price */}
        <div className="mt-auto pt-2 border-t border-gray-100">
          <p className="text-lg sm:text-xl font-bold text-[#1e88e5]">
            {formatPrice(vehicle.price)}
          </p>
        </div>
      </div>
    </Link>
  );
}
