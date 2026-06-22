import { Link } from "react-router-dom";
import type { Listing } from "../types/listingTypes";

type Props = {
  listing: Listing;
};

const ListingItem = ({ listing }: Props) => {
  // Znajdujemy główne zdjęcie lub bierzemy pierwsze z brzegu
  const mainImage = listing.images?.find((img) => img.isMain)?.imageUrl || listing.images?.[0]?.imageUrl;

  // Formatowanie silnika (np. 1968 cm3 -> 2.0 l)
  const engineVolume = listing.engineCapacity
    ? `${(listing.engineCapacity / 1000).toFixed(1)}`
    : "";

  return (
    <Link 
      to={`/listings/${listing.id}`}
      className="bg-white rounded-3xl shadow-[0_10px_35px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 block cursor-pointer text-current no-underline"
    >
      {/* Sekcja Zdjęcia */}
      <div className="relative w-full aspect-[4/3] bg-gray-50 flex items-center justify-center overflow-hidden">
        {listing.countryOfOrigin && (
          <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-gray-800 text-xs font-semibold px-3 py-1 rounded-lg shadow-sm z-10">
            {listing.countryOfOrigin}
          </span>
        )}

        {mainImage ? (
          <img
            src={mainImage}
            alt={listing.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-300">
            <svg
              className="w-14 h-14 stroke-1.25"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.25}
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.25}
                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Sekcja Informacyjna */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          {/* Cena */}
          <div className="text-2xl font-black text-gray-900 mb-1">
            {listing.price.toLocaleString("pl-PL")} <span className="text-lg font-bold">zł</span>
          </div>

          {/* Tytuł ogłoszenia */}
          <h3 className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2 h-10 mb-4 hover:text-blue-600 transition-colors">
            {listing.title}
          </h3>
        </div>

        {/* Linia rozdzielająca */}
        <div className="border-t border-gray-50 my-3" />

        {/* Szczegóły techniczne w układzie 2 kolumn */}
        <div className="grid grid-cols-2 gap-y-2 text-xs text-gray-400 font-medium">
          <div className="flex items-center gap-1">
            <span>{listing.productionYear} r.</span>
            <span>•</span>
            <span>{listing.mileage.toLocaleString("pl-PL")} km</span>
          </div>
          <div>
            {engineVolume} {listing.fuelType} • {listing.enginePower} KM
          </div>
          <div className="truncate pr-1">
            {listing.gearbox?.split(" ")[0]} • {listing.bodyType}
          </div>
          <div className="truncate">
            {listing.color} • {listing.location?.split(",")[0]}
          </div>
        </div>
      </div>
    </Link>
  );
};


export default ListingItem;
