import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/blockchain">Blockchain</Link></li>
      <li><Link to="/solana">Solana</Link></li>
      <li><Link to="/wallet">Wallet Setup</Link></li>
    </ul>
  </nav>
);

export default Navbar;
