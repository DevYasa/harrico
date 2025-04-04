// src/components/common/ScrollToTop.jsx
import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Check if it's a mobile device
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Listen for resize events
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Show button when user scrolls down, using different thresholds for mobile/desktop
  const toggleVisibility = () => {
    const scrollThreshold = isMobile ? 150 : 250; // Lower threshold on mobile
    if (window.pageYOffset > scrollThreshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    // Clean up the listener when component unmounts
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [isMobile]); // Re-add the listener when isMobile changes

  // Different styles for mobile/desktop
  const buttonClasses = isMobile 
    ? "w-10 h-10 bg-white shadow-lg flex items-center justify-center border border-gray-200" 
    : "w-12 h-12 bg-white shadow-md flex items-center justify-center border border-gray-200";
  
  const containerClasses = isMobile
    ? "fixed z-50 bottom-3 right-3" 
    : "fixed z-50 bottom-6 right-6";
    
  return (
    <div className={`${containerClasses} ${isVisible ? 'block' : 'hidden'}`}>
      <button
        onClick={scrollToTop}
        className={`${buttonClasses} hover:bg-gray-50 focus:outline-none`}
        aria-label="Scroll to top"
        style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.15)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#b9a16b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTop;