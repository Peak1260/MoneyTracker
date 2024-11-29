import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import website_logo from './assets/website_logo.png';

function NavBar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For toggling the menu on mobile

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 p-4 flex items-center justify-between">
      {/* Logo - Hidden when menu is open */}
      <div className={`logo cursor-pointer ${isMenuOpen ? 'hidden' : ''}`} onClick={() => navigate('/')}>
        <img src={website_logo} alt="Website Logo" className="h-20 md:h-16" />
      </div>

      {/* Hamburger icon - Positioned to the left on mobile */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`block md:hidden text-black focus:outline-none ${isMenuOpen ? 'absolute right-4 top-7' : ''}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {/* Navigation Links */}
      <ul className={`flex flex-col md:flex-row md:space-x-6 ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
        <li><a href="/" className="text-black hover:text-green-500">Home</a></li>
        <li><a href="/transactions" className="text-black hover:text-green-500">Transactions</a></li>
        <li><a href="/goals" className="text-black hover:text-green-500">Goals</a></li>
        <li><a href="/market" className="text-black hover:text-green-500">Market</a></li>
        <li><a href="/news" className="text-black hover:text-green-500">News</a></li>
        <li><a href="/cards" className="text-black hover:text-green-500">Cards</a></li>
        <li><a href="/education" className="text-black hover:text-green-500">Education</a></li>
        <li><a href="/auth" className="text-black hover:text-green-500">Auth</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
