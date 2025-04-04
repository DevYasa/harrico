// src/pages/EnhancedCollections.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LuxurySectionTitle from '../components/common/SectionTitle';
import LuxurySectionDivider from '../components/common/GoldDivider';

// Import sample images (you'll need to replace these with your actual gem images)
import BlueSapphireImg from '../assets/images/gems/sapphire/royal-blue-sapphire.jpg';
import EmeraldImg from '../assets/images/gems/emerald/emerald-cut.jpg';
import RubyImg from '../assets/images/gems/ruby/oval-ruby.jpg';
import DiamondImg from '../assets/images/collections/diamond-jewelry.png';
import YellowSapphireImg from '../assets/images/gems/sapphire/yellow-sapphire.jpg';
import PinkSapphireImg from '../assets/images/gems/sapphire/pink-sapphire.jpg';

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState('precious');
  const [activeSubcategory, setActiveSubcategory] = useState('all');
  
  // Define categories & subcategories
  const categories = [
    { id: 'precious', label: 'Precious Gems' },
    { id: 'semi-precious', label: 'Semi-Precious Gems' },
    { id: 'jewelry', label: 'Fine Jewelry' },
    { id: 'ceylon-products', label: 'Ceylon Products' },
    { id: 'services', label: 'Services' }
  ];
  
  // Subcategories for each main category
  const subcategories = {
    precious: [
      { id: 'all', label: 'All Precious Gems' },
      { id: 'sapphire', label: 'Sapphires' },
      { id: 'ruby', label: 'Ruby' },
      { id: 'emerald', label: 'Emerald' },
      { id: 'diamond', label: 'Diamond' },
      { id: 'other-precious', label: 'Other Precious' }
    ],
    'semi-precious': [
      { id: 'all', label: 'All Semi-Precious' },
      { id: 'topaz', label: 'Topaz' },
      { id: 'aquamarine', label: 'Aquamarine' },
      { id: 'garnet', label: 'Garnet' },
      { id: 'moonstone', label: 'Moonstone' },
      { id: 'other-semi', label: 'Other Semi-Precious' }
    ],
    jewelry: [
      { id: 'all', label: 'All Jewelry' },
      { id: '22kt', label: '22kt Gold' },
      { id: '18kt', label: '18kt Gold' },
      { id: '14kt', label: '14kt Gold' },
      { id: '9kt', label: '9kt Gold' },
      { id: 'platinum', label: 'Platinum' },
      { id: 'silver', label: 'Silver Palladium' }
    ],
    'ceylon-products': [
      { id: 'all', label: 'All Ceylon Products' },
      { id: 'tea', label: 'Ceylon Tea' },
      { id: 'spices', label: 'Ceylon Spices' },
      { id: 'oils', label: 'Ceylon Oils' }
    ],
    services: [
      { id: 'all', label: 'All Services' },
      { id: 'custom-design', label: 'Custom Jewelry Design' },
      { id: 'gem-cutting', label: 'Gemstone Cutting' },
      { id: 'casting', label: 'Jewelry Casting' },
      { id: 'manufacturing', label: 'Manufacturing' },
      { id: 'gim', label: 'GIM Certification' }
    ]
  };
  
  // Collection items data
  const preciousGems = [
    {
      id: 1,
      name: "Royal Blue Sapphire",
      category: "sapphire",
      description: "Exquisite royal blue Ceylon sapphire with exceptional clarity and brilliance.",
      image: BlueSapphireImg
    },
    {
      id: 2,
      name: "Colombian Emerald",
      category: "emerald",
      description: "Vibrant green emerald with remarkable transparency and garden inclusions.",
      image: EmeraldImg
    },
    {
      id: 3,
      name: "Burma Ruby",
      category: "ruby",
      description: "Rich red Burma ruby with pigeon blood color and exceptional brilliance.",
      image: RubyImg
    },
    {
      id: 4,
      name: "Yellow Sapphire",
      category: "sapphire",
      description: "Radiant yellow Ceylon sapphire with excellent clarity and vibrant color.",
      image: YellowSapphireImg
    },
    {
      id: 5,
      name: "Pink Sapphire",
      category: "sapphire",
      description: "Delicate pink Ceylon sapphire with exceptional clarity and beautiful hue.",
      image: PinkSapphireImg
    },
    {
      id: 6,
      name: "VVS Diamond",
      category: "diamond",
      description: "Brilliant cut diamond with VVS clarity and exceptional fire and brilliance.",
      image: DiamondImg
    }
  ];

  const semiPreciousGems = [
    {
      id: 7,
      name: "Blue Topaz",
      category: "topaz",
      description: "Brilliant blue topaz with exceptional clarity and vibrant color.",
      image: "https://via.placeholder.com/400x300/4A90E2/FFFFFF?text=Blue+Topaz"
    },
    {
      id: 8,
      name: "Citrine",
      category: "other-semi",
      description: "Warm golden citrine with excellent transparency and sunny glow.",
      image: "https://via.placeholder.com/400x300/F5A623/FFFFFF?text=Citrine"
    },
    {
      id: 9,
      name: "Aquamarine",
      category: "aquamarine",
      description: "Sea-blue aquamarine with excellent clarity and serene color.",
      image: "https://via.placeholder.com/400x300/50E3C2/FFFFFF?text=Aquamarine"
    },
    {
      id: 10,
      name: "Garnet",
      category: "garnet",
      description: "Deep red garnet with excellent clarity and rich color.",
      image: "https://via.placeholder.com/400x300/D0021B/FFFFFF?text=Garnet"
    },
    {
      id: 11,
      name: "Rainbow Moonstone",
      category: "moonstone",
      description: "Luminous moonstone with blue adularescence and excellent clarity.",
      image: "https://via.placeholder.com/400x300/DDDDDD/333333?text=Moonstone"
    }
  ];

  const jewelryItems = [
    {
      id: 12,
      name: "22kt Gold Necklace",
      category: "22kt",
      description: "Handcrafted 22kt gold necklace with traditional design elements.",
      image: "https://via.placeholder.com/400x300/FFD700/FFFFFF?text=22kt+Gold+Necklace"
    },
    {
      id: 13,
      name: "18kt White Gold Diamond Ring",
      category: "18kt",
      description: "Elegant 18kt white gold ring featuring a brilliant-cut diamond centerpiece.",
      image: "https://via.placeholder.com/400x300/F5F5F5/333333?text=White+Gold+Ring"
    },
    {
      id: 14,
      name: "Platinum Sapphire Earrings",
      category: "platinum",
      description: "Stunning platinum earrings featuring Ceylon blue sapphires.",
      image: "https://via.placeholder.com/400x300/E5E4E2/333333?text=Platinum+Earrings"
    }
  ];

  const ceylonProducts = [
    {
      id: 15,
      name: "Premium Ceylon Tea",
      category: "tea",
      description: "Finest Ceylon black tea with rich aroma and exquisite flavor.",
      image: "https://via.placeholder.com/400x300/8B4513/FFFFFF?text=Ceylon+Tea"
    },
    {
      id: 16,
      name: "Pure Ceylon Cinnamon",
      category: "spices",
      description: "Genuine Ceylon cinnamon sticks with delicate flavor and aroma.",
      image: "https://via.placeholder.com/400x300/D2691E/FFFFFF?text=Ceylon+Cinnamon"
    }
  ];

  const services = [
    {
      id: 17,
      name: "Custom Jewelry Design",
      category: "custom-design",
      description: "Bespoke jewelry creations tailored to your exact specifications.",
      image: "https://via.placeholder.com/400x300/333333/FFFFFF?text=Custom+Design"
    },
    {
      id: 18,
      name: "GIM Certification",
      category: "gim",
      description: "Professional gemstone certification and authentication services.",
      image: "https://via.placeholder.com/400x300/4A4A4A/FFFFFF?text=GIM+Certification"
    }
  ];

  // Combine all collections
  const allCollections = {
    precious: preciousGems,
    'semi-precious': semiPreciousGems,
    jewelry: jewelryItems,
    'ceylon-products': ceylonProducts,
    services: services
  };

  // Filter items based on selected category and subcategory
  const getFilteredItems = () => {
    const categoryItems = allCollections[activeCategory] || [];
    
    if (activeSubcategory === 'all') {
      return categoryItems;
    }
    
    return categoryItems.filter(item => item.category === activeSubcategory);
  };

  const filteredItems = getFilteredItems();

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <LuxurySectionTitle 
          subtitle="EXQUISITE SELECTION"
          title="Our Collections"
          description="Discover our curated selection of precious gems, fine jewelry, and authentic Ceylon products, each selected with uncompromising attention to quality, rarity, and beauty."
          alignment="center"
          color="amber"
          size="default"
          animation="fade"
          dividerStyle="gem"
        />
        
        {/* Main Categories - Gold pill buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-14 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setActiveSubcategory('all');
              }}
              className={`relative px-6 py-2.5 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300 overflow-hidden group ${
                activeCategory === category.id
                  ? 'text-white shadow-lg'
                  : 'text-amber-900 hover:text-amber-700 border border-amber-200'
              }`}
            >
              {/* Gold gradient background that appears when active */}
              <span
                className={`absolute inset-0 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-amber-700 to-amber-500 opacity-100'
                    : 'bg-gradient-to-r from-amber-700 to-amber-500 opacity-0 group-hover:opacity-10'
                } transition-opacity duration-300`}
              ></span>
              
              {/* Button text */}
              <span className="relative z-10">{category.label}</span>
              
              {/* Subtle animation dot that appears when active */}
              {activeCategory === category.id && (
                <span className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full"></span>
              )}
            </button>
          ))}
        </div>
        
        {/* Subcategories - Elegant tabs */}
        <div className="flex flex-wrap justify-center gap-x-1 lg:gap-x-2 mb-16 border-b border-amber-100">
          {subcategories[activeCategory]?.map((subcategory) => (
            <button
              key={subcategory.id}
              onClick={() => setActiveSubcategory(subcategory.id)}
              className={`px-4 py-3 text-sm transition-all duration-300 relative ${
                activeSubcategory === subcategory.id
                  ? 'text-amber-700 font-medium'
                  : 'text-gray-500 hover:text-amber-700'
              }`}
            >
              {subcategory.label}
              
              {/* Underline indicator for active tab */}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-500 transform transition-transform origin-left duration-300 ${
                  activeSubcategory === subcategory.id ? 'scale-x-100' : 'scale-x-0'
                }`}
              ></span>
            </button>
          ))}
        </div>
        
        {/* Collections Display */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="group bg-white shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden relative"
              >
                {/* Product Link */}
                <Link to={`/collections/${item.id}`} className="block">
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    
                    {/* Elegant Gold Overlay Gradient on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-amber-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* "View Details" button that appears on hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block bg-white/80 text-amber-900 px-4 py-2 text-sm tracking-wider uppercase font-medium w-full text-center">
                        View Details
                      </span>
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-6 border-t border-amber-50">
                    <h3 className="font-heading text-xl text-amber-900 mb-2">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-amber-800 text-sm uppercase tracking-wider">Explore →</p>
                      
                      {/* Decorative gold dots */}
                      <div className="flex space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-300"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No items found in this category.</p>
          </div>
        )}
        
        {/* Divider before CTA */}
        <LuxurySectionDivider type="line-with-gem" color="amber" />
        
        {/* Custom Order CTA */}
        <div className="bg-amber-50 p-10 rounded-sm shadow-sm text-center max-w-4xl mx-auto mt-16">
          <h2 className="font-heading text-2xl text-amber-900 mb-4">Custom Jewelry Design</h2>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            Our master artisans can create bespoke jewelry pieces tailored to your exact specifications.
            From initial concept to finished masterpiece, we'll work closely with you to bring your vision to life.
            Custom orders are delivered within 3 weeks.
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