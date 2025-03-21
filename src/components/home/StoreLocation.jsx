// src/components/home/StoreLocation.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const StoreLocation = () => {
  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-amber-900 mb-6">Visit Our Boutique</h2>
            <div className="w-20 h-1 bg-amber-700 mb-8"></div>
            <p className="text-gray-700 mb-6 text-lg">
              Experience our exquisite collection of Ceylon gems and custom jewelry at our
              flagship store in Kuala Lumpur. Our knowledgeable staff is ready to assist you
              in finding the perfect piece.
            </p>
            
            <div className="mb-8">
              <h3 className="font-serif text-xl text-amber-800 mb-3">Kuala Lumpur Store</h3>
              <address className="not-italic text-gray-600 mb-4 leading-relaxed">
                NO.2-03B 2nd floor, Intermark Mall,<br />
                348, Jln Tun Razak, Kampung Datuk Keramat,<br />
                50400 Kuala Lumpur, Federal Territory of Kuala Lumpur
              </address>
              
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-amber-700 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-gray-600">+60 3 2181 8000</span>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 text-amber-700 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-gray-600">info@harrico.com</span>
              </div>
            </div>
            
            <Link 
              to="/contact"
              className="bg-amber-800 text-white px-6 py-3 inline-flex items-center hover:bg-amber-700 transition duration-300"
            >
              Contact Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          
          <div className="relative h-96 lg:h-auto">
          <img 
            src="https://via.placeholder.com/800x600/EEEEEE/333333?text=Harrico+Store" 
            alt="Harrico Store" 
            className="h-full w-full object-cover rounded-md shadow-lg"
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocation;