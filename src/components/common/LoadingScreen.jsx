// src/components/common/LoadingScreen.jsx
import React from 'react';
// Import your background GIF - update the path to your actual GIF file
import BackgroundGif from '../../assets/images/sapphire-waves.gif';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* GIF Background - Full screen, crystal clear */}
      <div className="absolute inset-0">
        <img 
          // Replace this with your actual GIF path
          src={BackgroundGif}
          alt="Loading Background" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;