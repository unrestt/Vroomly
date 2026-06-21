import { useState } from "react";
import Button from "../../../components/Button";
import { Select } from "../../../components/Select";

const categoryOptions = [
  { value: "1", label: "Osobowe" },
  { value: "2", label: "Motocykle" },
  { value: "3", label: "Dostawcze" },
];

const makeOptions = [
  { value: "1", label: "Audi" },
  { value: "2", label: "BMW" },
  { value: "3", label: "Toyota" },
];

const getModelOptions = (make: string) => {
  if (make === "1") {
    return [
      { value: "1", label: "A4" },
      { value: "2", label: "A6" },
    ];
  }
  if (make === "2") {
    return [
      { value: "3", label: "Seria 3" },
      { value: "4", label: "Seria 5" },
    ];
  }
  if (make === "3") {
    return [{ value: "5", label: "Corolla" }];
  }
  return [];
};

const gearboxOptions = [
  { value: "manual", label: "Manualna" },
  { value: "automatic", label: "Automatyczna" },
];

const bodyTypeOptions = [
  { value: "sedan", label: "Sedan" },
  { value: "kombi", label: "Kombi" },
  { value: "suv", label: "SUV" },
  { value: "hatchback", label: "Hatchback" },
];

const originOptions = [
  { value: "PL", label: "Polska" },
  { value: "DE", label: "Niemcy" },
  { value: "FR", label: "Francja" },
];

const colorOptions = [
  { value: "czarny", label: "Czarny" },
  { value: "bialy", label: "Biały" },
  { value: "szary", label: "Szary" },
];

const steeringOptions = [
  { value: "LHD", label: "Po lewej stronie (Standard)" },
  { value: "RHD", label: "Po prawej stronie (Anglik)" },
];

const fuelOptions = [
  { value: "diesel", label: "Diesel" },
  { value: "petrol", label: "Benzyna" },
  { value: "hybrid", label: "Hybryda" },
  { value: "electric", label: "Elektryczny" },
];

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

  const labelStyle =
    "block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 pl-1";

  return (
    <div className="bg-white rounded-[32px] shadow-[0_15px_50px_rgba(0,0,0,0.03)] p-8 max-w-7xl mx-auto my-6">
      {/* Podstawowe Filtry - Grid 4-kolumnowy */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {/* Kategoria */}
        <div>
          <label className={labelStyle}>Kategoria</label>
          <Select
            value={filters.category}
            onChange={(val) => setFilters({ ...filters, category: val })}
            options={categoryOptions}
            placeholder="Wszystkie kategorie"
          />
        </div>

        {/* Marka */}
        <div>
          <label className={labelStyle}>Marka</label>
          <Select
            value={filters.make}
            onChange={(val) => setFilters({ ...filters, make: val, model: "" })}
            options={makeOptions}
            placeholder="Wszystkie marki"
          />
        </div>

        {/* Model */}
        <div>
          <label className={labelStyle}>Model</label>
          <Select
            value={filters.model}
            disabled={!filters.make}
            onChange={(val) => setFilters({ ...filters, model: val })}
            options={getModelOptions(filters.make)}
            placeholder="Wszystkie modele"
          />
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
          className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider hover:text-blue-700 transition-colors focus:outline-none cursor-pointer"
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

        <div
          className={`grid transition-all duration-500 ease-in-out ${
            showDetailed
              ? "grid-rows-[1fr] opacity-100 mt-6"
              : "grid-rows-[0fr] opacity-0 mt-0 pointer-events-none"
          }`}
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-2">
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
                <Select
                  value={filters.gearbox}
                  onChange={(val) => setFilters({ ...filters, gearbox: val })}
                  options={gearboxOptions}
                  placeholder="Dowolna"
                />
              </div>

              {/* Typ nadwozia */}
              <div>
                <label className={labelStyle}>Typ nadwozia</label>
                <Select
                  value={filters.bodyType}
                  onChange={(val) => setFilters({ ...filters, bodyType: val })}
                  options={bodyTypeOptions}
                  placeholder="Dowolne"
                />
              </div>

              {/* Kraj pochodzenia */}
              <div>
                <label className={labelStyle}>Kraj pochodzenia</label>
                <Select
                  value={filters.origin}
                  onChange={(val) => setFilters({ ...filters, origin: val })}
                  options={originOptions}
                  placeholder="Dowolny"
                />
              </div>

              {/* Kolor */}
              <div>
                <label className={labelStyle}>Kolor</label>
                <Select
                  value={filters.color}
                  onChange={(val) => setFilters({ ...filters, color: val })}
                  options={colorOptions}
                  placeholder="Dowolny"
                />
              </div>

              {/* Kierownica */}
              <div>
                <label className={labelStyle}>Kierownica</label>
                <Select
                  value={filters.steering}
                  onChange={(val) => setFilters({ ...filters, steering: val })}
                  options={steeringOptions}
                  placeholder="Dowolna"
                />
              </div>

              {/* Rodzaj paliwa */}
              <div>
                <label className={labelStyle}>Rodzaj paliwa</label>
                <Select
                  value={filters.fuel}
                  onChange={(val) => setFilters({ ...filters, fuel: val })}
                  options={fuelOptions}
                  placeholder="Dowolne"
                />
              </div>
            </div>
          </div>
        </div>
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