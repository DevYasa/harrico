// src/components/common/LuxurySectionDivider.jsx
import React from 'react';

// This component creates elegant dividers between sections
// You can customize it with different styles and animations
// Usage: <LuxurySectionDivider type="wave" color="amber" />

const LuxurySectionDivider = ({ type = 'line', color = 'amber', className = '' }) => {
  
  // Helper to generate the correct color gradient based on the color prop
  const getGradient = (color) => {
    const colors = {
      amber: 'from-amber-300 via-amber-500 to-amber-300',
      gold: 'from-yellow-300 via-amber-600 to-yellow-300', 
      white: 'from-white/40 via-white/80 to-white/40',
      dark: 'from-gray-700 via-gray-900 to-gray-700'
    };
    
    return colors[color] || colors.amber;
  };
  
  // Render different divider types
  const renderDivider = () => {
    switch(type) {
      case 'wave':
        return (
          <div className={`relative h-24 ${className}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="absolute w-full h-full">
              <path 
                fill="currentColor" 
                fillOpacity="1" 
                d="M0,96L48,85.3C96,75,192,53,288,64C384,75,480,117,576,117.3C672,117,768,75,864,64C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                className={`text-white`}
              ></path>
            </svg>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center bg-gradient-to-r from-amber-400 to-amber-600 shadow-lg">
                <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
              </div>
            </div>
          </div>
        );
        
      case 'dots':
        return (
          <div className={`flex justify-center items-center py-12 ${className}`}>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 rounded-full bg-amber-300 animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse animation-delay-300"></div>
              <div className="w-4 h-4 rounded-full bg-amber-500 animate-pulse animation-delay-600"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse animation-delay-300"></div>
              <div className="w-2 h-2 rounded-full bg-amber-300 animate-pulse"></div>
            </div>
          </div>
        );
        
      case 'diamond':
        return (
          <div className={`flex justify-center items-center py-10 ${className}`}>
            <div className="flex items-center">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-amber-400"></div>
              <div className="relative mx-4">
                <div className="w-8 h-8 rotate-45 bg-gradient-to-tr from-amber-400 to-amber-600 border border-amber-200 shadow-md"></div>
                <div className="absolute inset-0 w-8 h-8 rotate-45 bg-amber-500 opacity-50 animate-ping"></div>
              </div>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-amber-400"></div>
            </div>
          </div>
        );
      
      case 'line-with-gem':
        return (
          <div className={`flex justify-center items-center py-8 ${className}`}>
            <div className="relative">
              <div className={`h-px w-64 bg-gradient-to-r ${getGradient(color)}`}></div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full p-1 bg-white shadow-md">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-300 to-amber-600 animate-pulse"></div>
              </div>
            </div>
          </div>
        );
        
      case 'double-line':
        return (
          <div className={`flex justify-center items-center py-8 ${className}`}>
            <div className="relative w-full max-w-md">
              <div className={`h-px w-full bg-gradient-to-r ${getGradient(color)} mb-2`}></div>
              <div className={`h-px w-full bg-gradient-to-r ${getGradient(color)}`}></div>
            </div>
          </div>
        );
      
      case 'ornate':
        return (
          <div className={`flex justify-center items-center py-10 ${className}`}>
            <div className="flex items-center">
              <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent to-amber-400"></div>
              <div className="mx-4 text-amber-500">❖</div>
              <div className="h-px w-16 md:w-32 bg-gradient-to-l from-transparent to-amber-400"></div>
            </div>
          </div>
        );
        
      case 'crown':
        return (
          <div className={`flex justify-center items-center py-10 ${className}`}>
            <div className="flex items-center">
              <div className="h-px w-20 md:w-40 bg-gradient-to-r from-transparent to-amber-400"></div>
              <div className="mx-4">
                <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-500">
                  <path d="M16 0L20 8L32 4L28 16H4L0 4L12 8L16 0Z" fill="currentColor" />
                  <rect x="4" y="20" width="24" height="4" fill="currentColor" />
                </svg>
              </div>
              <div className="h-px w-20 md:w-40 bg-gradient-to-l from-transparent to-amber-400"></div>
            </div>
          </div>
        );
        
      default: // Simple line
        return (
          <div className={`py-6 ${className}`}>
            <div className={`h-px w-full bg-gradient-to-r ${getGradient(color)}`}></div>
          </div>
        );
    }
  };
  
  return renderDivider();
};

export default LuxurySectionDivider;