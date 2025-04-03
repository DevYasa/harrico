// src/components/common/LoadingScreen.jsx
import React, { useEffect } from 'react';
import Logo from '../../assets/images/logo.png';
import SapphireBg from '../../assets/images/bg-load.jpg'; // Update the path to your new sapphire image

const LoadingScreen = () => {
  useEffect(() => {
    // Add keyframe animations
    const animations = document.createElement('style');
    animations.textContent = `
      @keyframes rotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      @keyframes pulse {
        0% { opacity: 0.7; }
        50% { opacity: 1; }
        100% { opacity: 0.7; }
      }
      
      @keyframes scaleUp {
        0% { transform: scale(0.2); opacity: 0; }
        60% { transform: scale(1.1); opacity: 1; }
        100% { transform: scale(1); opacity: 1; }
      }

      @keyframes glow {
        0% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
        50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.5); }
        100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
      }
    `;
    
    document.head.appendChild(animations);
    
    return () => {
      // Clean up the style when component unmounts
      if (document.head.contains(animations)) {
        document.head.removeChild(animations);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden">
      {/* Full background sapphire image */}
      <div className="absolute inset-0">
        <img 
          src={SapphireBg}
          alt="Sapphire Background" 
          className="w-full h-full object-cover"
        />
        {/* Optional dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="flex flex-col items-center relative z-10">
        {/* Logo with rotating border - keeping your existing circle borders */}
        <div className="relative w-40 h-40 md:w-48 md:h-48 mb-8">
          {/* Outer rotating circle border */}
          <div 
            className="absolute inset-0 rounded-full border-4 border-amber-600 border-t-transparent"
            style={{ 
              animation: 'rotate 1.5s linear infinite'
            }}
          ></div>
          
          {/* Inner rotating circle border (opposite direction) */}
          <div 
            className="absolute inset-4 rounded-full border-2 border-amber-400 border-b-transparent"
            style={{ 
              animation: 'rotate 3s linear infinite reverse'
            }}
          ></div>
          
          {/* Logo container - stays still but scales up on load */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="bg-black/80 backdrop-blur-sm rounded-full w-32 h-32 flex items-center justify-center"
              style={{
                animation: 'scaleUp 1.2s ease-out forwards, glow 2s infinite'
              }}
            >
              {/* Logo with scale up animation but NO rotation */}
              <img 
                src={Logo}
                alt="Harrico Logo" 
                className="w-30 h-30 object-contain"
                style={{
                  animation: 'scaleUp 1.2s ease-out forwards'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;