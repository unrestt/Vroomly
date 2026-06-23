import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        
        <div className="max-w-md mx-auto px-4 text-center mt-16 sm:mt-24">
          {/* Speedometer SVG / Animated 404 visual */}
          <div className="relative flex justify-center mb-6">
            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl w-48 h-48 mx-auto -top-4"></div>
            
            {/* Speedometer SVG with text inside to prevent layout shift/misalignment */}
            <svg 
              className="w-56 h-56 relative" 
              viewBox="0 0 200 200" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer gauge dial track */}
              <path 
                d="M 40 140 A 72 72 0 1 1 160 140" 
                stroke="#E5E7EB" 
                strokeWidth="10" 
                strokeLinecap="round"
              />
              
              {/* Active part of dial (blue speed curve) */}
              <path 
                d="M 40 140 A 72 72 0 0 1 151 49" 
                stroke="#3B82F6" 
                strokeWidth="10" 
                strokeLinecap="round"
              />
              
              {/* Speedometer Tick Marks (Symmetric & mathematically centered at 100,100) */}
              {/* 150 deg (bottom left) */}
              <line x1="51.5" y1="128" x2="42.8" y2="133" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round" />
              {/* 195 deg */}
              <line x1="45.9" y1="85.5" x2="36.2" y2="82.9" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round" />
              {/* 240 deg */}
              <line x1="72" y1="51.5" x2="67" y2="42.8" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round" />
              {/* 270 deg (top center) */}
              <line x1="100" y1="44" x2="100" y2="34" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round" />
              {/* 300 deg */}
              <line x1="128" y1="51.5" x2="133" y2="42.8" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round" />
              {/* 345 deg */}
              <line x1="154.1" y1="85.5" x2="163.8" y2="82.9" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round" />
              {/* 30 deg (bottom right) */}
              <line x1="148.5" y1="128" x2="157.2" y2="133" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round" />
              
              {/* Speed display label (404) placed below the needle pivot */}
              <text 
                x="100" 
                y="145" 
                textAnchor="middle" 
                className="fill-gray-900 font-extrabold"
                style={{ fontSize: "36px", fontFamily: "Inter, system-ui, sans-serif" }}
              >
                404
              </text>
              
              {/* "BŁĄD DROGI" sublabel below the 404 text */}
              <text 
                x="100" 
                y="165" 
                textAnchor="middle" 
                className="fill-red-500 font-black tracking-widest"
                style={{ fontSize: "10px", fontFamily: "Inter, system-ui, sans-serif" }}
              >
                BŁĄD DROGI
              </text>
              
              {/* Needle center pivot placed correctly at the center of the dial arc (100, 100) */}
              <circle cx="100" cy="100" r="10" fill="#1F2937" />
              <circle cx="100" cy="100" r="5" fill="#3B82F6" />
              
              {/* Needle pointing to top-right, mathematically positioned at 315 deg */}
              <line 
                x1="100" 
                y1="100" 
                x2="142.4" 
                y2="57.6" 
                stroke="#EF4444" 
                strokeWidth="4" 
                strokeLinecap="round" 
              />
              
              {/* Small center pin */}
              <circle cx="100" cy="100" r="2" fill="#FFFFFF" />
            </svg>
          </div>

          <h2 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Ups! Zjechaliśmy z drogi...
          </h2>
          <p className="text-gray-600 mb-8 text-sm sm:text-base leading-relaxed">
            Strona, której szukasz, nie istnieje lub została przeniesiona pod inny adres. Wróć na główny pas ruchu i kontynuuj podróż.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              to="/"
              className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-200 text-center flex items-center justify-center gap-2 group"
            >
              <span>Strona główna</span>
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            
            <button
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-200 text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg 
                className="w-4 h-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Wróć wstecz</span>
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PageNotFound;