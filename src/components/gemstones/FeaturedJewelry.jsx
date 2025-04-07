// src/components/gemstones/FeaturedJewelry.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';

const FeaturedJewelry = ({ title, subtitle, items, viewAllLink, viewAllText }) => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-[#f8f8f8]">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title={title} 
          subtitle={subtitle} 
          alignment="center"
          maxWidth="2xl"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
          {items.map((item) => (
            <Link 
              key={item.id}
              to={item.link}
              className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 md:h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-serif mb-2">{item.name}</h3>
                <p className="text-gray-700 mb-4 text-sm line-clamp-2">{item.description}</p>
                <span className="text-sm text-[#b9a16b] tracking-wider uppercase inline-flex items-center">
                  VIEW DETAILS <span className="ml-1">›</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 md:mt-12 text-center">
          <Link
            to={viewAllLink}
            className="inline-block border border-[#b9a16b] text-[#b9a16b] px-6 py-2 md:px-8 md:py-2 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300"
          >
            {viewAllText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJewelry;