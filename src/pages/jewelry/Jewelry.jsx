// src/pages/jewelry/Jewelry.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/common/SectionTitle';
import GoldDivider from '../../components/common/GoldDivider';
import AnimatedPageHeader from '../../components/common/AnimatedPageHeader';
import JewelryHeroImage from '../../assets/images/collections/sapphire-jewelry.jpg';
import CustomJewelryCTA from '../../components/gemstones/CustomJewelryCTA';
// Import the jewelry data
import { jewelryData } from '../../data/mockdata';

const Jewelry = () => {
  // Jewelry metal categories from mockdata
  const jewelryCategories = [
    {
      id: 'gold-jewelry',
      title: 'Gold Jewelry',
      description: jewelryData.goldJewelry.description,
      image: '/assets/images/collections/gold-jewelry.jpg',
      link: '/jewelry/gold'
    },
    {
      id: 'platinum-jewelry',
      title: 'Platinum Jewelry',
      description: jewelryData.platinumJewelry.description,
      image: '/assets/images/collections/platinum-jewelry.jpg',
      link: '/jewelry/platinum'
    },
    {
      id: 'silver-palladium',
      title: 'Silver Palladium Jewelry',
      description: jewelryData.silverPalladiumJewelry.description,
      image: '/assets/images/collections/silver-palladium.jpg',
      link: '/jewelry/silver-palladium'
    }
  ];

  // Get featured gold collections from mockdata
  const goldVarieties = jewelryData.goldJewelry.collections
    .filter(collection => collection.featured)
    .slice(0, 3)
    .map(collection => ({
      id: collection.id,
      name: collection.name,
      description: collection.description,
      image: collection.items[0]?.image || '/assets/images/collections/jewelry/default.jpg',
      link: `/jewelry/gold/${collection.id}`
    }));

  return (
    <div className="bg-white">
      {/* Animated Header and Hero Section */}
      <AnimatedPageHeader 
        title="Fine Jewelry" 
        subtitle="Exquisite craftsmanship in precious metals, showcasing the exceptional beauty of our Ceylon gemstones"
        backgroundImage={JewelryHeroImage}
      />

      {/* Introduction */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="The Art of Fine Jewelry" 
            subtitle="HARRICO CRAFTSMANSHIP" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="max-w-3xl mx-auto mt-6 md:mt-8 text-center">
            <p className="text-gray-700 mb-4 md:mb-6">
              Our jewelry represents the perfect marriage of exceptional Ceylon gemstones and 
              precious metals, crafted with precision and artistry. Each piece is designed to showcase 
              the natural beauty of our gemstones while providing timeless elegance.
            </p>
            <p className="text-gray-700">
              From the rich yellow of 22KT gold to the contemporary appeal of platinum and silver palladium, 
              we offer a range of options to suit your preferences, lifestyle, and budget—all while maintaining our 
              commitment to exceptional quality and craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Main Categories */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Explore By Metal" 
            subtitle="JEWELRY COLLECTIONS" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
            {jewelryCategories.map((category) => (
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

      {/* Featured Gold Varieties */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Gold Jewelry Collection" 
            subtitle="FEATURED GOLD VARIETIES" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
            {goldVarieties.map((gold) => (
              <Link 
                key={gold.id}
                to={gold.link}
                className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-40 md:h-48 overflow-hidden">
                  <img 
                    src={gold.image} 
                    alt={gold.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-serif mb-2">{gold.name}</h3>
                  <p className="text-gray-700 mb-4 text-sm line-clamp-2">{gold.description}</p>
                  <span className="text-sm text-[#b9a16b] tracking-wider uppercase inline-flex items-center">
                    VIEW COLLECTION <span className="ml-1">›</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 md:mt-12 text-center">
            <Link
              to="/jewelry/gold"
              className="inline-block border border-[#b9a16b] text-[#b9a16b] px-6 py-2 md:px-8 md:py-2 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300"
            >
              VIEW ALL GOLD JEWELRY
            </Link>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Custom Jewelry CTA - using the shared component */}
      <CustomJewelryCTA
        title="Custom Jewelry Design"
        description="Create a unique piece that perfectly captures your vision. Our master craftsmen will bring your dream jewelry to life with the finest Ceylon gemstones. Custom orders are delivered within 3 weeks."
      />
    </div>
  );
};

export default Jewelry;