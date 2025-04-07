// src/pages/gemstones/Gemstones.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/common/SectionTitle';
import GoldDivider from '../../components/common/GoldDivider';
import AnimatedPageHeader from '../../components/common/AnimatedPageHeader';
import GemstonesHeroImage from '../../assets/images/collections/sapphire-jewelry.jpg';
import CustomJewelryCTA from '../../components/gemstones/CustomJewelryCTA';
// Import the gemstone data
import { gemstoneData } from '../../data/mockdata';

const Gemstones = () => {
  // Main gemstone categories
  const gemstoneCategories = [
    {
      id: 'precious-gemstones',
      title: 'Precious Gemstones',
      description: 'The rarest and most valuable gemstones sourced directly from our Ceylon mines.',
      image: '/assets/images/collections/precious-gemstones.jpg',
      link: '/gemstones/precious'
    },
    {
      id: 'semi-precious-gemstones',
      title: 'Semi-Precious Gemstones',
      description: 'Beautiful and distinctive gemstones with unique characteristics and compelling value.',
      image: '/assets/images/collections/semi-precious-gemstones.jpg',
      link: '/gemstones/semi-precious'
    }
  ];

  // Featured gemstones - use data from mockdata
  const featuredGemstones = gemstoneData.preciousGemstones
    .filter(gem => gem.featured)
    .slice(0, 3);  // Limit to 3 featured gems

  return (
    <div className="bg-white">
      {/* Animated Header and Hero Section */}
      <AnimatedPageHeader 
        title="Gemstones" 
        backgroundImage={GemstonesHeroImage}
      />

      {/* Introduction */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="The Harrico Gem Collection" 
            subtitle="EXCEPTIONAL QUALITY" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="max-w-3xl mx-auto mt-6 md:mt-8 text-center">
            <p className="text-gray-700 mb-4 md:mb-6">
              At Harrico, we specialize in the finest gemstones from Sri Lanka (Ceylon). With full control of our
              supply chain from mine to market, we ensure exceptional quality, ethical sourcing, and authentic provenance
              for every stone in our collection.
            </p>
            <p className="text-gray-700">
              Whether you're seeking a rare blue sapphire, a vibrant emerald, or an affordable semi-precious gem,
              our extensive collection offers outstanding beauty, value, and variety.
            </p>
          </div>
        </div>
      </section>

      {/* Main Categories */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Explore Our Gemstones" 
            subtitle="CATEGORIES" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12">
            {gemstoneCategories.map((category) => (
              <Link 
                key={category.id}
                to={category.link}
                className="group block"
              >
                <div className="overflow-hidden rounded-lg shadow-lg mb-4">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-serif mb-2">{category.title}</h3>
                <p className="text-gray-700 mb-3 text-sm">{category.description}</p>
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

      {/* Featured Gemstones */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Featured Gemstones" 
            subtitle="SIGNATURE COLLECTIONS" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
            {featuredGemstones.map((gem) => (
              <Link 
                key={gem.id}
                to={`/gemstones/precious/${gem.id}`}
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

      {/* Custom Jewelry CTA - using the shared component */}
      <CustomJewelryCTA
        title="Create Your Dream Jewelry"
        description="Select any of our exquisite gemstones and work with our design team to create a custom piece that perfectly reflects your personal style. Custom designs delivered within 3 weeks."
      />
    </div>
  );
};

export default Gemstones;