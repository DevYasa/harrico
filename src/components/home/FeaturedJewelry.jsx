// src/components/home/FeaturedJewelry.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedJewelry = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="lg:order-2">
            <div className="sticky top-32">
              <p className="text-amber-800 tracking-[0.3em] text-sm mb-3">HANDCRAFTED</p>
              <h2 className="font-heading text-4xl md:text-5xl mb-4">Jewelry Collection</h2>
              <div className="w-24 h-px bg-amber-800 mb-8"></div>
              <p className="text-gray-600 text-lg mb-8">
                Each piece in our exquisite jewelry collection is meticulously handcrafted 
                by our master artisans. We combine centuries-old techniques with contemporary 
                design to create timeless pieces that showcase the exceptional beauty of 
                our Ceylon gemstones.
              </p>
              <p className="text-gray-600 text-lg mb-12">
                Every creation is a unique masterpiece, designed to be treasured for generations.
              </p>
              <Link 
                to="/collections"
                className="inline-block bg-gradient-to-r from-amber-700 to-amber-800 text-white px-8 py-3 uppercase tracking-wider text-sm border border-amber-700 hover:from-transparent hover:to-transparent hover:text-amber-800 transition-all duration-300"
              >
                Explore Collection
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 lg:order-1">
            <div className="space-y-6">
              <div className="overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1589128777073-263566ae5e4d?q=80&w=600" 
                  alt="Diamond Necklace" 
                  className="w-full h-80 object-cover transform transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=600" 
                  alt="Sapphire Ring" 
                  className="w-full h-64 object-cover transform transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=600" 
                  alt="Ruby Earrings" 
                  className="w-full h-64 object-cover transform transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600" 
                  alt="Gold Bracelet" 
                  className="w-full h-80 object-cover transform transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJewelry;