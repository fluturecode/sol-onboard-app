import { Link, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeContext'; // Adjust this import path based on your project structure

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <nav className={`flex justify-between items-center px-6 py-4 shadow-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-xl font-bold hover:text-blue-500 transition-colors">
          Brand
        </Link>
        <div className="hidden md:flex items-center space-x-8 border-l-2 border-gray-200 pl-4">
          <Link to="/" className={`py-2 border-b-2 border-transparent hover:border-blue-500 transition-colors ${location.pathname === "/" ? "border-blue-500 font-semibold" : ""}`}>
            Home
          </Link>
          <Link to="/blockchain" className={`py-2 border-b-2 border-transparent hover:border-blue-500 transition-colors ${location.pathname === "/blockchain" ? "border-blue-500 font-semibold" : ""}`}>
            Blockchain
          </Link>
          <Link to="/solana" className={`py-2 border-b-2 border-transparent hover:border-blue-500 transition-colors ${location.pathname === "/solana" ? "border-blue-500 font-semibold" : ""}`}>
            Solana
          </Link>
          <Link to="/wallet" className={`py-2 border-b-2 border-transparent hover:border-blue-500 transition-colors ${location.pathname === "/wallet" ? "border-blue-500 font-semibold" : ""}`}>
            Wallet Setup
          </Link>
        </div>
      </div>
      <button onClick={toggleTheme} className="p-2 rounded-full focus:outline-none focus:ring focus:ring-blue-500 transition">
        {/* Theme toggle icon */}
      </button>
    </nav>
  );
};

export default Navbar;
