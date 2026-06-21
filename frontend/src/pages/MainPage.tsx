import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import FiltersList from "../features/listings/components/FiltersList";
import ListingList from "../features/listings/components/ListingList";

const MainPage = () => {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />
      
      {/* Sekcja Nagłówka */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Znajdź swój <span className="text-blue-600">wymarzony</span> samochód
        </h1>
      </div>

      {/* Filtry wyszukiwania */}
      <FiltersList />
      
      {/* Lista ogłoszeń */}
      <ListingList />
      
      <Footer />
    </main>
  );
};

export default MainPage;