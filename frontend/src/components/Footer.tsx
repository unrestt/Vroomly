import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] text-gray-400 pt-16 pb-12 border-t border-gray-800 mt-20">
      <div className="max-w-[1240px] mx-auto px-4">
        {/* Górna sekcja */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Kolumna 1: Logo i opis */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-base shadow-md shadow-blue-500/20">
                V
              </div>
              <span className="text-lg font-black text-white tracking-tight">
                Vroom<span className="text-blue-600">ly</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Nowoczesna platforma motoryzacyjna ułatwiająca zakup i sprzedaż pojazdów w całej Polsce.
            </p>
          </div>

          {/* Kolumna 2: Szybkie linki */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">Platforma</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Ogłoszenia</Link>
              </li>
              <li>
                <span className="text-gray-600 cursor-not-allowed">Dodaj ogłoszenie (wkrótce)</span>
              </li>
              <li>
                <span className="text-gray-600 cursor-not-allowed">Konto dilera (wkrótce)</span>
              </li>
            </ul>
          </div>

          {/* Kolumna 3: Kontakt i pomoc */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">Pomoc &amp; Regulaminy</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">Centrum Pomocy</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">Regulamin Serwisu</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">Polityka Prywatności</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Dolna linia */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} Vroomly. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <span className="hover:text-gray-400 cursor-pointer">Facebook</span>
            <span>•</span>
            <span className="hover:text-gray-400 cursor-pointer">Instagram</span>
            <span>•</span>
            <span className="hover:text-gray-400 cursor-pointer">LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
