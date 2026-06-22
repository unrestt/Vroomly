const FiltersList = () => {
  const inputStyle =
    "w-full bg-gray-50/80 rounded-2xl px-4 py-3 text-sm text-gray-700 outline-none focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all border-0 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] cursor-pointer";

  const labelStyle =
    "block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 pl-1";

  return (
    <form className="bg-white rounded-[32px] shadow-[0_15px_50px_rgba(0,0,0,0.03)] p-8 max-w-7xl mx-auto my-6">
      {/* Podstawowe Filtry - Grid 4-kolumnowy */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {/* Kategoria */}
        <div>
          <label className={labelStyle}>Kategoria</label>
          <select className={inputStyle} defaultValue="1">
            <option value="1">Osobowe</option>
            <option value="2">Motocykle</option>
            <option value="3">Dostawcze</option>
          </select>
        </div>

        {/* Marka */}
        <div>
          <label className={labelStyle}>Marka</label>
          <select className={inputStyle} defaultValue="">
            <option value="">Wszystkie marki</option>
            <option value="1">Audi</option>
            <option value="2">BMW</option>
            <option value="3">Toyota</option>
          </select>
        </div>

        {/* Model */}
        <div>
          <label className={labelStyle}>Model</label>
          <select className={inputStyle} defaultValue="">
            <option value="">Wszystkie modele</option>
            <option value="1">A4</option>
            <option value="2">A6</option>
            <option value="3">Seria 3</option>
            <option value="4">Seria 5</option>
            <option value="5">Corolla</option>
          </select>
        </div>

        {/* Lokalizacja */}
        <div>
          <label className={labelStyle}>Lokalizacja</label>
          <input
            type="text"
            placeholder="np. Warszawa, Mazowieckie"
            className={inputStyle}
          />
        </div>
      </div>

      {/* Druga linia - Cena i Rok */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div>
          <label className={labelStyle}>Cena od</label>
          <input type="number" placeholder="od zł" className={inputStyle} />
        </div>
        <div>
          <label className={labelStyle}>Cena do</label>
          <input type="number" placeholder="do zł" className={inputStyle} />
        </div>
        <div>
          <label className={labelStyle}>Rok produkcji od</label>
          <input type="number" placeholder="np. 2015" className={inputStyle} />
        </div>
        <div>
          <label className={labelStyle}>Rok produkcji do</label>
          <input type="number" placeholder="np. 2026" className={inputStyle} />
        </div>
      </div>

      {/* Szczegółowe parametry pojazdu - Rozwijane za pomocą natywnego HTML <details> */}
      <details className="border-t border-gray-50 pt-6 mb-4 group">
        <summary className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider hover:text-blue-700 transition-colors focus:outline-none cursor-pointer list-none select-none">
          <svg
            className="w-4 h-4 transition-transform duration-300 group-open:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          Szczegółowe parametry pojazdu
        </summary>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6 pb-2">
          {/* Przebieg od */}
          <div>
            <label className={labelStyle}>Przebieg od (km)</label>
            <input type="number" placeholder="np. 50 000" className={inputStyle} />
          </div>

          {/* Przebieg do */}
          <div>
            <label className={labelStyle}>Przebieg do (km)</label>
            <input type="number" placeholder="np. 200 000" className={inputStyle} />
          </div>

          {/* Pojemność od */}
          <div>
            <label className={labelStyle}>Pojemność od (cm³)</label>
            <input type="number" placeholder="np. 1900" className={inputStyle} />
          </div>

          {/* Pojemność do */}
          <div>
            <label className={labelStyle}>Pojemność do (cm³)</label>
            <input type="number" placeholder="np. 3000" className={inputStyle} />
          </div>

          {/* Moc od */}
          <div>
            <label className={labelStyle}>Moc silnika od (KM)</label>
            <input type="number" placeholder="np. 150" className={inputStyle} />
          </div>

          {/* Moc do */}
          <div>
            <label className={labelStyle}>Moc silnika do (KM)</label>
            <input type="number" placeholder="np. 300" className={inputStyle} />
          </div>

          {/* Skrzynia biegów */}
          <div>
            <label className={labelStyle}>Skrzynia biegów</label>
            <select className={inputStyle} defaultValue="">
              <option value="">Dowolna</option>
              <option value="manual">Manualna</option>
              <option value="automatic">Automatyczna</option>
            </select>
          </div>

          {/* Typ nadwozia */}
          <div>
            <label className={labelStyle}>Typ nadwozia</label>
            <select className={inputStyle} defaultValue="">
              <option value="">Dowolne</option>
              <option value="sedan">Sedan</option>
              <option value="kombi">Kombi</option>
              <option value="suv">SUV</option>
              <option value="hatchback">Hatchback</option>
            </select>
          </div>

          {/* Kraj pochodzenia */}
          <div>
            <label className={labelStyle}>Kraj pochodzenia</label>
            <select className={inputStyle} defaultValue="">
              <option value="">Dowolny</option>
              <option value="PL">Polska</option>
              <option value="DE">Niemcy</option>
              <option value="FR">Francja</option>
            </select>
          </div>

          {/* Kolor */}
          <div>
            <label className={labelStyle}>Kolor</label>
            <select className={inputStyle} defaultValue="">
              <option value="">Dowolny</option>
              <option value="czarny">Czarny</option>
              <option value="bialy">Biały</option>
              <option value="szary">Szary</option>
            </select>
          </div>

          {/* Kierownica */}
          <div>
            <label className={labelStyle}>Kierownica</label>
            <select className={inputStyle} defaultValue="LHD">
              <option value="LHD">Po lewej stronie (Standard)</option>
              <option value="RHD">Po prawej stronie (Anglik)</option>
            </select>
          </div>

          {/* Rodzaj paliwa */}
          <div>
            <label className={labelStyle}>Rodzaj paliwa</label>
            <select className={inputStyle} defaultValue="">
              <option value="">Dowolne</option>
              <option value="diesel">Diesel</option>
              <option value="petrol">Benzyna</option>
              <option value="hybrid">Hybryda</option>
              <option value="electric">Elektryczny</option>
            </select>
          </div>
        </div>
      </details>

      {/* Stopka filtrów */}
      <div className="flex justify-between items-center mt-6 border-t border-gray-50 pt-6">
        <button
          type="reset"
          className="text-gray-500 hover:text-gray-700 text-sm font-semibold transition-colors cursor-pointer"
        >
          Wyczyść wszystkie filtry
        </button>

        <button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl px-6 py-3 text-sm font-bold shadow-md hover:from-blue-700 hover:to-indigo-700 transition-all cursor-pointer"
        >
          Pokaż ogłoszenia
        </button>
      </div>
    </form>
  );
};

export default FiltersList;