// src/components/home/EnhancedFeaturedJewelry.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const EnhancedFeaturedJewelry = () => {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -left-32 top-32 w-64 h-64 bg-amber-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -right-32 bottom-32 w-64 h-64 bg-amber-100 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content - Right side on desktop, top on mobile */}
          <div className="lg:order-2 order-1">
            <div className="max-w-xl">
              <p className="text-amber-800 tracking-[0.5em] text-sm mb-5 font-medium">HANDCRAFTED EXCELLENCE</p>
              <h2 className="font-heading text-4xl md:text-5xl mb-8 text-amber-900 leading-tight">Jewelry Collection</h2>
              
              <div className="flex items-center mb-10">
                <div className="w-20 h-px bg-amber-300"></div>
                <div className="w-4 h-4 mx-3 rounded-full border-2 border-amber-400 bg-amber-200"></div>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Each piece in our exquisite jewelry collection is meticulously handcrafted 
                by our master artisans. We combine centuries-old techniques with contemporary 
                design to create timeless pieces that showcase the exceptional beauty of 
                our Ceylon gemstones.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-12">
                Every creation is a unique masterpiece, designed to be treasured for generations.
                We source only the finest gemstones, personally selected for their exceptional
                color, clarity, and brilliance.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-amber-900 mb-1">Exquisite Craftsmanship</h3>
                    <p className="text-gray-600">Hand-finished by master jewelers with decades of experience</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-amber-900 mb-1">Ethically Sourced</h3>
                    <p className="text-gray-600">Gemstones procured through responsible and sustainable practices</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-amber-900 mb-1">Bespoke Design</h3>
                    <p className="text-gray-600">Custom creations designed to your exact specifications</p>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/collections"
                className="inline-block bg-amber-900 text-white px-10 py-4 uppercase tracking-widest text-sm font-medium hover:bg-amber-800 transition-all duration-300 shadow-md relative overflow-hidden group"
              >
                <span className="relative z-10">Explore Collection</span>
                <span className="absolute inset-0 bg-gradient-to-r from-amber-800 to-amber-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
              </Link>
            </div>
          </div>
          
          {/* Images Gallery - Left side on desktop, bottom on mobile - USING ORIGINAL LAYOUT */}
          <div className="lg:order-1 order-2">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="overflow-hidden rounded-md shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1589128777073-263566ae5e4d?q=80&w=600" 
                    alt="Diamond Necklace" 
                    className="w-full h-80 object-cover transform transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-md shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=600" 
                    alt="Sapphire Ring" 
                    className="w-full h-64 object-cover transform transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="overflow-hidden rounded-md shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=600" 
                    alt="Ruby Earrings" 
                    className="w-full h-64 object-cover transform transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-md shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300">
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
      </div>
    </section>
  );
};

export default EnhancedFeaturedJewelry;