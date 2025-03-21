import React, { useEffect } from 'react';
import Logo from '../../assets/images/logo1.png';

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
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="flex flex-col items-center">
        {/* Logo with rotating border */}
        <div className="relative w-40 h-40 md:w-48 md:h-48 mb-8">
          {/* Simple rotating circle border */}
          <div 
            className="absolute inset-0 rounded-full border-4 border-amber-600 border-t-transparent"
            style={{ 
              animation: 'rotate 1.5s linear infinite'
            }}
          ></div>
          
          {/* Logo container - stays still but scales up on load */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="bg-black rounded-full w-32 h-32 flex items-center justify-center"
              style={{
                animation: 'scaleUp 1.2s ease-out forwards'
              }}
            >
              {/* Logo with scale up animation */}
              <img 
                src={Logo}
                alt="Harrico Logo" 
                className="w-24 h-24 object-contain"
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