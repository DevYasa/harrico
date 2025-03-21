// src/pages/CeylonGemsHub.jsx
import React from 'react';
import GemsHub from '../assets/images/gemshub.JPG';

const CeylonGemsHub = () => {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-amber-800 tracking-[0.3em] text-sm mb-3">EXPLORE</p>
          <h1 className="font-heading text-4xl md:text-5xl text-amber-900 mb-4">Ceylon Gems Hub</h1>
          <div className="w-24 h-px bg-amber-800 mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <img 
              src={GemsHub}
              alt="Ceylon Gems Hub Preview" 
              className="w-full h-auto rounded-md shadow-lg mb-8"
            />
            
            <p className="text-lg text-gray-700 mb-8">
              Explore our extensive collection of authentic Ceylon gemstones through our specialized 
              Ceylon Gems Hub platform. This dedicated resource offers detailed information about our 
              gemstone selection, origins, and characteristics.
            </p>
            
            <p className="text-lg text-gray-700 mb-12">
              Discover the beauty and rarity of Ceylon's finest gems with comprehensive guides, 
              high-resolution imagery, and expert insights from our gemologists.
            </p>
            
            <a 
              href="https://devyasa.github.io/ceylongemshub/#/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-gradient-to-r from-amber-700 to-amber-800 text-white px-8 py-3 uppercase tracking-wider text-sm border border-amber-700 hover:from-transparent hover:to-transparent hover:text-amber-800 transition-all duration-300"
            >
              Visit Ceylon Gems Hub
              <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-amber-50 p-6 rounded-sm shadow-sm">
              <h3 className="font-heading text-xl text-amber-900 mb-3">Extensive Catalog</h3>
              <p className="text-gray-700">
                Browse our comprehensive collection of Ceylon sapphires, rubies, emeralds, and other precious gemstones.
              </p>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-sm shadow-sm">
              <h3 className="font-heading text-xl text-amber-900 mb-3">Detailed Information</h3>
              <p className="text-gray-700">
                Access expert gemological details, origin information, and quality characteristics for each stone.
              </p>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-sm shadow-sm">
              <h3 className="font-heading text-xl text-amber-900 mb-3">Visual Gallery</h3>
              <p className="text-gray-700">
                View high-resolution images showcasing the exceptional color, clarity, and brilliance of our gemstones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CeylonGemsHub;