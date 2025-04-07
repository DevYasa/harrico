// src/components/gemstones/CustomJewelryCTA.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CustomJewelryCTA = ({ title, description }) => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-[#08081a] text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-4 md:mb-6">{title}</h2>
        <p className="max-w-2xl mx-auto mb-6 md:mb-10">
          {description}
        </p>
        <Link 
          to="/custom-designs" 
          className="inline-block border border-[#b9a16b] text-[#b9a16b] px-8 py-2 md:px-12 md:py-3 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300"
        >
          START YOUR DESIGN
        </Link>
      </div>
    </section>
  );
};

export default CustomJewelryCTA;