import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-lg">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link
            to="/"
            className={`hover:text-yellow-300 ${location.pathname === "/" ? "text-yellow-300" : "text-white"}`}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/blockchain"
            className={`hover:text-yellow-300 ${location.pathname === "/blockchain" ? "text-yellow-300" : "text-white"}`}>
            Blockchain
          </Link>
        </li>
        <li>
          <Link
            to="/solana"
            className={`hover:text-yellow-300 ${location.pathname === "/solana" ? "text-yellow-300" : "text-white"}`}>
            Solana
          </Link>
        </li>
        <li>
          <Link
            to="/wallet"
            className={`hover:text-yellow-300 ${location.pathname === "/wallet" ? "text-yellow-300" : "text-white"}`}>
            Wallet Setup
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;