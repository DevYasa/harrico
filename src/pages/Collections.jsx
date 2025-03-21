// src/pages/Collections.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SapphireCollection from '../assets/images/collections/sapphire-collection.png';
import RubyCollection from '../assets/images/collections/ruby-collection.png';
import EmeraldCollection from '../assets/images/collections/emerald-collection.png';
import DiamondJewelry from '../assets/images/collections/diamond-jewelry.png';
import SapphireJewelry from '../assets/images/collections/sapphire-jewelry.jpg';
import BridalCollection from '../assets/images/collections/bridal-collection.jpg';

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Sample collection data
  const collections = [
    {
      id: 1,
      name: "Sapphire Collection",
      category: "gems",
      description: "Exquisite blue sapphires from Ceylon, renowned for their exceptional color and clarity.",
      image: SapphireCollection
    },
    {
      id: 2,
      name: "Ruby Treasures",
      category: "gems",
      description: "Vibrant red rubies that capture the essence of passion and luxury.",
      image: RubyCollection
    },
    {
      id: 3,
      name: "Emerald Elegance",
      category: "gems",
      description: "Rich green emeralds that embody natural beauty and timeless sophistication.",
      image: EmeraldCollection
    },
    {
      id: 4,
      name: "Diamond Classics",
      category: "jewelry",
      description: "Timeless diamond jewelry pieces that celebrate life's most precious moments.",
      image: DiamondJewelry
    },
    {
      id: 5,
      name: "Sapphire Jewelry",
      category: "jewelry",
      description: "Contemporary designs featuring Ceylon's finest blue sapphires.",
      image: SapphireJewelry
    },
    {
      id: 6,
      name: "Bridal Collection",
      category: "jewelry",
      description: "Exquisite pieces designed to make your special day even more memorable.",
      image: BridalCollection
    }
  ];
  
  const filteredCollections = activeCategory === 'all' 
    ? collections 
    : collections.filter(item => item.category === activeCategory);

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-amber-800 tracking-[0.3em] text-sm mb-3">EXPLORE</p>
          <h1 className="font-heading text-4xl md:text-5xl text-amber-900 mb-4">Our Collections</h1>
          <div className="w-24 h-px bg-amber-800 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover our exquisite collection of Ceylon gems and fine jewelry, each piece carefully selected 
            and crafted to showcase the exceptional beauty of nature's most precious treasures.
          </p>
        </div>
        
        {/* Category filters */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex border border-amber-800 rounded-sm overflow-hidden">
            <button 
              className={`px-6 py-2 text-sm uppercase tracking-wider transition-colors duration-300 ${
                activeCategory === 'all' 
                  ? 'bg-amber-800 text-white' 
                  : 'bg-white text-amber-800 hover:bg-amber-50'
              }`}
              onClick={() => setActiveCategory('all')}
            >
              All
            </button>
            <button 
              className={`px-6 py-2 text-sm uppercase tracking-wider transition-colors duration-300 ${
                activeCategory === 'gems' 
                  ? 'bg-amber-800 text-white' 
                  : 'bg-white text-amber-800 hover:bg-amber-50'
              }`}
              onClick={() => setActiveCategory('gems')}
            >
              Gems
            </button>
            <button 
              className={`px-6 py-2 text-sm uppercase tracking-wider transition-colors duration-300 ${
                activeCategory === 'jewelry' 
                  ? 'bg-amber-800 text-white' 
                  : 'bg-white text-amber-800 hover:bg-amber-50'
              }`}
              onClick={() => setActiveCategory('jewelry')}
            >
              Jewelry
            </button>
          </div>
        </div>
        
        {/* Collections grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredCollections.map(collection => (
            <div key={collection.id} className="group bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <Link to={`/collections/${collection.id}`} className="block">
                <div className="relative overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.name}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block bg-white/80 text-amber-900 px-4 py-2 text-sm tracking-wider uppercase font-medium">
                        View Collection
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl text-amber-900 mb-2">{collection.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{collection.description}</p>
                  <p className="text-amber-800 text-sm uppercase tracking-wider">Explore →</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        {/* Custom inquiry CTA */}
        <div className="bg-amber-50 p-8 rounded-sm shadow-sm text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl text-amber-900 mb-4">Looking for Something Special?</h2>
          <p className="text-gray-700 mb-6">
            Our team specializes in creating bespoke pieces tailored to your preferences. Contact us to 
            discuss your vision and let us craft a unique treasure just for you.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-gradient-to-r from-amber-700 to-amber-800 text-white px-8 py-3 uppercase tracking-wider text-sm border border-amber-700 hover:from-transparent hover:to-transparent hover:text-amber-800 transition-all duration-300"
          >
            Request Custom Design
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Collections;