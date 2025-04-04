// src/components/home/SalonSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SalonImage from '../../assets/images/home/bg11.jpeg';

const SalonSection = () => {
  return (
    <section className="relative py-16 md:py-24 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <img 
          src={SalonImage} 
          alt="Harrico Salon" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="px-6 md:px-16 py-12 max-w-lg">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Find My Harrico</h2>
          <p className="text-base text-gray-700 mb-10">
            We look forward to welcoming you to the extraordinary world of Harrico, 
            where our legacy becomes yours.
          </p>
          <Link
            to="/contact"
            className="inline-block border border-[#cbb472] text-[#b9a16b] px-12 py-3 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300"
          >
            FIND A SALON
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SalonSection;