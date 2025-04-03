// src/components/common/LoadingScreen.jsx
import React, { useEffect } from 'react';
import Logo from '../../assets/images/logo.png';
import BackgroundGif from '../../assets/images/sapphire-waves1.gif';

const LoadingScreen = () => {
  useEffect(() => {
    // Add keyframe animations just for the logo shine effects
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
      {/* Crystal Clear GIF Background */}
      <div className="absolute inset-0">
        <img 
          src={BackgroundGif}
          alt="Sapphire Waves" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Single Logo with blue shining effect */}
      <div className="relative z-10">
        <div 
          className="bg-black/75 backdrop-blur-sm rounded-full w-48 h-48 md:w-64 md:h-64 flex items-center justify-center"
          style={{
            animation: 'blueGlow 3s infinite'
          }}
        >
          <img 
            src={Logo}
            alt="Harrico Logo" 
            className="w-40 h-40 md:w-52 md:h-52 object-contain"
            style={{
              animation: 'singleScaleUp 1.2s ease-out forwards'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;