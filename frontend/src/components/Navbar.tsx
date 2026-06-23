import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-md bg-white/90">
      <div className="max-w-[1240px] mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <Logo className="h-9 transition-transform duration-300 group-hover:scale-105" />
        </Link>

        {/* Minimal list helper or simple tagline since we aren't doing users yet */}
        <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-500">
          <Link to="/" className="hover:text-blue-600 transition-colors">Przeglądaj</Link>
          <span className="text-gray-300">|</span>
          <span className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-bold">
            Najlepsze oferty na rynku
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;