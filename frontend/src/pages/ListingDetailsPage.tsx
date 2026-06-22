import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useListing } from "../features/listings/hooks/useListing";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import Loader from "../components/Loader";

const ListingDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: listing, isLoading, isError } = useListing(id || "");
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showPhone, setShowPhone] = useState(false);

  if (isLoading) {
    return (
      <div className="bg-gray-50 min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex justify-center items-center py-40">
          <Loader size="lg" />
        </div>
        <Footer />
      </div>
    );
  }

  if (isError || !listing) {
    return (
      <div className="bg-gray-50 min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col justify-center items-center py-20 px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Nie znaleziono ogłoszenia</h2>
          <p className="text-gray-500 mb-6 text-center">Ogłoszenie mogło zostać usunięte lub nie istnieje w bazie danych.</p>
          <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-xl transition-all">
            Wróć do strony głównej
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const images = listing.images || [];
  const activeImage = images[activeImageIndex]?.imageUrl;
  
  // Formatowanie silnika (np. 1968 cm3 -> 2.0 l)
  const engineVolume = listing.engineCapacity
    ? `${(listing.engineCapacity / 1000).toFixed(1)}`
    : "";

  const formattedPrice = listing.price.toLocaleString("pl-PL");
  const formattedMileage = listing.mileage.toLocaleString("pl-PL");

  // Inicjały sprzedawcy (np. Jan Kowalski -> JK)
  const sellerName = listing.user?.email 
    ? listing.user.email.split('@')[0] 
    : "Sprzedawca";
  const initials = sellerName
    .split(/[\s._-]+/)
    .slice(0, 2)
    .map(part => part[0]?.toUpperCase())
    .join("") || "S";

  const phoneNum = listing.user?.phoneNumber || "+48 501 234 567";

  return (
    <div className="bg-[#f8f9fb] min-h-screen flex flex-col font-sans text-gray-900">
      <Navbar />

      <main className="flex-grow max-w-[1240px] mx-auto w-full px-4 py-8">
        {/* Link powrotu */}
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Powrót do listy
          </Link>
        </div>

        {/* Sekcja Nagłówka */}
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111827] leading-tight mb-2">
            {listing.title}
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            {listing.make?.name} • Generacja {listing.model?.name} • {engineVolume} {listing.fuelType} • {listing.location}
          </p>
        </div>

        {/* Główny układ dwukolumnowy */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* LEWA KOLUMNA: Galeria, Szczegóły, Opis */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Galeria zdjęć */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.02)] p-4 space-y-4">
              {/* Duże zdjęcie */}
              <div className="relative aspect-[4/3] w-full rounded-2xl bg-gray-50 overflow-hidden flex items-center justify-center border border-gray-100">
                {activeImage ? (
                  <img
                    src={activeImage}
                    alt={listing.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-gray-300 flex flex-col items-center">
                    <svg className="w-16 h-16 stroke-1.25" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                )}
                {images.length > 0 && (
                  <span className="absolute bottom-4 right-4 bg-[#111827]/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {activeImageIndex + 1} / {images.length}
                  </span>
                )}
              </div>

              {/* Miniatury */}
              {images.length > 1 && (
                <div className="grid grid-cols-5 gap-2.5">
                  {images.map((img, idx) => (
                    <button
                      key={img.id}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all ${
                        activeImageIndex === idx ? "border-blue-600 scale-95" : "border-transparent hover:border-gray-300"
                      }`}
                    >
                      <img src={img.imageUrl} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Szczegóły pojazdu */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Szczegóły pojazdu</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                {[
                  { label: "Rok produkcji", value: `${listing.productionYear} r.` },
                  { label: "Przebieg", value: `${formattedMileage} km` },
                  { label: "Pojemność silnika", value: listing.engineCapacity ? `${listing.engineCapacity} cm³` : "Brak danych" },
                  { label: "Moc silnika", value: listing.enginePower ? `${listing.enginePower} KM` : "Brak danych" },
                  { label: "Rodzaj paliwa", value: listing.fuelType },
                  { label: "Skrzynia biegów", value: listing.gearbox },
                  { label: "Typ nadwozia", value: listing.bodyType },
                  { label: "Kolor", value: listing.color },
                  { label: "Kraj pochodzenia", value: listing.countryOfOrigin || "Brak danych" },
                  { label: "Kierownica", value: listing.steeringWheelSide || "Po lewej stronie" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between py-3 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-400 font-medium">{item.label}</span>
                    <span className="text-gray-900 font-bold text-right ml-4">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Opis sprzedawcy */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Opis sprzedawcy</h2>
              <div className="text-gray-600 leading-relaxed whitespace-pre-line text-[15px]">
                {listing.description || "Brak dodatkowego opisu od sprzedawcy."}
              </div>
            </div>

          </div>

          {/* PRAWA KOLUMNA: Sticky Info Panel (Cena, Sprzedawca, Akcje) */}
          <div className="space-y-6 lg:sticky lg:top-6">
            
            {/* Karta cenowa i sprzedawcy */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-gray-100">
              
              {/* Etykieta ceny */}
              <span className="text-xs font-bold text-gray-400 tracking-wider uppercase block mb-1">
                Cena brutto
              </span>
              
              {/* Cena i badg */}
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl sm:text-4xl font-black text-gray-900">
                  {formattedPrice}
                </span>
                <span className="text-lg font-extrabold text-gray-900">zł</span>
                <span className="ml-2 bg-[#e8f8f0] text-[#10b981] text-xs font-bold px-2.5 py-1 rounded-lg">
                  Do negocjacji
                </span>
              </div>

              {/* Linia oddzielająca */}
              <div className="border-t border-gray-100 my-5" />

              {/* Sprzedawca */}
              <div className="mb-6">
                <span className="text-xs font-bold text-gray-400 tracking-wider uppercase block mb-3">
                  Sprzedawca
                </span>
                
                <div className="flex items-center gap-3.5">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-bold text-sm select-none">
                    {initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base">{sellerName}</h3>
                    <p className="text-xs text-gray-400 font-medium mt-0.5">
                      Prywatny sprzedawca • {listing.location || "Polska"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Przyciski akcji */}
              <div className="space-y-3">
                {/* Telefon */}
                <button
                  onClick={() => setShowPhone(true)}
                  className="w-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold py-4 px-6 rounded-2xl transition-all flex items-center justify-center gap-2.5 shadow-md shadow-sky-500/10 cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.58c0-.57-.47-1.04-1.01-1.04z" />
                  </svg>
                  <span>{showPhone ? phoneNum : "Pokaż numer telefonu"}</span>
                </button>

                {/* Wiadomość */}
                <button
                  className="w-full bg-[#f3f4f6] hover:bg-[#e5e7eb] text-gray-800 font-bold py-4 px-6 rounded-2xl transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <span>Napisz wiadomość</span>
                </button>
              </div>

            </div>

            {/* Karta bezpieczeństwa */}
            <div className="bg-[#fefaf0] border border-[#fbebc8] rounded-3xl p-5 flex items-start gap-3">
              <svg className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <h4 className="text-xs font-extrabold text-amber-800 tracking-wider uppercase mb-1">
                  Kupuj bezpiecznie!
                </h4>
                <p className="text-xs text-amber-700 font-medium leading-relaxed">
                  Nigdy nie wpłacaj zaliczek bez wcześniejszego obejrzenia pojazdu i podpisania dokumentów.
                </p>
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ListingDetailsPage;