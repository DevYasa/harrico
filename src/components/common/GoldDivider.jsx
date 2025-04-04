// src/components/common/GoldDivider.jsx
import React from 'react';

const GoldDivider = () => {
  return (
    <div className="w-full py-8 md:py-12 flex justify-center items-center">
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-[#b9a16b] to-transparent w-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-[#b9a16b] flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-[#b9a16b]"></div>
        </div>
      </div>
    </div>
  );
};

export default GoldDivider;