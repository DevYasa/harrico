// src/pages/collections/PlatinumJewelry.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/common/SectionTitle';
import GoldDivider from '../../components/common/GoldDivider';
import PlatinumJewelryHeroImage from '../../assets/images/collections/platinum-jewelry-hero.jpg'; // Add this image

const PlatinumJewelry = () => {
  // Jewelry types
  const jewelryTypes = [
    {
      type: 'Rings',
      description: 'From statement pieces to elegant bands, our platinum rings showcase exceptional gemstones.',
      image: '/assets/images/collections/jewelry/platinum-rings.jpg', // Add this image
      link: '/collections/platinum-jewelry/rings'
    },
    {
      type: 'Necklaces',
      description: 'Elegant platinum necklaces and pendants crafted to highlight our finest Ceylon gems.',
      image: '/assets/images/collections/jewelry/platinum-necklaces.jpg', // Add this image
      link: '/collections/platinum-jewelry/necklaces'
    },
    {
      type: 'Earrings',
      description: 'Stunning platinum earrings from simple studs to elaborate chandelier designs.',
      image: '/assets/images/collections/jewelry/platinum-earrings.jpg', // Add this image
      link: '/collections/platinum-jewelry/earrings'
    },
    {
      type: 'Bracelets',
      description: 'Sophisticated platinum bracelets that combine durability with timeless style.',
      image: '/assets/images/collections/jewelry/platinum-bracelets.jpg', // Add this image
      link: '/collections/platinum-jewelry/bracelets'
    }
  ];

  // Featured collections
  const featuredCollections = [
    {
      id: 'platinum-sapphire',
      name: 'Platinum & Sapphire',
      description: 'The cool white of platinum perfectly complements the rich blue of Ceylon sapphires in this exclusive collection.',
      image: '/assets/images/collections/jewelry/platinum-sapphire.jpg', // Add this image
      link: '/collections/platinum-jewelry/sapphire'
    },
    {
      id: 'platinum-diamond',
      name: 'Platinum & Diamond',
      description: 'The ultimate luxury pairing, our platinum and diamond collection offers timeless elegance and exceptional brilliance.',
      image: '/assets/images/collections/jewelry/platinum-diamond.jpg', // Add this image
      link: '/collections/platinum-jewelry/diamond'
    },
    {
      id: 'platinum-colored-gems',
      name: 'Platinum & Colored Gems',
      description: 'Our vibrant gemstones pop against the cool white backdrop of platinum in these striking designs.',
      image: '/assets/images/collections/jewelry/platinum-colored-gems.jpg', // Add this image
      link: '/collections/platinum-jewelry/colored-gems'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${PlatinumJewelryHeroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="container relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Platinum Jewelry</h1>
          <p className="max-w-2xl mx-auto">
            The ultimate expression of luxury, our platinum jewelry highlights the extraordinary beauty of our gemstones
          </p>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="The Platinum Difference" 
            subtitle="LUXURY REDEFINED" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="max-w-3xl mx-auto mt-8 text-center">
            <p className="text-gray-700 mb-6">
              Platinum stands as the most prestigious metal in fine jewelry, prized for its natural white 
              luster, exceptional durability, and rarity. Denser and more precious than gold, platinum creates 
              a secure setting that perfectly showcases our exceptional Ceylon gemstones.
            </p>
            <p className="text-gray-700">
              Our platinum jewelry collection represents the pinnacle of luxury and craftsmanship, with each 
              piece meticulously crafted to last for generations. The natural white color of platinum never 
              fades or tarnishes, making it the perfect choice for heirloom-quality jewelry.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 md:py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Featured Collections" 
            subtitle="PLATINUM EXCELLENCE" 
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
                    alt={collection.name} 
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-serif mb-2">{collection.name}</h3>
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

      {/* Shop by Type */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Shop by Jewelry Type" 
            subtitle="CATEGORIES" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {jewelryTypes.map((item, index) => (
              <Link 
                key={index}
                to={item.link}
                className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.type} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-serif mb-2">{item.type}</h3>
                  <p className="text-gray-700 mb-4 text-sm">{item.description}</p>
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

      {/* Platinum Education */}
      <section className="py-16 md:py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <SectionTitle 
                title="Understanding Platinum" 
                subtitle="PLATINUM EDUCATION" 
                alignment="left"
              />
              
              <div className="mt-8 space-y-6">
                <p className="text-gray-700">
                  Platinum is one of the rarest precious metals on earth, with exceptional purity in jewelry—typically 
                  95% pure, compared to 75% for 18kt gold. This purity, combined with its natural white color and 
                  density, makes platinum the most prestigious metal for fine jewelry.
                </p>
                <p className="text-gray-700">
                  Unlike white gold, platinum never needs replating and develops a unique patina over time that many 
                  connoisseurs prize. Its density also makes it the most secure setting for precious gemstones, with 
                  prongs that hold stones more securely than other metals.
                </p>
                <Link
                  to="/education/platinum"
                  className="inline-block border border-[#b9a16b] text-[#b9a16b] px-8 py-2 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300 mt-4"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-lg font-serif mb-3">Exceptional Purity</h4>
                  <p className="text-sm text-gray-700">Platinum jewelry is typically 95-98% pure platinum, making it hypoallergenic and incredibly durable.</p>
                </div>
                <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-lg font-serif mb-3">Natural White Metal</h4>
                  <p className="text-sm text-gray-700">Unlike white gold, platinum's natural white color never fades or needs replating over time.</p>
                </div>
                <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-lg font-serif mb-3">Superior Durability</h4>
                  <p className="text-sm text-gray-700">Platinum's density makes it resistant to wear and excellent for securing precious gemstones.</p>
                </div>
                <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-lg font-serif mb-3">Investment Value</h4>
                  <p className="text-sm text-gray-700">As one of the rarest precious metals, platinum holds exceptional value and prestige.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Jewelry CTA */}
      <section className="py-16 md:py-24 bg-[#08081a] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Custom Platinum Jewelry</h2>
          <p className="max-w-2xl mx-auto mb-10">
            Create an heirloom-quality platinum piece featuring your choice of our exceptional Ceylon gemstones. 
            Our master craftsmen will bring your vision to life with unparalleled attention to detail.
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

export default PlatinumJewelry;