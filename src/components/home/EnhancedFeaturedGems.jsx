// src/components/home/EnhancedFeaturedGems.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import LuxurySectionTitle from '../common/LuxurySectionTitle';
import LuxuryProductCard from '../products/LuxuryProductCard';
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
    imageUrl: RoyalBlueSapphire,
    color: "bg-blue-900"
  },
  {
    id: 2,
    name: "Oval Cut Sapphire",
    type: "Ceylon Sapphire",
    price: 3900,
    imageUrl: OvalCutSapphire,
    color: "bg-blue-700"
  },
  {
    id: 3,
    name: "Oval Ruby",
    type: "Ceylon Ruby",
    price: 7500,
    imageUrl: OvalRuby,
    color: "bg-red-700"
  },
  {
    id: 4,
    name: "Emerald Cut",
    type: "Ceylon Emerald",
    price: 4900,
    imageUrl: EmeraldCut,
    color: "bg-emerald-700"
  }
];

const EnhancedFeaturedGems = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <LuxurySectionTitle 
          subtitle="EXCEPTIONAL COLLECTION"
          title="Exquisite Ceylon Gems"
          description="Discover our curated selection of premium quality, ethically sourced Ceylon gemstones, renowned worldwide for their exceptional color, clarity and brilliance."
          alignment="center"
          color="amber"
          size="default"
          animation="fade"
          dividerStyle="gem"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
          {gemsData.map((gem, index) => (
            <LuxuryProductCard 
              key={gem.id}
              product={gem}
              variant="default"
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-20">
          <Link 
            to="/collections"
            className="inline-block bg-amber-50 text-amber-900 border border-amber-400 px-10 py-4 uppercase tracking-widest text-sm font-medium hover:bg-amber-900 hover:text-white hover:border-amber-900 transition-all duration-500 shadow-sm relative overflow-hidden group"
          >
            <span className="relative z-10">View All Gemstones</span>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-800 to-amber-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EnhancedFeaturedGems;