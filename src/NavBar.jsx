import React from 'react';
import { useNavigate } from 'react-router-dom';
import website_logo from './assets/website_logo.png';

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 p-4 flex items-center justify-between">
      <div className="logo cursor-pointer" onClick={() => navigate('/')}>
        <img src={website_logo} alt="Website Logo" className="h-14 md:h-16" /> {/* Responsive height */}
      </div>
      <ul className="flex space-x-4 md:space-x-8">
        <li><a href="/" className="text-black hover:text-blue-500">Home</a></li>
        <li><a href="/auth" className="text-black hover:text-blue-500">Auth</a></li>
        <li><a href="/transactions" className="text-black hover:text-blue-500">Transactions</a></li>
        <li><a href="/goals" className="text-black hover:text-blue-500">Goals</a></li>
        <li><a href="/market" className="text-black hover:text-blue-500">Market</a></li>
        <li><a href="/news" className="text-black hover:text-blue-500">News</a></li>
        <li><a href="/cards" className="text-black hover:text-blue-500">Cards</a></li>
        <li><a href="/education" className="text-black hover:text-blue-500">Education</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;