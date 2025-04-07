// src/pages/categories/Categories.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/common/SectionTitle';
import GoldDivider from '../../components/common/GoldDivider';
import AnimatedPageHeader from '../../components/common/AnimatedPageHeader';
import CategoriesHeroImage from '../../assets/images/collections/sapphire-jewelry.jpg';

const Categories = () => {
  // Jewelry types
  const jewelryTypes = [
    {
      type: 'Rings',
      description: 'From statement pieces to elegant bands, our rings showcase exceptional gemstones.',
      image: '/assets/images/collections/jewelry/rings.jpg',
      link: '/categories/rings'
    },
    {
      type: 'Necklaces',
      description: 'Elegant necklaces and pendants crafted to highlight our finest Ceylon gems.',
      image: '/assets/images/collections/jewelry/necklaces.jpg',
      link: '/categories/necklaces'
    },
    {
      type: 'Earrings',
      description: 'Stunning earrings from simple studs to elaborate chandelier designs.',
      image: '/assets/images/collections/jewelry/earrings.jpg',
      link: '/categories/earrings'
    },
    {
      type: 'Bracelets',
      description: 'Sophisticated bracelets that combine durability with timeless style.',
      image: '/assets/images/collections/jewelry/bracelets.jpg',
      link: '/categories/bracelets'
    },
    {
      type: 'Pendants',
      description: 'Beautiful pendants featuring stunning gemstones in elegant settings.',
      image: '/assets/images/collections/jewelry/pendants.jpg',
      link: '/categories/pendants'
    },
    {
      type: 'Bridal Jewelry',
      description: 'Timeless pieces for your special day, from engagement rings to complete wedding sets.',
      image: '/assets/images/collections/jewelry/bridal.jpg',
      link: '/categories/bridal'
    }
  ];

  return (
    <div className="bg-white">
      {/* Animated Header and Hero Section */}
      <AnimatedPageHeader 
        title="Jewelry By Category" 
        subtitle="Explore our collections by jewelry type, each showcasing the exceptional beauty of our Ceylon gemstones"
        backgroundImage={CategoriesHeroImage}
      />

      {/* Introduction */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Explore By Jewelry Type" 
            subtitle="HARRICO COLLECTIONS" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="max-w-3xl mx-auto mt-6 md:mt-8 text-center">
            <p className="text-gray-700 mb-4 md:mb-6">
              Our jewelry collections are thoughtfully organized by type to help you find the perfect piece.
              Each category features a variety of styles, from classic to contemporary, all crafted with our 
              exceptional Ceylon gemstones and fine precious metals.
            </p>
            <p className="text-gray-700">
              Whether you're searching for a statement ring, elegant necklace, or the perfect pair of earrings,
              our collections offer outstanding craftsmanship and timeless design across every jewelry category.
            </p>
          </div>
        </div>
      </section>

      {/* Jewelry Types Grid */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Browse Our Collections" 
            subtitle="JEWELRY CATEGORIES" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
            {jewelryTypes.map((item, index) => (
              <Link 
                key={index}
                to={item.link}
                className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.type} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-serif mb-2">{item.type}</h3>
                  <p className="text-gray-700 mb-4 text-sm line-clamp-2">{item.description}</p>
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

      {/* Rings Showcase */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Featured Ring Collection" 
            subtitle="SIGNATURE DESIGNS" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mt-8 md:mt-12">
            <div className="w-full md:w-1/2">
              <img 
                src="/assets/images/collections/jewelry/rings-showcase.jpg"
                alt="Featured Ring Collection" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl md:text-2xl font-serif mb-4 md:mb-6">Exquisite Ring Designs</h3>
              <p className="text-gray-700 mb-4 md:mb-6">
                Our signature ring collection features exceptional Ceylon gemstones set in meticulously 
                crafted designs. From classic solitaires to intricate multi-stone settings, each ring 
                highlights the natural beauty of our gemstones.
              </p>
              <p className="text-gray-700 mb-6 md:mb-8">
                Available in a variety of precious metals including 22kt gold, 18kt gold, platinum, and 
                silver palladium, our rings offer both timeless elegance and contemporary style.
              </p>
              <Link
                to="/categories/rings"
                className="inline-block border border-[#b9a16b] text-[#b9a16b] px-6 py-2 md:px-8 md:py-2 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300"
              >
                EXPLORE RINGS
              </Link>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Custom Jewelry CTA */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#08081a] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-4 md:mb-6">Custom Jewelry Design</h2>
          <p className="max-w-2xl mx-auto mb-6 md:mb-10">
            Create a unique piece that perfectly captures your vision. Our master craftsmen
            will bring your dream jewelry to life with the finest Ceylon gemstones.
            Custom orders are delivered within 3 weeks.
          </p>
          <Link 
            to="/custom-designs" 
            className="inline-block border border-[#b9a16b] text-[#b9a16b] px-8 py-2 md:px-12 md:py-3 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300"
          >
            START YOUR DESIGN
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Categories;