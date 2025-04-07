// src/pages/custom-designs/Process.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/common/SectionTitle';
import GoldDivider from '../../components/common/GoldDivider';
import AnimatedPageHeader from '../../components/common/AnimatedPageHeader';
import ProcessHeroImage from '../../assets/images/collections/custom/bridal-collection.jpg';

const Process = () => {
  // Design process steps with more detailed descriptions
  const designSteps = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Begin with a personalized consultation where our design experts listen to your vision and discuss your preferences, style, budget, and timeline. We Will help you explore possibilities and refine your ideas.',
      image: '/assets/images/collections/custom/consultation.jpg',
    },
    {
      step: 2,
      title: 'Gemstone Selection',
      description: 'Choose from our exceptional collection of Ceylon gemstones. Our gemologists will help you select the perfect stone based on color, clarity, cut, and size to match your design vision and budget.',
      image: '/assets/images/collections/custom/gemstone-selection.jpg',
    },
    {
      step: 3,
      title: 'Design Development',
      description: 'Our talented designers create detailed sketches and 3D renderings of your custom piece for your approval. We Will refine the design until it perfectly captures your vision.',
      image: '/assets/images/collections/custom/design-creation.jpg',
    },
    {
      step: 4,
      title: 'Crafting & Production',
      description: 'Once the design is approved, our master jewelers bring it to life. Each piece is meticulously crafted by hand with exceptional attention to detail, ensuring the highest quality craftsmanship.',
      image: '/assets/images/collections/custom/crafting.jpg',
    },
    {
      step: 5,
      title: 'Quality Assurance',
      description: 'Every custom piece undergoes rigorous quality checks to ensure it meets our exacting standards. Our gemologists and master jewelers inspect each aspect of the finished piece.',
      image: '/assets/images/collections/custom/quality-check.jpg',
    },
    {
      step: 6,
      title: 'Delivery & Presentation',
      description: 'Your completed custom piece is elegantly packaged and delivered within 3 weeks of design approval. We provide full documentation including gemstone certification and care instructions.',
      image: '/assets/images/collections/custom/delivery.jpg',
    }
  ];

  return (
    <div className="bg-white">
      {/* Animated Header and Hero Section */}
      <AnimatedPageHeader 
        title="Our Custom Design Process" 
        subtitle="From concept to creation: how we bring your jewelry vision to life"
        backgroundImage={ProcessHeroImage}
      />

      {/* Introduction */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Crafting Your Dream Jewelry" 
            subtitle="OUR APPROACH" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="max-w-3xl mx-auto mt-6 md:mt-8 text-center">
            <p className="text-gray-700 mb-4 md:mb-6">
              At Harrico, we've refined our custom design process to be seamless, collaborative, and 
              enjoyable. Our expert team guides you through each step, ensuring your custom piece 
              perfectly captures your vision while showcasing the exceptional beauty of our Ceylon gemstones.
            </p>
            <p className="text-gray-700">
              From initial consultation to final delivery, our streamlined process takes just 3 weeks from 
              design approval to completion, without compromising on quality or craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* The Design Process in Detail */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="The Custom Design Journey" 
            subtitle="STEP BY STEP" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="mt-8 md:mt-16">
            {designSteps.map((step, index) => (
              <div 
                key={step.step} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-12 mb-12 md:mb-16 last:mb-0`}
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
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#b9a16b] flex items-center justify-center text-white font-bold mr-3 md:mr-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif">{step.title}</h3>
                  </div>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 md:mt-12 text-center">
            <p className="text-gray-700 mb-6 md:mb-8 max-w-2xl mx-auto">
              Ready to begin your custom jewelry journey? Schedule a consultation with our design team 
              to discuss your vision and explore the possibilities.
            </p>
            <Link
              to="/contact/appointment"
              className="inline-block border border-[#b9a16b] text-[#b9a16b] px-6 py-2 md:px-8 md:py-2 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300"
            >
              SCHEDULE CONSULTATION
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="CUSTOM DESIGN FAQs" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="mt-8 md:mt-12 max-w-3xl mx-auto">
            <div className="space-y-6 md:space-y-8">
              <div className="bg-[#f8f8f8] p-6 rounded-lg">
                <h3 className="text-lg md:text-xl font-serif mb-3">How long does the custom design process take?</h3>
                <p className="text-gray-700 text-sm">From design approval to delivery, our custom pieces are typically completed within 3 weeks. The initial design consultation and refinement process varies based on complexity, but we work efficiently to bring your vision to life.</p>
              </div>
              
              <div className="bg-[#f8f8f8] p-6 rounded-lg">
                <h3 className="text-lg md:text-xl font-serif mb-3">What is the minimum budget for a custom piece?</h3>
                <p className="text-gray-700 text-sm">Custom designs start at various price points depending on the materials and gemstones selected. We work with a range of budgets and can suggest options to create beautiful pieces at different price points.</p>
              </div>
              
              <div className="bg-[#f8f8f8] p-6 rounded-lg">
                <h3 className="text-lg md:text-xl font-serif mb-3">Can I use my own gemstones or materials?</h3>
                <p className="text-gray-700 text-sm">Yes, we can incorporate your existing gemstones or materials into a new design. Our gemologists will evaluate your stones and advise on the best design options to showcase them.</p>
              </div>
              
              <div className="bg-[#f8f8f8] p-6 rounded-lg">
                <h3 className="text-lg md:text-xl font-serif mb-3">Can I modify an existing Harrico design?</h3>
                <p className="text-gray-700 text-sm">Absolutely. Many clients start with one of our existing designs and customize it to their preferences. We can modify metal types, gemstones, setting styles, and dimensions to create a personalized version.</p>
              </div>
              
              <div className="bg-[#f8f8f8] p-6 rounded-lg">
                <h3 className="text-lg md:text-xl font-serif mb-3">Do you provide international shipping for custom designs?</h3>
                <p className="text-gray-700 text-sm">Yes, we ship our custom designs worldwide. International deliveries may require additional time, and we'll ensure proper insurance and secure shipping for your valuable piece.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Start Your Design CTA */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#08081a] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-4 md:mb-6">Begin Your Custom Design Journey</h2>
          <p className="max-w-2xl mx-auto mb-6 md:mb-10">
            Ready to create a piece that's uniquely yours? Schedule a consultation with our design team 
            to begin your custom jewelry journey. From concept to creation, we'll guide you every step 
            of the way.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact/appointment" 
              className="inline-block border border-[#b9a16b] text-[#b9a16b] px-6 py-2 md:px-8 md:py-3 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300"
            >
              SCHEDULE CONSULTATION
            </Link>
            <Link 
              to="/custom-designs/gallery" 
              className="inline-block border border-white text-white px-6 py-2 md:px-8 md:py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-[#08081a] transition-all duration-300"
            >
              EXPLORE GALLERY
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;