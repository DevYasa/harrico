// src/components/home/EnhancedStoreShowcase.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const EnhancedStoreShowcase = () => {
  return (
    <section className="py-32 relative bg-black">
      {/* Background image with parallax effect */}
      <div 
        className="absolute inset-0 bg-fixed bg-center bg-cover z-0 opacity-40"
        style={{ 
          backgroundImage: "url('https://via.placeholder.com/1920x1080/111111/FFFFFF?text=Luxury+Store')",
        }}
      ></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/30 backdrop-blur-sm p-10 md:p-16 border border-amber-500/20 relative">
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-amber-500/40"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-amber-500/40"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-amber-500/40"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-amber-500/40"></div>
            
            <div className="text-center">
              <p className="text-amber-300 tracking-[0.5em] text-sm mb-4 font-medium">LUXURY EXPERIENCE</p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-8 text-white leading-tight">Visit Our Boutique</h2>
              
              <div className="flex justify-center items-center mb-10">
                <div className="w-12 h-px bg-amber-500/60"></div>
                <div className="w-3 h-3 mx-3 rounded-full border border-amber-400 bg-amber-500/30"></div>
                <div className="w-12 h-px bg-amber-500/60"></div>
              </div>
              
              <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Experience our world of luxury at our flagship boutique in Kuala Lumpur. 
                Our knowledgeable consultants are ready to guide you through our exclusive collections
                and help you find the perfect piece that resonates with your unique style.
              </p>
              
              <address className="not-italic text-amber-100/80 mb-12 leading-relaxed">
                <span className="block mb-1 text-amber-300 font-medium">KUALA LUMPUR FLAGSHIP</span>
                NO.2-03B 2nd floor, Intermark Mall,<br />
                348, Jln Tun Razak, Kampung Datuk Keramat,<br />
                50400 Kuala Lumpur, Federal Territory of Kuala Lumpur
              </address>
              
              <Link 
                to="/contact"
                className="inline-block px-10 py-4 border-2 border-amber-400 text-amber-300 hover:bg-amber-400 hover:text-black transition-all duration-500 uppercase tracking-widest text-sm group relative overflow-hidden"
              >
                <span className="relative z-10">Schedule an Appointment</span>
                <span className="absolute inset-0 bg-amber-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Diagonal decorative divider */}
      <div className="absolute bottom-0 left-0 right-0 h-20 z-0">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 48H1440V0L0 48Z" fill="#FFF8E6" />
        </svg>
      </div>
    </section>
  );
};

export default EnhancedStoreShowcase;