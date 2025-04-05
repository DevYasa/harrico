// AnimatedPageHeader.jsx
import React, { useState, useEffect } from 'react';

const AnimatedPageHeader = ({ title, subtitle, backgroundImage }) => {
  const [pageLoaded, setPageLoaded] = useState(false);
  
  // Initial page load animation
  useEffect(() => {
    // Set a small delay for dramatic effect
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Header Section with Logo Lines */}
      <header className={`bg-[#08081a] text-white pb-8 relative ${pageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
        {/* Logo Lines */}
        <div className="flex items-center justify-center pt-3 pb-2">
          <div className="w-24 h-px bg-[#b9a16b] transform transition-transform duration-700 ease-out scale-x-0 origin-right" 
               style={{transform: pageLoaded ? 'scaleX(1)' : 'scaleX(0)'}}></div>
          <div className="mx-2 transition-transform duration-700 ease-out delay-300" 
               style={{transform: pageLoaded ? 'scale(1)' : 'scale(0)'}}>
          </div>
          <div className="w-24 h-px bg-[#b9a16b] transform transition-transform duration-700 ease-out scale-x-0 origin-left" 
               style={{transform: pageLoaded ? 'scaleX(1)' : 'scaleX(0)'}}></div>
        </div>
        
        {/* Page Title with text reveal animation */}
        <h1 className="text-3xl md:text-4xl font-serif text-center pt-2 overflow-hidden">
          <span className="block transform transition-transform duration-700 delay-700" 
                style={{transform: pageLoaded ? 'translateY(0)' : 'translateY(100%)'}}>
            {title}
          </span>
        </h1>
      </header>
      
      {/* Hero Section with Background Image */}
      <div className={`relative h-[50vh] bg-[#08081a] ${pageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
        {/* Image as separate element instead of background */}
        <img 
          src={backgroundImage} 
          alt={`${title} background`}
          className={`absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 ease-out ${pageLoaded ? 'scale-105' : 'scale-100'}`}
          onError={(e) => {
            console.error('Failed to load hero image');
            // Keep the background color as fallback
            e.target.style.display = 'none';
          }}
        />
        
        {/* Content overlay with text reveal animation */}
        <div className="relative h-full z-10 flex items-center justify-center">
          <div className="container text-white text-center">
            <p 
              className="max-w-2xl mx-auto overflow-hidden transform transition-all duration-700 delay-500"
              style={{
                opacity: pageLoaded ? '1' : '0',
                transform: pageLoaded ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedPageHeader;