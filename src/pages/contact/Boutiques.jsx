// src/pages/contact/Boutiques.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import KLStoreImage from '../../assets/images/about/kl-showroom.gif';
import PenangShowroomImage from '../../assets/images/about/penang-showroom.gif';
import LondonOfficeImage from '../../assets/images/about/london-office.gif';

const Boutiques = () => {
  const [activeLocation, setActiveLocation] = useState('flagship-kl');
  const [animateIn, setAnimateIn] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);

  // Initial page load animation
  useEffect(() => {
    // Set a small delay for dramatic effect
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Animate content on location change
  useEffect(() => {
    setAnimateIn(false);
    const timer = setTimeout(() => {
      setAnimateIn(true);
    }, 300);
    return () => clearTimeout(timer);
  }, [activeLocation]);

  // Store locations
  const storeLocations = [
    {
      id: 'flagship-kl',
      name: 'Kuala Lumpur',
      location: 'Flagship Store',
      address: 'NO.2-03B 2nd floor, Intermark Mall, 348, Jln Tun Razak, 50400 Kuala Lumpur',
      image: KLStoreImage,
      hours: 'Monday - Sunday: 9AM - 9PM',
      phone: '+60 3-2181 4473',
      mapUrl: 'https://maps.app.goo.gl/5ZhQ7FDV9LJVscH48',
    },
    {
      id: 'penang-showroom',
      name: 'Penang',
      location: 'Showroom',
      address: 'Parkroyal Hotel, No. 5 & 4, Batu Ferringhi Beach, 11100 Penang',
      image: PenangShowroomImage,
      hours: 'Monday - Sunday: 9AM - 9PM',
      phone: '+60 4-881 1133',
      mapUrl: 'https://maps.app.goo.gl/bB8Bf5uPUFuGxfFw5',
    },
    {
      id: 'london-office',
      name: 'London',
      location: 'Office',
      address: '33 Westminster Drive, London N13 4NT, England',
      image: LondonOfficeImage,
      hours: 'Monday - Friday: 9AM - 5PM (By appointment only)',
      phone: '+44 20 8886 8261',
      mapUrl: 'https://maps.app.goo.gl/XYZ123',
    }
  ];

  // Get active store details
  const activeStore = storeLocations.find(store => store.id === activeLocation);

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Elegant background pattern overlay */}
      <div className="absolute inset-0 bg-repeat opacity-5 pointer-events-none z-0" 
           style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b9a16b' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}
      ></div>

      {/* Header Section with Logo Lines */}
      <header className={`bg-[#08081a] text-white pb-8 relative ${pageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        {/* Logo Lines */}
        <div className="flex items-center justify-center pt-3 pb-2">
          <div className="w-24 h-px bg-[#b9a16b] transform transition-transform duration-1000 ease-out scale-x-0 origin-right" 
               style={{transform: pageLoaded ? 'scaleX(1)' : 'scaleX(0)'}}></div>
          <div className="mx-2 transition-transform duration-700 ease-out delay-300" 
               style={{transform: pageLoaded ? 'scale(1)' : 'scale(0)'}}>
          </div>
          <div className="w-24 h-px bg-[#b9a16b] transform transition-transform duration-1000 ease-out scale-x-0 origin-left" 
               style={{transform: pageLoaded ? 'scaleX(1)' : 'scaleX(0)'}}></div>
        </div>
        
        {/* Page Title with text reveal animation */}
        <h1 className="text-3xl md:text-4xl font-serif text-center pt-2 overflow-hidden">
          <span className="block transform transition-transform duration-700 delay-700" 
                style={{transform: pageLoaded ? 'translateY(0)' : 'translateY(100%)'}}>
            Our Boutiques
          </span>
        </h1>
      </header>

      {/* Location Tabs with elegant gold underline */}
      <div className="border-b border-[#b9a16b]/30 relative">
        <div className="flex justify-center overflow-x-auto">
          {storeLocations.map((store) => (
            <button
              key={store.id}
              onClick={() => setActiveLocation(store.id)}
              className={`px-6 py-4 text-sm font-medium transition-all duration-300 relative ${
                activeLocation === store.id 
                  ? 'text-[#08081a]' 
                  : 'text-gray-500 hover:text-[#b9a16b]'
              }`}
            >
              {store.name}
              {/* Animated underline for active tab */}
              {activeLocation === store.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#b9a16b] transform transition-transform duration-300" 
                      style={{transform: 'scaleX(1)'}}></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Location Details with elegant fade and slide animations */}
      <section className="py-8 px-4 max-w-md mx-auto relative z-10">
        <div className={`mb-6 transform transition-all duration-700 ease-out ${animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <div className="overflow-hidden rounded-sm shadow-lg">
            <img 
              src={activeStore.image} 
              alt={`Harrico ${activeStore.name} ${activeStore.location}`}
              className="w-full h-auto transform transition-transform duration-10000 hover:scale-105" 
            />
          </div>
        </div>
        
        <div className={`text-center mb-8 transform transition-all duration-700 delay-200 ease-out ${animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}>
          <h2 className="text-2xl font-serif mb-1">{activeStore.name}</h2>
          <p className="text-sm text-[#b9a16b] mb-1">{activeStore.location}</p>
          <div className="w-12 h-px bg-[#b9a16b]/50 mx-auto my-3 transform transition-transform duration-700 delay-300" 
               style={{transform: animateIn ? 'scaleX(1)' : 'scaleX(0)'}}></div>
        </div>
        
        <div className={`space-y-5 mb-10 transform transition-all duration-700 delay-300 ease-out ${animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="flex items-start group">
            <div className="w-8 text-[#b9a16b] group-hover:text-[#08081a] transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-700 group-hover:text-[#08081a] transition-colors duration-300">{activeStore.address}</p>
            </div>
          </div>
          
          <div className="flex items-start group">
            <div className="w-8 text-[#b9a16b] group-hover:text-[#08081a] transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-700 group-hover:text-[#08081a] transition-colors duration-300">{activeStore.hours}</p>
            </div>
          </div>
          
          <div className="flex items-start group">
            <div className="w-8 text-[#b9a16b] group-hover:text-[#08081a] transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <div className="flex-1">
              <a href={`tel:${activeStore.phone}`} className="text-sm text-gray-700 hover:text-[#b9a16b] transition-colors duration-300">
                {activeStore.phone}
              </a>
            </div>
          </div>
        </div>
        
        <div className={`flex justify-center space-x-4 transform transition-all duration-700 delay-400 ease-out ${animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <a 
            href={activeStore.mapUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-[#b9a16b] text-[#b9a16b] px-6 py-2 text-xs tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300 hover:shadow-lg"
          >
            GET DIRECTIONS
          </a>
          <Link 
            to="/contact/appointment" 
            className="bg-[#08081a] text-white px-6 py-2 text-xs tracking-widest uppercase hover:bg-[#0f0f2b] transition-all duration-300 hover:shadow-lg"
          >
            BOOK APPOINTMENT
          </Link>
        </div>
      </section>

      {/* Elegant gold divider */}
      <div className="flex justify-center py-8">
        <div className="relative w-full max-w-xs mx-auto h-px">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#b9a16b] to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-[#b9a16b] flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#b9a16b]"></div>
          </div>
        </div>
      </div>

      {/* Map Section with subtle reveal animation */}
      <section className={`py-6 px-4 max-w-md mx-auto transform transition-all duration-700 ease-out ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} delay-300`}>
        <div className="bg-white shadow-sm overflow-hidden rounded-sm">
          <iframe 
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8059646377743!2d101.71931547607549!3d3.161333452678842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37d5aaaf274b%3A0xaa74fa2c9d68a5f2!2sThe%20Intermark%20Mall!5e0!3m2!1sen!2sus!4v1712321689638!5m2!1sen!2sus`} 
            width="100%" 
            height="200" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title={`Harrico ${activeStore.name} Location`}
            className="w-full"
          ></iframe>
        </div>
      </section>

      {/* Private Consultation with elegant gradient background */}
      <section className="py-10 mt-4 px-4 text-center bg-gradient-to-b from-[#08081a] to-[#121228] text-white transform transition-all duration-700 ease-out delay-500" 
               style={{opacity: pageLoaded ? 1 : 0}}>
        <h2 className="text-xl font-serif mb-4">Private Consultation</h2>
        <p className="text-sm text-gray-300 mb-6 max-w-xs mx-auto">
          Schedule a private consultation to discover our exclusive collections in a personalized setting.
        </p>
        <Link 
          to="/contact/appointment" 
          className="inline-block border border-[#b9a16b] bg-transparent text-[#b9a16b] px-8 py-2 text-xs tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-500 group relative overflow-hidden"
        >
          <span className="relative z-10">BOOK APPOINTMENT</span>
          <span className="absolute top-0 left-0 w-full h-0 bg-[#b9a16b] transition-all duration-300 group-hover:h-full"></span>
        </Link>
      </section>

      {/* Add premium animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes shimmer {
          0% { background-position: -100% 0; }
          100% { background-position: 100% 0; }
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, rgba(185,161,107,0.1) 0%, rgba(185,161,107,0.3) 50%, rgba(185,161,107,0.1) 100%);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        
        .animate-fade-in {
          animation: fadeIn 1.2s ease-out forwards;
        }
        
        .animate-slide-in {
          animation: slideIn 1.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Boutiques;