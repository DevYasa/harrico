// src/components/common/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Import your logos
import harrico_logo from '../../assets/images/logo.png'; // Your circular emblem logo
import harrico_text_logo from '../../assets/images/text-logo.png'; // Add your text logo if available

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  
  // Add scroll detection for header styles
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
  
  // Navigation items with submenus
  const navItems = [
    {
      name: 'ABOUT US',
      path: '/about',
      submenu: [
        { name: 'HISTORY & HERITAGE', path: '/about/history' },
        { name: 'OUR STORY', path: '/about/story' },
        { name: 'OUR TEAM', path: '/about/team' },
        { name: 'LOCATIONS', path: '/about/locations' },
        { name: 'NEWS & EVENTS', path: '/about/news' }
      ]
    },
    {
      name: 'GEMSTONES',
      path: '/collections',
      submenu: [
        { name: 'PRECIOUS GEMSTONES', path: '/collections/precious-gemstones' },
        { name: 'BLUE SAPPHIRE', path: '/collections/precious-gemstones/blue-sapphire' },
        { name: 'EMERALD', path: '/collections/precious-gemstones/emerald' },
        { name: 'RUBY', path: '/collections/precious-gemstones/ruby' },
        { name: 'YELLOW SAPPHIRE', path: '/collections/precious-gemstones/yellow-sapphire' },
        { name: 'PINK SAPPHIRE', path: '/collections/precious-gemstones/pink-sapphire' },
        { name: 'OTHER PRECIOUS GEMS', path: '/collections/precious-gemstones' },
        { name: 'SEMI-PRECIOUS GEMSTONES', path: '/collections/semi-precious-gemstones' }
      ]
    },
    {
      name: 'JEWELRY',
      path: '/collections',
      submenu: [
        { name: 'GOLD JEWELRY', path: '/collections/gold-jewelry' },
        { name: '22KT GOLD', path: '/collections/gold-jewelry/22kt' },
        { name: '18KT GOLD', path: '/collections/gold-jewelry/18kt-yellow' },
        { name: '14KT GOLD', path: '/collections/gold-jewelry/14kt-yellow' },
        { name: 'WHITE GOLD', path: '/collections/gold-jewelry/18kt-white' },
        { name: 'PLATINUM JEWELRY', path: '/collections/platinum-jewelry' },
        { name: 'SILVER PALLADIUM', path: '/collections/silver-palladium' }
      ]
    },
    {
      name: 'BY CATEGORY',
      path: '/collections',
      submenu: [
        { name: 'RINGS', path: '/collections/rings' },
        { name: 'NECKLACES', path: '/collections/necklaces' },
        { name: 'EARRINGS', path: '/collections/earrings' },
        { name: 'BRACELETS', path: '/collections/bracelets' },
        { name: 'PENDANTS', path: '/collections/pendants' },
        { name: 'BRIDAL JEWELRY', path: '/collections/bridal' }
      ]
    },
    {
      name: 'CUSTOM DESIGNS',
      path: '/collections/custom-designs',
      submenu: [
        { name: 'DESIGN PROCESS', path: '/collections/custom-designs' },
        { name: 'INSPIRATION GALLERY', path: '/collections/custom-designs/gallery' },
        { name: 'ENGAGEMENT RINGS', path: '/collections/custom-designs/engagement' },
        { name: 'SCHEDULE CONSULTATION', path: '/contact/appointment' }
      ]
    },
    {
      name: 'CONTACT US',
      path: '/contact',
      submenu: [
        { name: 'BOUTIQUES', path: '/contact/boutiques' },
        { name: 'APPOINTMENT', path: '/contact/appointment' },
        { name: 'CUSTOMER SERVICE', path: '/contact/customer-service' }
      ]
    }
  ];

  const handleMouseEnter = (index) => {
    setActiveSubmenu(index);
  };

  const handleMouseLeave = () => {
    setActiveSubmenu(null);
  };
  
  return (
    <>
      {/* Fixed header with dark background */}
      <header className="fixed w-full z-50 bg-[#08081a]">
        {/* Desktop View Header - Full Version */}
        <div className="hidden md:block">
          {/* Top utility icons and text logo */}
          <div className="container mx-auto flex justify-between items-center px-8 pt-4 pb-2">
            <div className="flex items-center space-x-6">
              {/* Left side icons */}
              <Link to="/boutiques" className="text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="/search" className="text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            
            {/* Center text logo */}
            <div className="flex-1 flex justify-center items-center">
              <Link to="/">
                {harrico_text_logo ? (
                  <img 
                    src={harrico_text_logo} 
                    alt="Harrico" 
                    className="h-9"
                  />
                ) : (
                  <h1 className="text-white text-3xl tracking-widest font-serif">HARRICO</h1>
                )}
              </Link>
            </div>
            
            <div className="flex items-center space-x-6">
              {/* Keep this div for layout balance */}
              <div className="w-20"></div>
            </div>
          </div>
          
          {/* Full width line with centered logo */}
          <div className="relative w-full flex items-center justify-center py-1">
            {/* Left line */}
            <div className="h-px bg-[#b9a16b] flex-1 mx-5"></div>
            
            {/* Centered emblem logo */}
            <div className="z-10">
              <Link to="/">
                <img 
                  src={harrico_logo} 
                  alt="Harrico Emblem" 
                  className="w-12 h-12 object-contain"
                />
              </Link>
            </div>
            
            {/* Right line */}
            <div className="h-px bg-[#b9a16b] flex-1 mx-5"></div>
          </div>
          
          {/* Main navigation */}
          <nav className="bg-[#08081a] py-4 border-t border-gray-700/30">
            <div className="container mx-auto">
              <ul className="flex justify-center items-center">
                {navItems.map((item, index) => (
                  <li 
                    key={index} 
                    className="px-6 xl:px-8 relative group"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link 
                      to={item.path} 
                      className="inline-block text-sm tracking-widest uppercase text-white hover:text-[#b9a16b] transition-colors"
                    >
                      {item.name}
                    </Link>
                    
                    {/* Submenu */}
                    {activeSubmenu === index && item.submenu && (
                      <div className="absolute left-0 mt-0 pt-4 w-64 z-10">
                        {/* This invisible block fills the gap */}
                        <div className="absolute top-0 h-4 w-full bg-transparent"></div>
                        <div className="bg-[#08081a] shadow-lg border border-gray-700/30">
                          <div className="p-4">
                            {item.submenu.map((subItem, subIndex) => (
                              <div key={subIndex} className="py-2 border-b border-gray-700/30 last:border-0">
                                <Link 
                                  to={subItem.path}
                                  className="block text-xs tracking-wider text-white hover:text-[#b9a16b] transition-colors"
                                >
                                  {subItem.name}
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
        
        {/* Mobile Header */}
        <div className="md:hidden py-3 px-4">
          {/* Top section with menu button, text logo, and search */}
          <div className="flex justify-between items-center mb-2">
            {/* Mobile Menu Button that transforms to X when open */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white z-50 w-6 h-6 relative focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
            
            {/* Center Text Logo */}
            <div className="flex-1 flex justify-center">
              <Link to="/">
                {harrico_text_logo ? (
                  <img 
                    src={harrico_text_logo} 
                    alt="Harrico" 
                    className="h-7"
                  />
                ) : (
                  <h1 className="text-white text-xl tracking-wider font-serif">HARRICO</h1>
                )}
              </Link>
            </div>
            
            {/* Right Icons */}
            <Link to="/search" className="text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
          
          {/* Full width line with centered logo - mobile */}
          <div className="relative w-full flex items-center justify-center">
            {/* Left line */}
            <div className="h-px bg-[#b9a16b] flex-1 mx-4"></div>
            
            {/* Centered emblem logo */}
            <div className="z-10">
              <Link to="/">
                <img 
                  src={harrico_logo} 
                  alt="Harrico Emblem" 
                  className="w-10 h-10 object-contain"
                />
              </Link>
            </div>
            
            {/* Right line */}
            <div className="h-px bg-[#b9a16b] flex-1 mx-4"></div>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay - White version with more top spacing */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="container mx-auto px-6 overflow-y-auto h-full">
          {/* Navigation Menu with additional top padding */}
          <nav className="py-6 mt-24">
            <ul className="space-y-0">
              {navItems.map((item, index) => {
                const [subMenuOpen, setSubMenuOpen] = useState(false);
                return (
                  <li key={index} className="border-b border-gray-200">
                    <div className="flex justify-between items-center py-4">
                      <Link 
                        to={item.path} 
                        className="block text-base text-gray-900 font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            setSubMenuOpen(!subMenuOpen);
                          }}
                          className="text-gray-900 p-1"
                        >
                          <svg 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transform transition-transform ${subMenuOpen ? 'rotate-180' : ''}`}
                          >
                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      )}
                    </div>
                    
                    {/* Mobile Submenu */}
                    {subMenuOpen && item.submenu && (
                      <div className="py-2 pl-4 mb-3">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link 
                            key={subIndex}
                            to={subItem.path}
                            className="block py-2 text-sm text-gray-600"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
      
      {/* Spacer for fixed header */}
      <div className="h-[70px] md:h-[140px]"></div>
    </>
  );
};

export default Header;