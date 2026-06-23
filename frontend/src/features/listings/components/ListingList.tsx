import { useSearchParams } from "react-router-dom";
import { useListings } from "../hooks/useListings";
import ListingItem from "./ListingItem";
import Loader from "../../../components/Loader";

const ListingList = () => {
  const [searchParams] = useSearchParams();
  const filters = Object.fromEntries(searchParams.entries());
  const { data: listings, isLoading, isError } = useListings(filters);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Najnowsze ogłoszenia</h2>
        <p className="text-sm text-gray-500 mt-1">Dopasowane do zaawansowanych filtrów bazy danych</p>
      </div>

      {isLoading && (
        <div className="flex justify-center items-center py-20">
          <Loader size="lg" />
        </div>
      )}

      {isError && (
        <div className="text-center py-12 text-red-500">
          Nie udało się pobrać ogłoszeń. Spróbuj ponownie później.
        </div>
      )}

      {!isLoading && !isError && listings && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <ListingItem key={listing.id} listing={listing} />
          ))}
        </div>
      )}

      {!isLoading && !isError && listings?.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          Brak dostępnych ogłoszeń.
        </div>
      )}
    </div>
  );
};

export default ListingList;
