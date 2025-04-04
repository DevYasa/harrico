// src/pages/collections/SilverPalladiumJewelry.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/common/SectionTitle';
import GoldDivider from '../../components/common/GoldDivider';
import SilverPalladiumHeroImage from '../../assets/images/collections/silver-palladium-hero.jpg'; // Add this image

const SilverPalladiumJewelry = () => {
  // Jewelry types
  const jewelryTypes = [
    {
      type: 'Rings',
      description: 'Contemporary silver palladium rings that beautifully showcase our colorful gemstones.',
      image: '/assets/images/collections/jewelry/silver-palladium-rings.jpg', // Add this image
      link: '/collections/silver-palladium/rings'
    },
    {
      type: 'Necklaces',
      description: 'Elegant pendants and necklaces crafted in bright silver palladium to highlight our Ceylon gems.',
      image: '/assets/images/collections/jewelry/silver-palladium-necklaces.jpg', // Add this image
      link: '/collections/silver-palladium/necklaces'
    },
    {
      type: 'Earrings',
      description: 'Stylish silver palladium earrings from modern studs to statement drops.',
      image: '/assets/images/collections/jewelry/silver-palladium-earrings.jpg', // Add this image
      link: '/collections/silver-palladium/earrings'
    },
    {
      type: 'Bracelets',
      description: 'Contemporary bracelets that combine the bright white of silver palladium with colorful gems.',
      image: '/assets/images/collections/jewelry/silver-palladium-bracelets.jpg', // Add this image
      link: '/collections/silver-palladium/bracelets'
    }
  ];

  // Featured collections
  const featuredCollections = [
    {
      id: 'silver-palladium-blue',
      name: 'Blue Gem Collection',
      description: 'Silver palladium beautifully showcases the vibrant blues of sapphires, aquamarines, and blue topaz.',
      image: '/assets/images/collections/jewelry/silver-palladium-blue.jpg', // Add this image
      link: '/collections/silver-palladium/blue-gems'
    },
    {
      id: 'silver-palladium-modern',
      name: 'Modern Design Collection',
      description: 'Contemporary jewelry designs that highlight the bright white of silver palladium with clean lines and bold shapes.',
      image: '/assets/images/collections/jewelry/silver-palladium-modern.jpg', // Add this image
      link: '/collections/silver-palladium/modern'
    },
    {
      id: 'silver-palladium-color',
      name: 'Color Splash Collection',
      description: 'Vibrant colored gemstones pop against the bright white backdrop of silver palladium in these eye-catching pieces.',
      image: '/assets/images/collections/jewelry/silver-palladium-color.jpg', // Add this image
      link: '/collections/silver-palladium/color-splash'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${SilverPalladiumHeroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="container relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Silver Palladium Jewelry</h1>
          <p className="max-w-2xl mx-auto">
            Contemporary elegance with our innovative silver palladium alloy, showcasing gemstones with modern style
          </p>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Silver Palladium Innovation" 
            subtitle="CONTEMPORARY LUXURY" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="max-w-3xl mx-auto mt-8 text-center">
            <p className="text-gray-700 mb-6">
              Our silver palladium jewelry combines the bright white appearance of silver with the durability 
              and tarnish resistance of palladium. This innovative alloy provides the perfect balance of 
              contemporary style, durability, and value.
            </p>
            <p className="text-gray-700">
              More tarnish-resistant than traditional sterling silver and with enhanced durability, silver 
              palladium creates a modern backdrop for our vibrant Ceylon gemstones. It's the ideal choice 
              for those seeking contemporary designs with exceptional quality at accessible price points.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 md:py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Featured Collections" 
            subtitle="CONTEMPORARY STYLE" 
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

      {/* Silver Palladium Education */}
      <section className="py-16 md:py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <SectionTitle 
                title="Understanding Silver Palladium" 
                subtitle="METAL EDUCATION" 
                alignment="left"
              />
              
              <div className="mt-8 space-y-6">
                <p className="text-gray-700">
                  Silver palladium is an innovative alloy that combines the bright white appearance of silver 
                  with the tarnish resistance and durability of palladium, a precious metal in the platinum family.
                  This combination creates jewelry that maintains its bright appearance with minimal maintenance.
                </p>
                <p className="text-gray-700">
                  More durable than traditional sterling silver, silver palladium provides excellent value 
                  while offering a contemporary white metal option that's perfect for modern jewelry designs.
                  It's an excellent choice for those who appreciate white metal jewelry but prefer a more 
                  accessible price point than platinum.
                </p>
                <Link
                  to="/education/silver-palladium"
                  className="inline-block border border-[#b9a16b] text-[#b9a16b] px-8 py-2 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300 mt-4"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-lg font-serif mb-3">Enhanced Durability</h4>
                  <p className="text-sm text-gray-700">Silver palladium offers improved strength and scratch resistance compared to traditional sterling silver.</p>
                </div>
                <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-lg font-serif mb-3">Tarnish Resistance</h4>
                  <p className="text-sm text-gray-700">The addition of palladium significantly improves tarnish resistance for longer-lasting brightness.</p>
                </div>
                <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-lg font-serif mb-3">Contemporary Aesthetic</h4>
                  <p className="text-sm text-gray-700">The bright white color makes silver palladium perfect for modern, clean-lined jewelry designs.</p>
                </div>
                <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-lg font-serif mb-3">Excellent Value</h4>
                  <p className="text-sm text-gray-700">Silver palladium offers an affordable alternative to white gold and platinum while providing superior quality to standard silver.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Jewelry CTA */}
      <section className="py-16 md:py-24 bg-[#08081a] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Custom Silver Palladium Jewelry</h2>
          <p className="max-w-2xl mx-auto mb-10">
            Create a contemporary piece featuring your choice of our exceptional Ceylon gemstones set in 
            silver palladium. Our designers will work with you to create a modern masterpiece that 
            reflects your personal style. Custom designs delivered within 3 weeks.
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

export default SilverPalladiumJewelry;