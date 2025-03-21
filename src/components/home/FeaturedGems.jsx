// src/components/home/FeaturedGems.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import RoyalBlueSapphire from '../../assets/images/gems/sapphire/royal-blue-sapphire.jpg';
import OvalCutSapphire from '../../assets/images/gems/sapphire/oval-cut-sapphire.jpg';
import OvalRuby from '../../assets/images/gems/ruby/oval-ruby.jpg';
import EmeraldCut from '../../assets/images/gems/emerald/emerald-cut.jpg';


const gemsData = [
  {
    id: 1,
    name: "Royal Blue Sapphire",
    type: "Ceylon Sapphire",
    price: 4800,
    imageUrl: RoyalBlueSapphire
  },
  {
    id: 1,
    name: "Oval Cut Sapphire",
    type: "Ceylon Sapphire",
    price: 3900,
    imageUrl: OvalCutSapphire
  },
  {
    id: 2,
    name: "Oval Ruby",
    type: "Ceylon Ruby",
    price: 7500,
    imageUrl: OvalRuby
  },
  {
    id: 3,
    name: "Emerald Cut",
    type: "Ceylon Emerald",
    price: 4900,
    imageUrl: EmeraldCut
  }
];

const FeaturedGems = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-amber-800 tracking-[0.3em] text-sm mb-3">COLLECTION</p>
          <h2 className="font-heading text-4xl md:text-5xl mb-4 text-amber-900">Exquisite Ceylon Gems</h2>
          <div className="w-24 h-px bg-amber-800 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Discover our curated selection of premium quality, ethically sourced Ceylon gemstones,
            renowned worldwide for their exceptional color, clarity and brilliance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {gemsData.map((gem) => (
            <div key={gem.id} className="group bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <Link to={`/collections/${gem.id}`} className="block">
                <div className="relative overflow-hidden">
                  <img 
                    src={gem.imageUrl} 
                    alt={gem.name}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block bg-white/80 text-amber-900 px-4 py-2 text-sm tracking-wider uppercase font-medium">
                        View Details
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-xl text-amber-900 mb-1">{gem.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">{gem.type}</p>
                  <p className="text-amber-800 font-medium">${gem.price.toLocaleString()}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link 
            to="/collections"
            className="inline-block bg-gradient-to-r from-amber-700 to-amber-800 text-white px-8 py-3 uppercase tracking-wider text-sm border border-amber-700 hover:from-transparent hover:to-transparent hover:text-amber-800 transition-all duration-300"
          >
            View All Gemstones
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGems;