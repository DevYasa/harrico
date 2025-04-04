// src/components/common/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Import your logo - you'll need to add this file to your assets folder
import harrico_logo from '../../assets/images/logo3.png'; // Adjust the path as needed

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
      name: 'HIGH JEWELRY',
      path: '/collections/high-jewelry',
      submenu: [
        { name: 'SIGNATURE COLLECTIONS', path: '/collections/high-jewelry/signature' },
        { name: 'LIMITED EDITIONS', path: '/collections/high-jewelry/limited-editions' },
        { name: 'BESPOKE CREATIONS', path: '/collections/high-jewelry/bespoke' }
      ]
    },
    {
      name: 'FINE JEWELRY',
      path: '/collections',
      submenu: [
        { name: 'NECKLACES', path: '/collections/necklaces' },
        { name: 'RINGS', path: '/collections/rings' },
        { name: 'EARRINGS', path: '/collections/earrings' },
        { name: 'BRACELETS', path: '/collections/bracelets' }
      ]
    },
    {
      name: 'ENGAGEMENT AND BRIDAL',
      path: '/collections/bridal',
      submenu: [
        { name: 'ENGAGEMENT RINGS', path: '/collections/bridal/engagement' },
        { name: 'WEDDING BANDS', path: '/collections/bridal/wedding-bands' },
        { name: 'BRIDAL SETS', path: '/collections/bridal/sets' }
      ]
    },
    {
      name: 'SERVICES',
      path: '/services',
      submenu: [
        { name: 'CUSTOM DESIGN', path: '/services/custom-design' },
        { name: 'JEWELRY CARE', path: '/services/jewelry-care' },
        { name: 'REPAIRS & RESIZING', path: '/services/repairs' }
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
          {/* Top utility icons */}
          <div className="container mx-auto flex justify-between items-center py-4 px-8">
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
            
            {/* Center logo */}
            <Link to="/" className="flex justify-center">
              <img 
                src={harrico_logo} 
                alt="Harrico Logo" 
                className="w-32 h-32 object-contain"
              />
            </Link>
            
            <div className="flex items-center space-x-6">
              {/* Keep this div for layout balance even if empty */}
            </div>
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
        <div className="md:hidden py-3 px-4 flex justify-between items-center">
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          {/* Center Logo */}
          <Link to="/" className="flex items-center justify-center">
            <img 
              src={harrico_logo} 
              alt="Harrico Logo" 
              className="w-24 h-24 object-contain"
            />
          </Link>
          
          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/search" className="text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-[#08081a] z-40 transform transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="container mx-auto px-6 overflow-y-auto h-full pt-20">
          {/* Close button */}
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-white"
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          {/* No second logo in mobile menu */}
          <div className="flex justify-center mb-10 text-white text-2xl font-serif">
            Harrico
          </div>
          
          <nav className="py-8">
            <ul className="space-y-6">
              {navItems.map((item, index) => {
                const [subMenuOpen, setSubMenuOpen] = useState(false);
                return (
                  <li key={index} className="py-2 border-b border-gray-800">
                    <div className="flex justify-between items-center">
                      <Link 
                        to={item.path} 
                        className="block text-lg tracking-wider text-white font-light"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <button 
                          onClick={() => setSubMenuOpen(!subMenuOpen)}
                          className="text-white p-1"
                        >
                          <svg 
                            width="20" 
                            height="20" 
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
                      <div className="mt-2 ml-4 space-y-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link 
                            key={subIndex}
                            to={subItem.path}
                            className="block py-2 text-sm text-gray-300 hover:text-white"
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
      <div className="h-[40px] md:h-[180px]"></div>
    </>
  );
};

export default Header;