// src/pages/collections/CustomDesigns.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/common/SectionTitle';
import GoldDivider from '../../components/common/GoldDivider';
import CustomDesignsHeroImage from '../../assets/images/collections/sapphire-jewelry.jpg'; // Add this image

const CustomDesigns = () => {
  // Design process steps
  const designSteps = [
    {
      step: 1,
      title: 'Consultation',
      description: 'Schedule a consultation with our design team to discuss your vision, preferences, and budget.',
      image: '/assets/images/collections/custom/consultation.jpg', // Add this image
    },
    {
      step: 2,
      title: 'Gemstone Selection',
      description: 'Choose from our exceptional collection of Ceylon gemstones for your custom piece.',
      image: '/assets/images/collections/custom/gemstone-selection.jpg', // Add this image
    },
    {
      step: 3,
      title: 'Design Creation',
      description: 'Our designers will create detailed sketches and 3D renderings of your custom piece.',
      image: '/assets/images/collections/custom/design-creation.jpg', // Add this image
    },
    {
      step: 4,
      title: 'Crafting',
      description: 'Our master jewelers bring your design to life with exceptional attention to detail.',
      image: '/assets/images/collections/custom/crafting.jpg', // Add this image
    },
    {
      step: 5,
      title: 'Delivery',
      description: 'Your completed custom piece is delivered within 3 weeks of design approval.',
      image: '/assets/images/collections/custom/delivery.jpg', // Add this image
    }
  ];

  // Custom design inspiration categories
  const inspirationCategories = [
    {
      category: 'Engagement Rings',
      description: 'Create a one-of-a-kind symbol of your love.',
      image: '/assets/images/collections/custom/engagement.jpg', // Add this image
      link: '/collections/custom-designs/engagement'
    },
    {
      category: 'Anniversary Gifts',
      description: 'Commemorate your special milestone with a custom piece.',
      image: '/assets/images/collections/custom/anniversary.jpg', // Add this image
      link: '/collections/custom-designs/anniversary'
    },
    {
      category: 'Family Heirlooms',
      description: 'Design a meaningful piece to be passed down through generations.',
      image: '/assets/images/collections/custom/heirloom.jpg', // Add this image
      link: '/collections/custom-designs/heirloom'
    },
    {
      category: 'Signature Style',
      description: 'Express your unique personality with a custom design.',
      image: '/assets/images/collections/custom/signature.jpg', // Add this image
      link: '/collections/custom-designs/signature'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${CustomDesignsHeroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="container relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Custom Jewelry Design</h1>
          <p className="max-w-2xl mx-auto">
            Create a unique piece that tells your story, crafted with our exceptional Ceylon gemstones
          </p>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Your Vision, Our Craftsmanship" 
            subtitle="BESPOKE JEWELRY" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="max-w-3xl mx-auto mt-8 text-center">
            <p className="text-gray-700 mb-6">
              At Harrico, we specialize in creating bespoke jewelry pieces that are as unique as you are. 
              Our custom design service combines your vision with our exceptional gemstones and master 
              craftsmanship to create pieces that tell your personal story.
            </p>
            <p className="text-gray-700">
              Whether you're dreaming of a one-of-a-kind engagement ring, a special anniversary gift, 
              or a signature piece that expresses your personal style, our design team will work closely 
              with you to create a masterpiece that exceeds your expectations. And with delivery within 
              just 3 weeks, you won't have to wait long to enjoy your custom creation.
            </p>
          </div>
        </div>
      </section>

      {/* The Custom Design Process */}
      <section className="py-16 md:py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="The Custom Design Process" 
            subtitle="HOW IT WORKS" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="mt-16">
            {designSteps.map((step, index) => (
              <div 
                key={step.step} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 mb-16 last:mb-0`}
              >
                <div className="w-full md:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#b9a16b] flex items-center justify-center text-white font-bold mr-4">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-serif">{step.title}</h3>
                  </div>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              From initial consultation to final delivery, our custom design process is streamlined to 
              ensure a seamless experience. We're committed to delivering your perfect piece within 3 weeks 
              of design approval.
            </p>
            <Link
              to="/contact/appointment"
              className="inline-block border border-[#b9a16b] text-[#b9a16b] px-8 py-2 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300"
            >
              SCHEDULE CONSULTATION
            </Link>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Design Inspiration */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Design Inspiration" 
            subtitle="EXPLORE IDEAS" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {inspirationCategories.map((category, index) => (
              <Link 
                key={index}
                to={category.link}
                className="group block"
              >
                <div className="overflow-hidden rounded-lg shadow-lg mb-4">
                  <img 
                    src={category.image} 
                    alt={category.category} 
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-serif mb-2">{category.category}</h3>
                <p className="text-gray-700 mb-3 text-sm">{category.description}</p>
                <span className="text-sm text-[#b9a16b] tracking-wider uppercase relative inline-flex items-center">
                  VIEW EXAMPLES <span className="ml-1">›</span>
                  <span className="absolute bottom-0 left-0 w-full h-px bg-[#b9a16b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Materials & Options */}
      <section className="py-16 md:py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Materials & Options" 
            subtitle="CUSTOMIZE YOUR PIECE" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-serif mb-4">Gemstones</h3>
              <p className="text-gray-700 mb-6">
                Choose from our extensive collection of precious and semi-precious Ceylon gemstones, 
                including sapphires in every color, rubies, emeralds, and more.
              </p>
              <Link 
                to="/collections/precious-gemstones"
                className="text-sm text-[#b9a16b] tracking-wider uppercase relative inline-flex items-center"
              >
                EXPLORE GEMSTONES <span className="ml-1">›</span>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-serif mb-4">Precious Metals</h3>
              <p className="text-gray-700 mb-6">
                Select from our range of precious metals, including 22kt, 18kt, 14kt, and 9kt gold in yellow or white, 
                platinum, and silver palladium to complement your chosen gemstones.
              </p>
              <Link 
                to="/collections/gold-jewelry"
                className="text-sm text-[#b9a16b] tracking-wider uppercase relative inline-flex items-center"
              >
                EXPLORE METALS <span className="ml-1">›</span>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-serif mb-4">Setting Styles</h3>
              <p className="text-gray-700 mb-6">
                From classic prong settings to contemporary bezel designs, micro pavé, and halo settings, 
                we offer a variety of ways to showcase your gemstones.
              </p>
              <Link 
                to="/education/settings"
                className="text-sm text-[#b9a16b] tracking-wider uppercase relative inline-flex items-center"
              >
                LEARN ABOUT SETTINGS <span className="ml-1">›</span>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-serif mb-4">Jewelry Types</h3>
              <p className="text-gray-700 mb-6">
                Create any type of jewelry piece, including rings, necklaces, pendants, earrings, bracelets, 
                and brooches, all tailored to your preferences.
              </p>
              <Link 
                to="/collections"
                className="text-sm text-[#b9a16b] tracking-wider uppercase relative inline-flex items-center"
              >
                EXPLORE COLLECTIONS <span className="ml-1">›</span>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-serif mb-4">Design Aesthetics</h3>
              <p className="text-gray-700 mb-6">
                From classic and traditional to contemporary and avant-garde, our designers can create pieces 
                that match your personal aesthetic and style preferences.
              </p>
              <Link 
                to="/collections/custom-designs/gallery"
                className="text-sm text-[#b9a16b] tracking-wider uppercase relative inline-flex items-center"
              >
                VIEW GALLERY <span className="ml-1">›</span>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-serif mb-4">Personalization</h3>
              <p className="text-gray-700 mb-6">
                Add personal touches like engraving, birthstones, or symbolic elements that make your 
                piece uniquely meaningful to you.
              </p>
              <Link 
                to="/education/personalization"
                className="text-sm text-[#b9a16b] tracking-wider uppercase relative inline-flex items-center"
              >
                LEARN MORE <span className="ml-1">›</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Customer Stories" 
            subtitle="TESTIMONIALS" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="mt-12 bg-[#f8f8f8] p-8 md:p-12 rounded-lg max-w-4xl mx-auto relative">
            <div className="text-[#b9a16b] text-6xl absolute top-4 left-4 opacity-30">"</div>
            <div className="relative z-10">
              <p className="text-gray-700 italic mb-6 text-lg">
                "Working with Harrico's custom design team was a dream come true. They helped me create a 
                sapphire engagement ring that perfectly captured our love story. The process was 
                seamless, and the final piece exceeded all my expectations. Three years later, it 
                still takes my breath away every time I look at it."
              </p>
              <p className="text-[#b9a16b] font-medium">— Michael T., Kuala Lumpur</p>
            </div>
          </div>
        </div>
      </section>

      {/* Start Your Design CTA */}
      <section className="py-16 md:py-24 bg-[#08081a] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Start Your Custom Design Journey</h2>
          <p className="max-w-2xl mx-auto mb-10">
            Ready to create a piece that's uniquely yours? Schedule a consultation with our design team 
            to begin your custom jewelry journey. From concept to creation, we'll guide you every step 
            of the way.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact/appointment" 
              className="inline-block border border-[#b9a16b] text-[#b9a16b] px-8 py-3 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300"
            >
              SCHEDULE CONSULTATION
            </Link>
            <Link 
              to="/collections/custom-designs/gallery" 
              className="inline-block border border-white text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-[#08081a] transition-all duration-300"
            >
              VIEW GALLERY
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomDesigns;