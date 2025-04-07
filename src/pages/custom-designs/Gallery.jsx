// src/pages/custom-designs/Gallery.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/common/SectionTitle';
import GoldDivider from '../../components/common/GoldDivider';
import AnimatedPageHeader from '../../components/common/AnimatedPageHeader';
import GalleryHeroImage from '../../assets/images/collections/custom/bridal-collection.jpg';

const Gallery = () => {
  // Gallery categories for filtering
  const categories = [
    { id: 'all', name: 'All Designs' },
    { id: 'rings', name: 'Rings' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'bracelets', name: 'Bracelets' }
  ];

  // Gallery items (sample custom designs)
  const galleryItems = [
    {
      id: 'custom-ring-1',
      title: 'Sapphire Halo Engagement Ring',
      description: 'A 2.5 carat oval blue sapphire surrounded by a diamond halo set in platinum.',
      category: 'rings',
      image: '/assets/images/collections/custom/gallery/sapphire-ring.jpg',
    },
    {
      id: 'custom-necklace-1',
      title: 'Emerald Pendant Necklace',
      description: 'A 3 carat emerald-cut emerald pendant with diamond accents in 18kt yellow gold.',
      category: 'necklaces',
      image: '/assets/images/collections/custom/gallery/emerald-pendant.jpg',
    },
    {
      id: 'custom-earrings-1',
      title: 'Ruby Drop Earrings',
      description: 'Oval rubies with diamond halos in 18kt white gold drop earrings.',
      category: 'earrings',
      image: '/assets/images/collections/custom/gallery/ruby-earrings.jpg',
    },
    {
      id: 'custom-ring-2',
      title: 'Three-Stone Diamond Ring',
      description: 'A trilogy ring featuring an oval center diamond with pear-shaped side stones.',
      category: 'rings',
      image: '/assets/images/collections/custom/gallery/three-stone-ring.jpg',
    },
    {
      id: 'custom-bracelet-1',
      title: 'Sapphire Tennis Bracelet',
      description: 'Alternating blue sapphires and diamonds set in 18kt white gold.',
      category: 'bracelets',
      image: '/assets/images/collections/custom/gallery/sapphire-bracelet.jpg',
    },
    {
      id: 'custom-earrings-2',
      title: 'Diamond Cluster Studs',
      description: 'Flower-shaped diamond cluster stud earrings in 18kt yellow gold.',
      category: 'earrings',
      image: '/assets/images/collections/custom/gallery/diamond-studs.jpg',
    },
    {
      id: 'custom-ring-3',
      title: 'Yellow Sapphire Statement Ring',
      description: 'A cushion-cut yellow sapphire with diamond pavé band in 22kt gold.',
      category: 'rings',
      image: '/assets/images/collections/custom/gallery/yellow-sapphire-ring.jpg',
    },
    {
      id: 'custom-necklace-2',
      title: 'Multi-Gemstone Necklace',
      description: 'A colorful station necklace featuring various Ceylon gemstones in 18kt gold.',
      category: 'necklaces',
      image: '/assets/images/collections/custom/gallery/multi-gem-necklace.jpg',
    },
    {
      id: 'custom-bracelet-2',
      title: 'Emerald Bangle',
      description: 'A solid gold bangle featuring emerald-cut emeralds and diamond accents.',
      category: 'bracelets',
      image: '/assets/images/collections/custom/gallery/emerald-bangle.jpg',
    }
  ];

  // State for active category filter
  const [activeCategory, setActiveCategory] = React.useState('all');

  // Filtered gallery items
  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-white">
      {/* Animated Header and Hero Section */}
      <AnimatedPageHeader 
        title="Custom Design Gallery" 
        subtitle="Inspiration from our collection of bespoke jewelry creations"
        backgroundImage={GalleryHeroImage}
      />

      {/* Introduction */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Design Inspiration" 
            subtitle="CUSTOM CREATIONS" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="max-w-3xl mx-auto mt-6 md:mt-8 text-center">
            <p className="text-gray-700 mb-4 md:mb-6">
              Explore our gallery of custom jewelry designs created for clients who wanted something 
              truly unique. Each piece tells a personal story and showcases our exceptional craftsmanship 
              and the beauty of our Ceylon gemstones.
            </p>
            <p className="text-gray-700">
              These designs serve as inspiration for your own custom creation. While we never replicate 
              a custom piece exactly, elements from these designs can be incorporated into your own 
              unique jewelry piece.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Custom Design Showcase" 
            subtitle="BROWSE GALLERY" 
            alignment="center"
            maxWidth="2xl"
          />
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-8 mb-10">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  activeCategory === category.id 
                    ? 'bg-[#b9a16b] text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredItems.map(item => (
              <div 
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-64 md:h-72 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-serif mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm mb-4">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Client Testimonials */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Client Stories" 
            subtitle="TESTIMONIALS" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12 max-w-5xl mx-auto">
            <div className="bg-[#f8f8f8] p-6 md:p-8 rounded-lg relative">
              <div className="text-[#b9a16b] text-4xl absolute top-4 left-4 opacity-30">"</div>
              <div className="relative z-10">
                <p className="text-gray-700 italic mb-4 md:mb-6 text-base">
                  "Working with Harrico's custom design team was a dream come true. They helped me create a 
                  sapphire engagement ring that perfectly captured our love story. The process was 
                  seamless, and the final piece exceeded all my expectations."
                </p>
                <p className="text-[#b9a16b] font-medium">— Michael T., Kuala Lumpur</p>
              </div>
            </div>
            
            <div className="bg-[#f8f8f8] p-6 md:p-8 rounded-lg relative">
              <div className="text-[#b9a16b] text-4xl absolute top-4 left-4 opacity-30">"</div>
              <div className="relative z-10">
                <p className="text-gray-700 italic mb-4 md:mb-6 text-base">
                  "I wanted to create a special anniversary gift for my wife that incorporated her birthstone. 
                  The Harrico team guided me through selecting the perfect emerald and created a pendant 
                  that brought tears to her eyes. Their attention to detail is remarkable."
                </p>
                <p className="text-[#b9a16b] font-medium">— David L., Singapore</p>
              </div>
            </div>
            
            <div className="bg-[#f8f8f8] p-6 md:p-8 rounded-lg relative">
              <div className="text-[#b9a16b] text-4xl absolute top-4 left-4 opacity-30">"</div>
              <div className="relative z-10">
                <p className="text-gray-700 italic mb-4 md:mb-6 text-base">
                  "The ruby earrings Harrico designed for my 40th birthday are absolutely stunning. 
                  I was involved in every step of the process, and they perfectly captured my style 
                  while offering expert guidance on the gemstone selection and setting design."
                </p>
                <p className="text-[#b9a16b] font-medium">— Sarah K., London</p>
              </div>
            </div>
            
            <div className="bg-[#f8f8f8] p-6 md:p-8 rounded-lg relative">
              <div className="text-[#b9a16b] text-4xl absolute top-4 left-4 opacity-30">"</div>
              <div className="relative z-10">
                <p className="text-gray-700 italic mb-4 md:mb-6 text-base">
                  "I inherited several gemstones from my grandmother and wanted to create modern pieces 
                  I could wear. Harrico created a beautiful bracelet that honors my grandmother's legacy 
                  while fitting my contemporary style. It's now my most treasured possession."
                </p>
                <p className="text-[#b9a16b] font-medium">— Emma J., Melbourne</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Start Your Design CTA */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#08081a] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-4 md:mb-6">Create Your Own Masterpiece</h2>
          <p className="max-w-2xl mx-auto mb-6 md:mb-10">
            Let our gallery inspire your own custom jewelry creation. Schedule a consultation 
            with our design team to begin bringing your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact/appointment" 
              className="inline-block border border-[#b9a16b] text-[#b9a16b] px-6 py-2 md:px-8 md:py-3 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300"
            >
              SCHEDULE CONSULTATION
            </Link>
            <Link 
              to="/custom-designs/process" 
              className="inline-block border border-white text-white px-6 py-2 md:px-8 md:py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-[#08081a] transition-all duration-300"
            >
              LEARN ABOUT THE PROCESS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;