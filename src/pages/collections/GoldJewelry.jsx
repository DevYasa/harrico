// src/pages/collections/GoldJewelry.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/common/SectionTitle';
import GoldDivider from '../../components/common/GoldDivider';
import GoldJewelryHeroImage from '../../assets/images/collections/gold-jewelry-hero.jpg'; // Add this image

const GoldJewelry = () => {
  // Gold jewelry categories
  const goldCategories = [
    {
      id: '22kt-gold',
      name: '22KT Gold Jewelry',
      description: 'The highest gold content for jewelry with 91.7% pure gold, offering a rich yellow color and time-honored value.',
      image: '/assets/images/collections/jewelry/22kt-gold.jpg', // Add this image
      link: '/collections/gold-jewelry/22kt'
    },
    {
      id: '18kt-yellow-gold',
      name: '18KT Yellow Gold Jewelry',
      description: 'Classic yellow gold with 75% pure gold content, offering the perfect balance of color, durability, and value.',
      image: '/assets/images/collections/jewelry/18kt-yellow-gold.jpg', // Add this image
      link: '/collections/gold-jewelry/18kt-yellow'
    },
    {
      id: '18kt-white-gold',
      name: '18KT White Gold Jewelry',
      description: 'Sophisticated white gold with 75% pure gold alloyed with white metals and rhodium plating for a brilliant finish.',
      image: '/assets/images/collections/jewelry/18kt-white-gold.jpg', // Add this image
      link: '/collections/gold-jewelry/18kt-white'
    },
    {
      id: '14kt-yellow-gold',
      name: '14KT Yellow Gold Jewelry',
      description: 'Durable yellow gold with 58.3% pure gold content, ideal for everyday wear while maintaining a warm gold color.',
      image: '/assets/images/collections/jewelry/14kt-yellow-gold.jpg', // Add this image
      link: '/collections/gold-jewelry/14kt-yellow'
    },
    {
      id: '14kt-white-gold',
      name: '14KT White Gold Jewelry',
      description: 'Practical white gold with 58.3% pure gold, perfect for everyday jewelry with a contemporary silver-white appearance.',
      image: '/assets/images/collections/jewelry/14kt-white-gold.jpg', // Add this image
      link: '/collections/gold-jewelry/14kt-white'
    },
    {
      id: '9kt-yellow-gold',
      name: '9KT Yellow Gold Jewelry',
      description: 'Affordable yellow gold with 37.5% pure gold content, offering excellent durability for everyday wear.',
      image: '/assets/images/collections/jewelry/9kt-yellow-gold.jpg', // Add this image
      link: '/collections/gold-jewelry/9kt-yellow'
    },
    {
      id: '9kt-white-gold',
      name: '9KT White Gold Jewelry',
      description: 'Budget-friendly white gold with 37.5% pure gold, providing a luxurious look at a more accessible price point.',
      image: '/assets/images/collections/jewelry/9kt-white-gold.jpg', // Add this image
      link: '/collections/gold-jewelry/9kt-white'
    }
  ];

  // Jewelry types
  const jewelryTypes = [
    {
      type: 'Rings',
      image: '/assets/images/collections/jewelry/rings.jpg', // Add this image
      link: '/collections/gold-jewelry/rings'
    },
    {
      type: 'Necklaces',
      image: '/assets/images/collections/jewelry/necklaces.jpg', // Add this image
      link: '/collections/gold-jewelry/necklaces'
    },
    {
      type: 'Earrings',
      image: '/assets/images/collections/jewelry/earrings.jpg', // Add this image
      link: '/collections/gold-jewelry/earrings'
    },
    {
      type: 'Bracelets',
      image: '/assets/images/collections/jewelry/bracelets.jpg', // Add this image
      link: '/collections/gold-jewelry/bracelets'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${GoldJewelryHeroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="container relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Gold Jewelry</h1>
          <p className="max-w-2xl mx-auto">
            Timeless elegance crafted in the finest gold, showcasing our exceptional Ceylon gemstones
          </p>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="The Art of Gold Jewelry" 
            subtitle="HARRICO CRAFTSMANSHIP" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="max-w-3xl mx-auto mt-8 text-center">
            <p className="text-gray-700 mb-6">
              Our gold jewelry represents the perfect marriage of exceptional Ceylon gemstones and 
              precious metals, crafted with precision and artistry. Each piece is designed to showcase 
              the natural beauty of our gemstones while providing timeless elegance.
            </p>
            <p className="text-gray-700">
              From the rich yellow of 22KT gold to the contemporary appeal of white gold, we offer a 
              range of options to suit your preferences, lifestyle, and budget—all while maintaining our 
              commitment to exceptional quality and craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Shop by Type */}
      <section className="py-16 md:py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Shop by Jewelry Type" 
            subtitle="CATEGORIES" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {jewelryTypes.map((item, index) => (
              <Link 
                key={index}
                to={item.link}
                className="group block"
              >
                <div className="overflow-hidden rounded-lg shadow-lg mb-4">
                  <img 
                    src={item.image} 
                    alt={item.type} 
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-serif mb-2 text-center">{item.type}</h3>
                <div className="flex justify-center">
                  <span className="text-sm text-[#b9a16b] tracking-wider uppercase relative inline-flex items-center">
                    EXPLORE <span className="ml-1">›</span>
                    <span className="absolute bottom-0 left-0 w-full h-px bg-[#b9a16b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Gold Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Explore by Gold Type" 
            subtitle="PRECIOUS METALS" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {goldCategories.map((category) => (
              <Link 
                key={category.id}
                to={category.link}
                className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-2">{category.name}</h3>
                  <p className="text-gray-700 mb-4 text-sm line-clamp-2">{category.description}</p>
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

      {/* Gold Education */}
      <section className="py-16 md:py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <SectionTitle 
                title="Understanding Gold Jewelry" 
                subtitle="GOLD EDUCATION" 
                alignment="left"
              />
              
              <div className="mt-8 space-y-6">
                <p className="text-gray-700">
                  Gold purity is measured in karats, with 24KT representing pure gold. The karat number 
                  indicates the percentage of gold in the alloy, with the remaining percentage consisting 
                  of other metals that enhance durability and alter color.
                </p>
                <p className="text-gray-700">
                  Higher karat gold has a richer yellow color and higher value but is softer, while lower 
                  karat gold is more durable for everyday wear. White gold is created by alloying gold with 
                  white metals and typically has a rhodium plating for that bright white finish.
                </p>
                <Link
                  to="/education/gold"
                  className="inline-block border border-[#b9a16b] text-[#b9a16b] px-8 py-2 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300 mt-4"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-lg font-serif mb-3">22KT Gold (91.7% Pure)</h4>
                  <p className="text-sm text-gray-700">The richest gold color with the highest gold content used in jewelry, ideal for special pieces and investment.</p>
                </div>
                <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-lg font-serif mb-3">18KT Gold (75% Pure)</h4>
                  <p className="text-sm text-gray-700">The perfect balance of gold content, color, and durability, available in yellow and white gold.</p>
                </div>
                <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-lg font-serif mb-3">14KT Gold (58.3% Pure)</h4>
                  <p className="text-sm text-gray-700">Durable and practical gold with excellent value, ideal for everyday jewelry.</p>
                </div>
                <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-lg font-serif mb-3">9KT Gold (37.5% Pure)</h4>
                  <p className="text-sm text-gray-700">The most affordable gold option with excellent durability and a lighter gold color.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Jewelry CTA */}
      <section className="py-16 md:py-24 bg-[#08081a] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Custom Gold Jewelry</h2>
          <p className="max-w-2xl mx-auto mb-10">
            Create your dream gold jewelry piece featuring your choice of Ceylon gemstones. 
            Our master craftsmen will bring your vision to life with exceptional attention to detail.
            Custom designs delivered within 3 weeks.
          </p>
          <Link 
            to="/collections/custom-designs" 
            className="inline-block border border-[#b9a16b] text-[#b9a16b] px-12 py-3 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300"
          >
            START YOUR DESIGN
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GoldJewelry;