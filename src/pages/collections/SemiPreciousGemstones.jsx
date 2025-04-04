// src/pages/collections/SemiPreciousGemstones.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/common/SectionTitle';
import GoldDivider from '../../components/common/GoldDivider';
import SemiPreciousGemsHeroImage from '../../assets/images/collections/sapphire-jewelry.jpg'; // Add this image

const SemiPreciousGemstones = () => {
  // Semi-precious gemstones data
  const semiPreciousGemstones = [
    {
      id: 'blue-topaz',
      name: 'Blue Topaz',
      description: 'Brilliant sky-blue gemstones with excellent clarity and affordability.',
      image: '/assets/images/collections/gems/blue-topaz.jpg', // Add this image
      link: '/collections/semi-precious-gemstones/blue-topaz'
    },
    {
      id: 'citrine',
      name: 'Citrine',
      description: 'Sunny yellow to golden-orange quartz that brings warmth to any jewelry piece.',
      image: '/assets/images/collections/gems/citrine.jpg', // Add this image
      link: '/collections/semi-precious-gemstones/citrine'
    },
    {
      id: 'aquamarine',
      name: 'Aquamarine',
      description: 'Serene light blue gemstones that evoke the tranquility of ocean waters.',
      image: '/assets/images/collections/gems/aquamarine.jpg', // Add this image
      link: '/collections/semi-precious-gemstones/aquamarine'
    },
    {
      id: 'hessonite',
      name: 'Hessonite',
      description: 'Also known as cinnamon stone, these amber to brownish-red garnets have a distinctive glow.',
      image: '/assets/images/collections/gems/hessonite.jpg', // Add this image
      link: '/collections/semi-precious-gemstones/hessonite'
    },
    {
      id: 'garnet',
      name: 'Garnet',
      description: 'Deep red gemstones with excellent brilliance and durability.',
      image: '/assets/images/collections/gems/garnet.jpg', // Add this image
      link: '/collections/semi-precious-gemstones/garnet'
    },
    {
      id: 'tourmaline',
      name: 'Tourmaline',
      description: 'Available in more colors than any other gemstone variety, from pink to green to multi-colored.',
      image: '/assets/images/collections/gems/tourmaline.jpg', // Add this image
      link: '/collections/semi-precious-gemstones/tourmaline'
    },
    {
      id: 'moonstone',
      name: 'Moonstone',
      description: 'Featuring a floating light effect called adularescence, reminiscent of moonlight.',
      image: '/assets/images/collections/gems/moonstone.jpg', // Add this image
      link: '/collections/semi-precious-gemstones/moonstone'
    },
    {
      id: 'red-coral',
      name: 'Red Coral',
      description: 'Organic gemstone with a vibrant red color that has been treasured for centuries.',
      image: '/assets/images/collections/gems/red-coral.jpg', // Add this image
      link: '/collections/semi-precious-gemstones/red-coral'
    },
    {
      id: 'pearls',
      name: 'Pearls',
      description: 'Timeless organic gems with a lustrous glow, available in various colors and shapes.',
      image: '/assets/images/collections/gems/pearls.jpg', // Add this image
      link: '/collections/semi-precious-gemstones/pearls'
    },
    {
      id: 'amethyst',
      name: 'Amethyst',
      description: 'Purple quartz ranging from light lavender to deep violet, symbolizing peace and protection.',
      image: '/assets/images/collections/gems/amethyst.jpg', // Add this image
      link: '/collections/semi-precious-gemstones/amethyst'
    },
    {
      id: 'opal',
      name: 'Opal',
      description: 'Known for its play of colors, displaying a spectrum of hues that shift with viewing angle.',
      image: '/assets/images/collections/gems/opal.jpg', // Add this image
      link: '/collections/semi-precious-gemstones/opal'
    },
    {
      id: 'fluorite',
      name: 'Fluorite',
      description: 'Highly colorful gemstone with exceptional clarity and interesting color zoning.',
      image: '/assets/images/collections/gems/fluorite.jpg', // Add this image
      link: '/collections/semi-precious-gemstones/fluorite'
    },
    {
      id: 'tsavorite',
      name: 'Tsavorite',
      description: 'Rare green garnet with brilliance and color that rivals fine emeralds.',
      image: '/assets/images/collections/gems/tsavorite.jpg', // Add this image
      link: '/collections/semi-precious-gemstones/tsavorite'
    },
    {
      id: 'ametrine',
      name: 'Ametrine',
      description: 'Unique quartz displaying both amethyst purple and citrine yellow in a single stone.',
      image: '/assets/images/collections/gems/ametrine.jpg', // Add this image
      link: '/collections/semi-precious-gemstones/ametrine'
    },
    {
      id: 'morganite',
      name: 'Morganite',
      description: 'Delicate pink to peach-colored beryl, related to emerald but with its own charming character.',
      image: '/assets/images/collections/gems/morganite.jpg', // Add this image
      link: '/collections/semi-precious-gemstones/morganite'
    },
    {
      id: 'kunzite',
      name: 'Kunzite',
      description: 'Pale pink to lilac gemstone known for its delicate color and strong pleochroism.',
      image: '/assets/images/collections/gems/kunzite.jpg', // Add this image
      link: '/collections/semi-precious-gemstones/kunzite'
    },
    {
      id: 'agate',
      name: 'Agate',
      description: 'Banded variety of chalcedony quartz, known for its colorful layers and patterns.',
      image: '/assets/images/collections/gems/agate.jpg', // Add this image
      link: '/collections/semi-precious-gemstones/agate'
    }
  ];

  // Featured gemstones (could be your best sellers or most distinctive gems)
  const featuredGems = semiPreciousGemstones.slice(0, 3);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${SemiPreciousGemsHeroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="container relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Semi-Precious Gemstones</h1>
          <p className="max-w-2xl mx-auto">
            Explore our diverse collection of beautiful and distinctive semi-precious gems
          </p>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Colorful & Distinctive" 
            subtitle="HARRICO COLLECTION" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="max-w-3xl mx-auto mt-8 text-center">
            <p className="text-gray-700 mb-6">
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
      <section className="py-16 md:py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Featured Gemstones" 
            subtitle="CUSTOMER FAVORITES" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {featuredGems.map((gem) => (
              <Link 
                key={gem.id}
                to={gem.link}
                className="group block"
              >
                <div className="overflow-hidden rounded-lg shadow-lg mb-4">
                  <img 
                    src={gem.image} 
                    alt={gem.name} 
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-serif mb-2">{gem.name}</h3>
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
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Our Semi-Precious Gemstone Collection" 
            subtitle="EXPLORE ALL" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
            {semiPreciousGemstones.map((gem) => (
              <Link 
                key={gem.id}
                to={gem.link}
                className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={gem.image} 
                    alt={gem.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-2">{gem.name}</h3>
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
      <section className="py-16 md:py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Semi-Precious Gemstone Jewelry" 
            subtitle="READY TO WEAR" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="flex flex-col md:flex-row items-center gap-12 mt-12">
            <div className="w-full md:w-1/2">
              <img 
                src="/assets/images/collections/semi-precious-jewelry.jpg" // Add this image 
                alt="Semi-Precious Gemstone Jewelry" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-serif mb-6">Beautiful & Accessible</h3>
              <p className="text-gray-700 mb-6">
                Our semi-precious gemstone jewelry collection combines exceptional craftsmanship with 
                these vibrant and distinctive gems, resulting in pieces that are both beautiful and 
                accessible.
              </p>
              <p className="text-gray-700 mb-8">
                Explore our ready-to-wear collections featuring these colorful gems set in various 
                precious metals, from gold to silver palladium, each piece designed to showcase the 
                natural beauty of the stone.
              </p>
              <Link
                to="/collections/semi-precious-jewelry"
                className="inline-block border border-[#b9a16b] text-[#b9a16b] px-8 py-2 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300"
              >
                SHOP JEWELRY
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Jewelry CTA */}
      <section className="py-16 md:py-24 bg-[#08081a] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Create Your Dream Jewelry</h2>
          <p className="max-w-2xl mx-auto mb-10">
            Select any of our beautiful semi-precious gemstones and work with our design team to create 
            a custom piece that perfectly reflects your personal style. Custom designs 
            delivered within 3 weeks.
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

export default SemiPreciousGemstones;