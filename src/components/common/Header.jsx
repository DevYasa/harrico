// src/components/common/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../../assets/images/logo1.png'; // Add your logo file

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src={logoImage} 
              alt="Harrico Ceylon Gems & Jewels" 
              className="h-12"
            />
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-amber-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-amber-900 hover:text-amber-700 font-medium uppercase text-sm tracking-wide transition-colors duration-300">Home</Link>
            <Link to="/about" className="text-amber-900 hover:text-amber-700 font-medium uppercase text-sm tracking-wide transition-colors duration-300">About</Link>
            <Link to="/collections" className="text-amber-900 hover:text-amber-700 font-medium uppercase text-sm tracking-wide transition-colors duration-300">Collections</Link>
            <Link to="/ceylon-gems-hub" className="text-amber-900 hover:text-amber-700 font-medium uppercase text-sm tracking-wide transition-colors duration-300">Gems Hub</Link>
            <Link to="/gim" className="text-amber-900 hover:text-amber-700 font-medium uppercase text-sm tracking-wide transition-colors duration-300">GIM</Link>
            <Link to="/contact" className="text-amber-900 hover:text-amber-700 font-medium uppercase text-sm tracking-wide transition-colors duration-300">Contact</Link>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <nav className="flex flex-col py-4">
              <Link to="/" className="px-4 py-3 text-amber-900 hover:bg-amber-50 font-medium uppercase text-sm">Home</Link>
              <Link to="/about" className="px-4 py-3 text-amber-900 hover:bg-amber-50 font-medium uppercase text-sm">About</Link>
              <Link to="/collections" className="px-4 py-3 text-amber-900 hover:bg-amber-50 font-medium uppercase text-sm">Collections</Link>
              <Link to="/ceylon-gems-hub" className="px-4 py-3 text-amber-900 hover:bg-amber-50 font-medium uppercase text-sm">Gems Hub</Link>
              <Link to="/gim" className="px-4 py-3 text-amber-900 hover:bg-amber-50 font-medium uppercase text-sm">GIM</Link>
              <Link to="/contact" className="px-4 py-3 text-amber-900 hover:bg-amber-50 font-medium uppercase text-sm">Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;