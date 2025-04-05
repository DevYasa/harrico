// src/components/common/LoadingScreen.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo1.png';
import TextLogo from '../../assets/images/text-logo.png'; // Import your text logo
import BackgroundGifDesktop from '../../assets/images/mb-bg.gif';
import BackgroundGifMobile from '../../assets/images/mb-bg.gif';

const LoadingScreen = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check and update screen size
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Add keyframe animations
    const animations = document.createElement('style');
    animations.textContent = `
      @keyframes blueGlow {
        0% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
        50% { box-shadow: 0 0 35px rgba(59, 130, 246, 0.8), 0 0 50px rgba(59, 130, 246, 0.4); }
        100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
      }

      @keyframes singleScaleUp {
        0% { transform: scale(0.2); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
      }
      
      @keyframes fadeInUp {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes shimmer {
        0% { background-position: -200px 0; }
        100% { background-position: 200px 0; }
      }
      
      @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
    `;
    
    document.head.appendChild(animations);
    
    return () => {
      // Clean up
      if (document.head.contains(animations)) {
        document.head.removeChild(animations);
      }
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col justify-between z-50 overflow-hidden">
      {/* Responsive Background */}
      <div className="absolute inset-0 z-0">
        {isMobile ? (
          <img 
            src={BackgroundGifMobile}
            alt="Sapphire Waves Mobile" 
            className="w-full h-full object-cover"
          />
        ) : (
          <img 
            src={BackgroundGifDesktop}
            alt="Sapphire Waves Desktop" 
            className="w-full h-full object-cover"
          />
        )}
      </div>
      
      {/* Dark overlay to improve text contrast - completely removed */}
      {/* <div className="absolute top-[60px] bottom-[40px] left-0 right-0 bg-black/50"></div> */}
      
      {/* Header Section - Only visible on mobile */}
      <div className={`relative z-10 ${isMobile ? 'block' : 'hidden'} bg-[#08081a] w-full`} 
           style={{ animation: 'fadeIn 1s ease-out forwards' }}>
        {/* Text Logo */}
        <div className="flex justify-center items-center pt-8 pb-2">
          {TextLogo ? (
            <img 
              src={TextLogo} 
              alt="Harrico" 
              className="h-8"
            />
          ) : (
            <h1 className="text-white text-xl tracking-wider font-serif">HARRICO</h1>
          )}
        </div>
        
        {/* Line with logo */}
        <div className="relative w-full flex items-center justify-center py-1">
          {/* Left line */}
          <div className="h-px bg-[#b9a16b] flex-1 mx-4"></div>
          
          {/* Centered emblem logo */}
          <div className="z-10">
            <img 
              src={Logo} 
              alt="Harrico Emblem" 
              className="w-10 h-10 object-contain"
            />
          </div>
          
          {/* Right line */}
          <div className="h-px bg-[#b9a16b] flex-1 mx-4"></div>
        </div>
      </div>
      
      {/* Main Content Container - Centered */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center">
        {/* Logo Container */}
        <div 
          className="bg-black/75 backdrop-blur-sm rounded-full w-56 h-56 md:w-64 md:h-64 flex items-center justify-center mb-6"
          style={{
            animation: 'blueGlow 3s infinite'
          }}
        >
          <img 
            src={Logo}
            alt="Harrico Logo" 
            className="w-48 h-48 md:w-52 md:h-52 object-contain"
            style={{
              animation: 'singleScaleUp 1.2s ease-out forwards'
            }}
          />
        </div>
        
        {/* Harrico Text - Only visible on desktop */}
        <div 
          className={`text-center ${!isMobile ? 'block' : 'hidden'}`}
          style={{ 
            animation: 'fadeInUp 1.5s ease-out forwards',
            animationDelay: '0.5s',
            opacity: 0
          }}
        >
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-2" style={{
            textShadow: '0 0 10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.6)'
          }}>
            HARRICO
          </h1>
          
          <div className="text-[#ffcc66] font-serif text-lg md:text-xl mb-4" style={{
            textShadow: '0 0 8px rgba(0, 0, 0, 0.9)'
          }}>
            CEYLON GEMS & JEWELLERY
          </div>
        </div>
        
        {/* Loading Indicator - For both mobile and desktop */}
        <div className="flex justify-center items-center mt-4 bg-black/60 px-6 py-2 rounded-full"
             style={{ 
               animation: 'fadeInUp 1.5s ease-out forwards',
               animationDelay: '0.5s',
               opacity: 0
             }}>
          <div className="h-0.5 w-12 md:w-20 bg-gradient-to-r from-transparent via-[#ffcc66] to-transparent relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
              style={{
                animation: 'shimmer 1.5s infinite',
                backgroundSize: '200px 100%'
              }}
            ></div>
          </div>
          <div className="text-white mx-3 text-sm font-bold">LOADING</div>
          <div className="h-0.5 w-12 md:w-20 bg-gradient-to-r from-transparent via-[#ffcc66] to-transparent relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
              style={{
                animation: 'shimmer 1.5s infinite',
                backgroundSize: '200px 100%'
              }}
            ></div>
          </div>
        </div>
        
        {/* Since Year - Only visible on desktop */}
        <div 
          className={`mt-8 text-white text-sm font-bold bg-black/60 px-4 py-1 rounded-full ${!isMobile ? 'block' : 'hidden'}`}
          style={{ 
            animation: 'fadeInUp 1.5s ease-out forwards',
            animationDelay: '0.8s',
            opacity: 0,
            textShadow: '0 0 8px rgba(0, 0, 0, 0.6)'
          }}
        >
          SINCE 1971
        </div>
      </div>
      
      {/* Footer Copyright - Only visible on mobile */}
      <div className={`relative z-10 pb-6 pt-2 px-4 ${isMobile ? 'block' : 'hidden'} bg-[#08081a] w-full`}
           style={{ animation: 'fadeIn 1s ease-out forwards' }}>
        <div className="text-center">
          <p className="text-xs text-white">
            © {new Date().getFullYear()} Harrico Ceylon Gems & Jewels. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;