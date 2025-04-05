// src/pages/Collections.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/common/SectionTitle';
import GoldDivider from '../components/common/GoldDivider';
import CollectionsHeroImage from '..//assets/images/hero-bg.gif'; // Add this image
// import PreciousGemstonesImage from '..//assets/images/collections/precious-gemstones.gif';
// import SemiPreciousGemstonesImage from '..//assets/images/collections/semi-precious-gemstones.gif';
// import GoldJewelryImage from '..//assets/images/collections/gold-jewelry.gif';
// import PlatinumJewelryImage from '..//assets/images/collections/platinum-jewelry.gif';
// import SilverPalladiumImage from '..//assets/images/collections/silver-palladium.gif';
// import CustomDesignsImage from '..//assets/images/collections/custom-designs.gif';
import CeylonBlueImage from '..//assets/images/collections/featured/ceylon-blue.gif';
import EmeraldEleganceImage from '..//assets/images/collections/featured/emerald-elegance.gif';
import RubyRomanceImage from '..//assets/images/collections/featured/ruby-romance.gif';
// import GoldDividerImage from '..//assets/images/collections/gold-divider.gif'; // Add this image


const Collections = () => {
  // Main collection categories
  const mainCategories = [
    {
      id: 'precious-gemstones',
      title: 'Precious Gemstones',
      description: 'The rarest and most valuable gemstones sourced directly from our Ceylon mines.',
      image: '/assets/images/collections/precious-gemstones.jpg', // Add this image
      link: '/collections/precious-gemstones'
    },
    {
      id: 'semi-precious-gemstones',
      title: 'Semi-Precious Gemstones',
      description: 'Beautiful and distinctive gemstones with unique characteristics and compelling value.',
      image: '/assets/images/collections/semi-precious-gemstones.jpg', // Add this image
      link: '/collections/semi-precious-gemstones'
    },
    {
      id: 'gold-jewelry',
      title: 'Gold Jewelry',
      description: 'Exquisite pieces featuring our finest gemstones set in 22kt, 18kt, 14kt, and 9kt gold.',
      image: '/assets/images/collections/gold-jewelry.jpg', // Add this image
      link: '/collections/gold-jewelry'
    },
    {
      id: 'platinum-jewelry',
      title: 'Platinum Jewelry',
      description: 'The ultimate luxury metal paired with our exceptional Ceylon gemstones.',
      image: '/assets/images/collections/platinum-jewelry.jpg', // Add this image
      link: '/collections/platinum-jewelry'
    },
    {
      id: 'silver-palladium',
      title: 'Silver Palladium Jewelry',
      description: 'Contemporary designs featuring this modern, durable and beautiful metal alloy.',
      image: '/assets/images/collections/silver-palladium.jpg', // Add this image
      link: '/collections/silver-palladium'
    },
    {
      id: 'custom-designs',
      title: 'Custom Designs',
      description: 'Bespoke jewelry creations tailored to your vision and delivered within 3 weeks.',
      image: '/assets/images/collections/custom-designs.jpg', // Add this image
      link: '/collections/custom-designs'
    }
  ];

  // Featured collections (could rotate with new arrivals or seasonal collections)
  const featuredCollections = [
    {
      id: 'ceylon-blue',
      title: 'Ceylon Blue Sapphires',
      description: 'Our signature collection featuring the finest blue sapphires from Sri Lanka.',
      image: CeylonBlueImage,
      link: '/collections/precious-gemstones/blue-sapphire'
    },
    {
      id: 'emerald-elegance',
      title: 'Emerald Elegance',
      description: 'Striking green emeralds set in sophisticated designs that showcase their vibrant color.',
      image: EmeraldEleganceImage,
      link: '/collections/precious-gemstones/emerald'
    },
    {
      id: 'ruby-romance',
      title: 'Ruby Romance',
      description: 'Passionate red rubies that symbolize love and vitality in timeless settings.',
      image: RubyRomanceImage,
      link: '/collections/precious-gemstones/ruby'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-[#08081a]">
              {/* Image as separate element instead of background */}
              <img 
                src={CollectionsHeroImage} 
                alt="Harrico hero"
                className="absolute inset-0 w-full h-full object-cover opacity-90"
                onError={(e) => {
                  console.error('Failed to load hero image');
                  // Keep the background color as fallback
                  e.target.style.display = 'none';
                }}
              />
              
              {/* Content overlay */}
              <div className="relative h-full z-10 flex items-center justify-center">
                <div className="container text-white text-center">
                  <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Collections</h1>
                  <p className="max-w-2xl mx-auto">
                    Discover extraordinary gemstones and exquisite jewelry pieces from Harrico
                  </p>
                </div>
              </div>
            </div>

      {/* Featured Collections */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Featured Collections" 
            subtitle="EXCEPTIONAL SELECTIONS" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {featuredCollections.map((collection) => (
              <Link 
                key={collection.id}
                to={collection.link}
                className="group block"
              >
                <div className="overflow-hidden rounded-lg shadow-lg mb-4">
                  <img 
                    src={collection.image} 
                    alt={collection.title} 
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-serif mb-2">{collection.title}</h3>
                <p className="text-gray-700 mb-3 text-sm">{collection.description}</p>
                <span className="text-sm text-[#b9a16b] tracking-wider uppercase relative inline-flex items-center">
                  EXPLORE <span className="ml-1">›</span>
                  <span className="absolute bottom-0 left-0 w-full h-px bg-[#b9a16b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* All Collections Categories */}
      <section className="py-16 md:py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Explore Our Collections" 
            subtitle="CATEGORIES" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {mainCategories.map((category) => (
              <Link 
                key={category.id}
                to={category.link}
                className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-2">{category.title}</h3>
                  <p className="text-gray-700 mb-4 text-sm">{category.description}</p>
                  <span className="text-sm text-[#b9a16b] tracking-wider uppercase inline-flex items-center">
                    VIEW COLLECTION <span className="ml-1">›</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Custom Jewelry Design CTA */}
      <section className="py-16 md:py-24 bg-[#08081a] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Custom Jewelry Design</h2>
          <p className="max-w-2xl mx-auto mb-10">
            Create a unique piece that perfectly captures your vision. Our master craftsmen
            will bring your dream jewelry to life with the finest Ceylon gemstones.
            Custom orders are delivered within 3 weeks.
          </p>
          <Link 
            to="/collections/custom-designs" 
            className="inline-block border border-[#b9a16b] text-[#b9a16b] px-12 py-3 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300"
          >
            LEARN MORE
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Collections;