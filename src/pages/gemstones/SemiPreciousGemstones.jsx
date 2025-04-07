// src/pages/gemstones/SemiPreciousGemstones.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/common/SectionTitle';
import GoldDivider from '../../components/common/GoldDivider';
import AnimatedPageHeader from '../../components/common/AnimatedPageHeader';
import SemiPreciousGemsHeroImage from '../../assets/images/collections/sapphire-jewelry.jpg';
import CustomJewelryCTA from '../../components/gemstones/CustomJewelryCTA';
// Import the gemstone data
import { gemstoneData } from '../../data/mockdata';

const SemiPreciousGemstones = () => {
  // Semi-precious gemstones data from mockdata
  const semiPreciousGemstones = gemstoneData.semiPreciousGemstones;
  
  // Featured gemstones - filter for featured gems from mockdata
  const featuredGems = semiPreciousGemstones.filter(gem => gem.featured);

  return (
    <div className="bg-white">
      {/* Animated Header and Hero Section */}
      <AnimatedPageHeader 
        title="Semi-Precious Gemstones" 
        backgroundImage={SemiPreciousGemsHeroImage}
      />

      {/* Introduction */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Colorful & Distinctive" 
            subtitle="HARRICO COLLECTION" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="max-w-3xl mx-auto mt-6 md:mt-8 text-center">
            <p className="text-gray-700 mb-4 md:mb-6">
              Our semi-precious gemstone collection offers a world of color and character. These gems provide 
              exceptional beauty and value, with unique properties that make each piece special.
            </p>
            <p className="text-gray-700">
              Carefully selected for their quality and distinctiveness, our semi-precious gemstones are 
              perfect for creating jewelry that's both beautiful and accessible, with their own fascinating 
              stories and characteristics.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Gemstones */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Featured Gemstones" 
            subtitle="CUSTOMER FAVORITES" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
            {featuredGems.map((gem) => (
              <Link 
                key={gem.id}
                to={`/gemstones/semi-precious/${gem.id}`}
                className="group block"
              >
                <div className="overflow-hidden rounded-lg shadow-lg mb-3 md:mb-4">
                  <img 
                    src={gem.image} 
                    alt={gem.name} 
                    className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-serif mb-2">{gem.name}</h3>
                <p className="text-gray-700 mb-3 text-sm">{gem.description}</p>
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

      {/* All Semi-Precious Gemstones Grid */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Our Semi-Precious Gemstone Collection" 
            subtitle="EXPLORE ALL" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 md:mt-12">
            {semiPreciousGemstones.map((gem) => (
              <Link 
                key={gem.id}
                to={`/gemstones/semi-precious/${gem.id}`}
                className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-40 md:h-48 overflow-hidden">
                  <img 
                    src={gem.image} 
                    alt={gem.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-serif mb-2">{gem.name}</h3>
                  <p className="text-gray-700 mb-4 text-sm line-clamp-2">{gem.description}</p>
                  <span className="text-sm text-[#b9a16b] tracking-wider uppercase inline-flex items-center">
                    VIEW DETAILS <span className="ml-1">›</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Gemstone Jewelry Showcase */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Semi-Precious Gemstone Jewelry" 
            subtitle="READY TO WEAR" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mt-8 md:mt-12">
            <div className="w-full md:w-1/2">
              <img 
                src="/assets/images/collections/semi-precious-jewelry.jpg"
                alt="Semi-Precious Gemstone Jewelry" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl md:text-2xl font-serif mb-4 md:mb-6">Beautiful & Accessible</h3>
              <p className="text-gray-700 mb-4 md:mb-6">
                Our semi-precious gemstone jewelry collection combines exceptional craftsmanship with 
                these vibrant and distinctive gems, resulting in pieces that are both beautiful and 
                accessible.
              </p>
              <p className="text-gray-700 mb-6 md:mb-8">
                Explore our ready-to-wear collections featuring these colorful gems set in various 
                precious metals, from gold to silver palladium, each piece designed to showcase the 
                natural beauty of the stone.
              </p>
              <Link
                to="/jewelry"
                className="inline-block border border-[#b9a16b] text-[#b9a16b] px-6 py-2 md:px-8 md:py-2 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300"
              >
                SHOP JEWELRY
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Jewelry CTA - using the shared component */}
      <CustomJewelryCTA
        title="Create Your Dream Jewelry"
        description="Select any of our beautiful semi-precious gemstones and work with our design team to create a custom piece that perfectly reflects your personal style. Custom designs delivered within 3 weeks."
      />
    </div>
  );
};

export default SemiPreciousGemstones;