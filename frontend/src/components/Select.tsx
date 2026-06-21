import { useState, useRef, useEffect } from "react";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export const Select = ({
  value,
  onChange,
  options,
  placeholder = "Wybierz...",
  disabled = false,
  className = "",
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* Trigger Button */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-gray-50/80 rounded-2xl px-4 py-3 text-sm text-left text-gray-700 outline-none hover:bg-gray-100/50 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all border-0 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] cursor-pointer flex items-center justify-between disabled:opacity-50 disabled:cursor-not-allowed select-none"
      >
        <span className={selectedOption ? "text-gray-700 font-medium" : "text-gray-400"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-blue-500" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Options List */}
      <div
        className={`absolute z-50 left-0 right-0 mt-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden transition-all duration-200 origin-top ${
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="max-h-60 overflow-y-auto py-1 scrollbar-thin scrollbar-thumb-gray-250">
          {options.length === 0 ? (
            <div className="px-4 py-3 text-xs text-gray-400 text-center">Brak opcji</div>
          ) : (
            options.map((option) => {
              const isSelected = option.value === value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between select-none ${
                    isSelected
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <span>{option.label}</span>
                  {isSelected && (
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
