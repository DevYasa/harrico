// src/components/common/PremiumHeader.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../../assets/images/logo.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
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

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/collections', label: 'Collections' },
    { path: '/ceylon-gems-hub', label: 'Gems Hub' },
    { path: '/gim', label: 'GIM' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className="fixed w-full z-50">
      {/* Top accent border - ultra thin gold line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-amber-300 via-amber-600 to-amber-300"></div>
      
      {/* Main header */}
      <div 
        className={`w-full transition-all duration-700 ease-in-out ${
          scrolled 
            ? 'bg-gray-950/90 backdrop-blur-md py-1 shadow-lg' 
            : 'bg-gray-950/80 backdrop-blur-sm py-3'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo area */}
            <Link 
              to="/" 
              className="relative group flex items-center py-2 overflow-hidden"
              aria-label="Harrico Ceylon Gems & Jewels - Home"
            >
              {/* Gold shimmer effect behind logo on hover */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-200/0 via-amber-200/30 to-amber-200/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></div>
              
              <img 
                src={logoImage} 
                alt="Harrico Ceylon Gems & Jewels" 
                className={`transition-all duration-500 ${
                  scrolled ? 'h-14' : 'h-16'
                }`}
              />
            </Link>

            {/* Desktop navigation - high-end styling */}
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-1 lg:space-x-3">
                {navLinks.map((item) => (
                  <li key={item.path}>
                    <Link 
                      to={item.path} 
                      className={`
                        relative px-3 py-2 
                        font-heading uppercase text-sm tracking-wider
                        transition-all duration-300 
                        overflow-hidden group
                        flex items-center justify-center
                        ${location.pathname === item.path 
                          ? 'text-amber-400' 
                          : 'text-amber-300 hover:text-amber-200'
                        }
                      `}
                    >
                      {/* Elegant hover effect - rising border */}
                      <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 transform origin-left scale-x-0 group-hover:scale-x-100"></span>
                      
                      {/* Active page indicator - subtle luxury marker */}
                      {location.pathname === item.path && (
                        <span className="absolute top-0 left-1/2 w-6 h-px bg-gradient-to-r from-amber-400 to-amber-600 transform -translate-x-1/2"></span>
                      )}
                      
                      {/* Text with subtle shadow for depth */}
                      <span className="relative">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile menu button - elegant styling */}
            <button 
              className="md:hidden relative w-8 h-8 flex items-center justify-center focus:outline-none group"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <div className="relative">
                {/* Animated luxury hamburger icon */}
                <span className={`block absolute h-0.5 w-5 bg-gradient-to-r from-amber-400 to-amber-600 transform transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
                <span className={`block absolute h-0.5 w-5 bg-gradient-to-r from-amber-400 to-amber-600 transform transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block absolute h-0.5 w-5 bg-gradient-to-r from-amber-400 to-amber-600 transform transition-all duration-300 ease-in-out ${mobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
              </div>
              
              {/* Elegant ripple effect on click */}
              <span className="absolute inset-0 w-full h-full rounded-full transition-all duration-300 ease-in-out group-active:bg-amber-100/30"></span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom accent border - ultra thin gold line that appears when scrolled */}
      <div className={`h-px w-full bg-gradient-to-r from-amber-300/30 via-amber-600/30 to-amber-300/30 transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}></div>
      
      {/* Mobile menu - luxurious overlay */}
              <div 
        className={`fixed inset-0 bg-gray-950/95 backdrop-blur-md flex flex-col justify-center z-40 transition-all duration-500 md:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Gold accents for mobile menu */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-300 via-amber-600 to-amber-300"></div>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-300 via-amber-600 to-amber-300"></div>
        
        {/* Decorative elements */}
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-amber-400 opacity-10 blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-amber-400 opacity-10 blur-xl"></div>
        
        <nav className="container mx-auto px-6 py-12">
          <ul className="flex flex-col items-center space-y-6">
            {navLinks.map((item, index) => (
              <li 
                key={item.path}
                style={{ 
                  opacity: mobileMenuOpen ? 1 : 0,
                  transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.3s ${index * 0.1}s ease-out`
                }}
              >
                <Link 
                  to={item.path} 
                  className={`
                    relative font-heading uppercase text-xl tracking-widest
                    transition-all duration-300
                    ${location.pathname === item.path ? 'text-amber-400' : 'text-amber-300'}
                  `}
                >
                  {item.label}
                  
                  {/* Elegant underline - only visible for active page or on hover */}
                  <span className={`
                    absolute -bottom-2 left-0 right-0 h-px
                    bg-gradient-to-r from-amber-300 via-amber-600 to-amber-300
                    transform origin-left transition-transform duration-300 ease-out
                    ${location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'}
                  `}></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;