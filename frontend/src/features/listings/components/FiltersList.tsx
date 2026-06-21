import React, { useState } from "react";
import Button from "../../../components/Button";

const FiltersList = () => {
  const [showDetailed, setShowDetailed] = useState(false);

  const [filters, setFilters] = useState({
    category: "1",
    make: "",
    model: "",
    location: "",
    priceFrom: "",
    priceTo: "",
    yearFrom: "",
    yearTo: "",
    mileageFrom: "",
    mileageTo: "",
    capacityFrom: "",
    capacityTo: "",
    powerFrom: "",
    powerTo: "",
    gearbox: "",
    bodyType: "",
    origin: "",
    color: "",
    steering: "LHD",
    fuel: "",
  });

  const handleClear = () => {
    setFilters({
      category: "",
      make: "",
      model: "",
      location: "",
      priceFrom: "",
      priceTo: "",
      yearFrom: "",
      yearTo: "",
      mileageFrom: "",
      mileageTo: "",
      capacityFrom: "",
      capacityTo: "",
      powerFrom: "",
      powerTo: "",
      gearbox: "",
      bodyType: "",
      origin: "",
      color: "",
      steering: "",
      fuel: "",
    });
  };

  const inputStyle =
    "w-full bg-gray-50/80 rounded-2xl px-4 py-3 text-sm text-gray-700 outline-none focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all border-0 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]";

  const selectStyle =
    "w-full bg-gray-50/80 rounded-2xl px-4 py-3 text-sm text-gray-700 outline-none focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all border-0 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] appearance-none";

  const labelStyle =
    "block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 pl-1";

  return (
    <div className="bg-white rounded-[32px] shadow-[0_15px_50px_rgba(0,0,0,0.03)] p-8 max-w-7xl mx-auto my-6">
      {/* Podstawowe Filtry - Grid 4-kolumnowy */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {/* Kategoria */}
        <div>
          <label className={labelStyle}>Kategoria</label>
          <div className="relative">
            <select
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              className={selectStyle}
            >
              <option value="">Wszystkie kategorie</option>
              <option value="1">Osobowe</option>
              <option value="2">Motocykle</option>
              <option value="3">Dostawcze</option>
            </select>
          </div>
        </div>

        {/* Marka */}
        <div>
          <label className={labelStyle}>Marka</label>
          <select
            value={filters.make}
            onChange={(e) => setFilters({ ...filters, make: e.target.value })}
            className={selectStyle}
          >
            <option value="">Wszystkie marki</option>
            <option value="1">Audi</option>
            <option value="2">BMW</option>
            <option value="3">Toyota</option>
          </select>
        </div>

        {/* Model */}
        <div>
          <label className={labelStyle}>Model</label>
          <select
            value={filters.model}
            disabled={!filters.make}
            onChange={(e) => setFilters({ ...filters, model: e.target.value })}
            className={`${selectStyle} disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <option value="">Wszystkie modele</option>
            {filters.make === "1" && (
              <>
                <option value="1">A4</option>
                <option value="2">A6</option>
              </>
            )}
            {filters.make === "2" && (
              <>
                <option value="3">Seria 3</option>
                <option value="4">Seria 5</option>
              </>
            )}
            {filters.make === "3" && <option value="5">Corolla</option>}
          </select>
        </div>

        {/* Lokalizacja */}
        <div>
          <label className={labelStyle}>Lokalizacja</label>
          <input
            type="text"
            placeholder="np. Warszawa, Mazowieckie"
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            className={inputStyle}
          />
        </div>
      </div>

      {/* Druga linia - Cena i Rok */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {/* Cena Od */}
        <div>
          <label className={labelStyle}>Cena od</label>
          <input
            type="number"
            placeholder="od zł"
            value={filters.priceFrom}
            onChange={(e) => setFilters({ ...filters, priceFrom: e.target.value })}
            className={inputStyle}
          />
        </div>

        {/* Cena Do */}
        <div>
          <label className={labelStyle}>Cena do</label>
          <input
            type="number"
            placeholder="do zł"
            value={filters.priceTo}
            onChange={(e) => setFilters({ ...filters, priceTo: e.target.value })}
            className={inputStyle}
          />
        </div>

        {/* Rok Od */}
        <div>
          <label className={labelStyle}>Rok produkcji od</label>
          <input
            type="number"
            placeholder="np. 2015"
            value={filters.yearFrom}
            onChange={(e) => setFilters({ ...filters, yearFrom: e.target.value })}
            className={inputStyle}
          />
        </div>

        {/* Rok Do */}
        <div>
          <label className={labelStyle}>Rok produkcji do</label>
          <input
            type="number"
            placeholder="np. 2026"
            value={filters.yearTo}
            onChange={(e) => setFilters({ ...filters, yearTo: e.target.value })}
            className={inputStyle}
          />
        </div>
      </div>

      {/* Szczegółowe parametry pojazdu - Rozwijane */}
      <div className="border-t border-gray-50 pt-6 mb-4">
        <button
          type="button"
          onClick={() => setShowDetailed(!showDetailed)}
          className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider hover:text-blue-700 transition-colors focus:outline-none"
        >
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${
              showDetailed ? "rotate-180" : ""
            }`}
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
        </button>

        {showDetailed && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6 transition-all duration-500 ease-in-out">
            {/* Przebieg od */}
            <div>
              <label className={labelStyle}>Przebieg od (km)</label>
              <input
                type="number"
                placeholder="np. 50 000"
                value={filters.mileageFrom}
                onChange={(e) => setFilters({ ...filters, mileageFrom: e.target.value })}
                className={inputStyle}
              />
            </div>

            {/* Przebieg do */}
            <div>
              <label className={labelStyle}>Przebieg do (km)</label>
              <input
                type="number"
                placeholder="np. 200 000"
                value={filters.mileageTo}
                onChange={(e) => setFilters({ ...filters, mileageTo: e.target.value })}
                className={inputStyle}
              />
            </div>

            {/* Pojemność od */}
            <div>
              <label className={labelStyle}>Pojemność od (cm³)</label>
              <input
                type="number"
                placeholder="np. 1900"
                value={filters.capacityFrom}
                onChange={(e) => setFilters({ ...filters, capacityFrom: e.target.value })}
                className={inputStyle}
              />
            </div>

            {/* Pojemność do */}
            <div>
              <label className={labelStyle}>Pojemność do (cm³)</label>
              <input
                type="number"
                placeholder="np. 3000"
                value={filters.capacityTo}
                onChange={(e) => setFilters({ ...filters, capacityTo: e.target.value })}
                className={inputStyle}
              />
            </div>

            {/* Moc od */}
            <div>
              <label className={labelStyle}>Moc silnika od (KM)</label>
              <input
                type="number"
                placeholder="np. 150"
                value={filters.powerFrom}
                onChange={(e) => setFilters({ ...filters, powerFrom: e.target.value })}
                className={inputStyle}
              />
            </div>

            {/* Moc do */}
            <div>
              <label className={labelStyle}>Moc silnika do (KM)</label>
              <input
                type="number"
                placeholder="np. 300"
                value={filters.powerTo}
                onChange={(e) => setFilters({ ...filters, powerTo: e.target.value })}
                className={inputStyle}
              />
            </div>

            {/* Skrzynia biegów */}
            <div>
              <label className={labelStyle}>Skrzynia biegów</label>
              <select
                value={filters.gearbox}
                onChange={(e) => setFilters({ ...filters, gearbox: e.target.value })}
                className={selectStyle}
              >
                <option value="">Dowolna</option>
                <option value="manual">Manualna</option>
                <option value="automatic">Automatyczna</option>
              </select>
            </div>

            {/* Typ nadwozia */}
            <div>
              <label className={labelStyle}>Typ nadwozia</label>
              <select
                value={filters.bodyType}
                onChange={(e) => setFilters({ ...filters, bodyType: e.target.value })}
                className={selectStyle}
              >
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
              <select
                value={filters.origin}
                onChange={(e) => setFilters({ ...filters, origin: e.target.value })}
                className={selectStyle}
              >
                <option value="">Dowolny</option>
                <option value="PL">Polska</option>
                <option value="DE">Niemcy</option>
                <option value="FR">Francja</option>
              </select>
            </div>

            {/* Kolor */}
            <div>
              <label className={labelStyle}>Kolor</label>
              <select
                value={filters.color}
                onChange={(e) => setFilters({ ...filters, color: e.target.value })}
                className={selectStyle}
              >
                <option value="">Dowolny</option>
                <option value="czarny">Czarny</option>
                <option value="bialy">Biały</option>
                <option value="szary">Szary</option>
              </select>
            </div>

            {/* Kierownica */}
            <div>
              <label className={labelStyle}>Kierownica</label>
              <select
                value={filters.steering}
                onChange={(e) => setFilters({ ...filters, steering: e.target.value })}
                className={selectStyle}
              >
                <option value="LHD">Po lewej stronie (Standard)</option>
                <option value="RHD">Po prawej stronie (Anglik)</option>
              </select>
            </div>

            {/* Rodzaj paliwa */}
            <div>
              <label className={labelStyle}>Rodzaj paliwa</label>
              <select
                value={filters.fuel}
                onChange={(e) => setFilters({ ...filters, fuel: e.target.value })}
                className={selectStyle}
              >
                <option value="">Dowolne</option>
                <option value="diesel">Diesel</option>
                <option value="petrol">Benzyna</option>
                <option value="hybrid">Hybryda</option>
                <option value="electric">Elektryczny</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Stopka filtrów - Wyczyszczenie i Przycisk szukaj */}
      <div className="flex justify-between items-center mt-6 border-t border-gray-50 pt-6">
        <Button variant="text" onClick={handleClear}>
          Wyczyść wszystkie filtry
        </Button>

        <Button variant="gradient" type="submit">
          Pokaż ogłoszenia (3)
        </Button>
      </div>
    </div>
  );
};

export default FiltersList;