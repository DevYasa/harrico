// src/components/home/StoreShowcase.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const StoreShowcase = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-black opacity-90 z-0"></div>
      <div className="absolute inset-0 z-0">
        <img 
          src="https://via.placeholder.com/1920x1080/111111/FFFFFF?text=Luxury+Store" 
          alt="Harrico Boutique" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 tracking-[0.3em] text-sm mb-4">LUXURY EXPERIENCE</p>
          <h2 className="font-heading text-4xl md:text-5xl mb-8">Visit Our Boutique</h2>
          <div className="w-24 h-px bg-amber-400 mx-auto mb-10"></div>
          
          <p className="text-lg mb-8 text-gray-300">
            Experience our world of luxury at our flagship boutique in Kuala Lumpur. 
            Our knowledgeable consultants are ready to guide you through our exclusive collections
            and help you find the perfect piece that resonates with your unique style.
          </p>
          
          <address className="not-italic text-gray-300 mb-10 leading-relaxed">
            NO.2-03B 2nd floor, Intermark Mall,<br />
            348, Jln Tun Razak, Kampung Datuk Keramat,<br />
            50400 Kuala Lumpur, Federal Territory of Kuala Lumpur
          </address>
          
          <Link 
            to="/contact"
            className="inline-block px-8 py-3 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300 uppercase tracking-wider text-sm"
          >
            Schedule an Appointment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StoreShowcase;