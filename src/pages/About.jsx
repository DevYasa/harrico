// src/pages/EnhancedAbout.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import LuxurySectionTitle from '../components/common/LuxurySectionTitle';
import LuxurySectionDivider from '../components/common/LuxurySectionDivider';

// Import images
import CEOImage from '../assets/images/haris.jpg';
import ShopImage from '../assets/images/shop.png';
import GemCuttingImg from '../assets/images/services/gem-cutting.jpg';
import JewelryDesignImg from '../assets/images/services/jewelry-design.jpg';
import GoldMiningImg from '../assets/images/services/gold-mining.jpeg';
import GIMImg from '../assets/images/gim.jpg';

const About = () => {
  return (
    <div className="pt-32 pb-20 bg-white">
      {/* Hero Section */}
      <div className="relative h-96 mb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-black/80"></div>
          <img
            src="https://via.placeholder.com/1920x600/333333/FFFFFF?text=Harrico+Legacy" 
            alt="Harrico Legacy"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="font-heading text-5xl md:text-6xl text-white mb-6">Our Legacy</h1>
              <div className="w-24 h-px bg-amber-400 mx-auto mb-8"></div>
              <p className="text-amber-100 text-xl leading-relaxed">
                Discover the heritage of excellence behind Harrico Ceylon Gems & Jewels,
                where passion for gemological perfection meets artisanal craftsmanship.
              </p>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 border-t-2 border-l-2 border-amber-400/30"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 border-b-2 border-r-2 border-amber-400/30"></div>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Our Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 md:order-1">
            <p className="text-amber-800 tracking-[0.3em] text-sm mb-3 uppercase">Our Story</p>
            <h2 className="font-heading text-4xl text-amber-900 mb-6">A Legacy of Excellence</h2>
            <div className="w-20 h-px bg-amber-500 mb-8"></div>
            
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              Harrico Ceylon Gems & Jewels is a premier destination for exquisite gemstones and 
              fine jewelry. Founded with a passion for gemological excellence, our brand represents 
              the pinnacle of craftsmanship, quality, and ethical sourcing.
            </p>
            
            <p className="text-lg mb-8 text-gray-700 leading-relaxed">
              Our journey began with a singular vision: to showcase the exceptional beauty of Ceylon's 
              precious gems to the world. Today, that vision has expanded to encompass a complete ecosystem 
              of gem and jewelry excellence—from mining and cutting to design and retail.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-700 font-heading text-xl">30+</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-amber-900">Years</h3>
                  <p className="text-gray-600 text-sm">of Expertise</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-700 font-heading text-xl">3</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-amber-900">Countries</h3>
                  <p className="text-gray-600 text-sm">Global Presence</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-700 font-heading text-xl">∞</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-amber-900">Commitment</h3>
                  <p className="text-gray-600 text-sm">to Excellence</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              {/* Main image */}
              <div className="rounded-md overflow-hidden shadow-2xl z-10 relative">
                <img 
                  src={ShopImage}
                  alt="Harrico Boutique" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-64 h-64 border-2 border-amber-200 rounded-md z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-full h-full bg-amber-50 rounded-md z-0"></div>
            </div>
          </div>
        </div>
        
        {/* CEO Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <div className="relative">
              {/* Main image with gold border */}
              <div className="border-2 border-amber-300 p-3 rounded shadow-xl">
                <img 
                  src={CEOImage}
                  alt="M. Haris Yusuf - CEO" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Gold accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-amber-400 to-amber-600 opacity-20 blur-xl rounded-full"></div>
            </div>
          </div>
          
          <div>
            <p className="text-amber-800 tracking-[0.3em] text-sm mb-3 uppercase">Leadership</p>
            <h2 className="font-heading text-4xl text-amber-900 mb-6">About Our Founder</h2>
            <div className="w-20 h-px bg-amber-500 mb-8"></div>
            
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              M. Haris Yusuf serves as the visionary founder and CEO of Harrico Ceylon Gems & Jewels, 
              as well as the Gemological Institute of Malaysia (GIM). With decades of experience in 
              the gems and jewelry industry, his expertise and vision have established Harrico as a 
              premier name in luxury gemstones and jewelry.
            </p>
            
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              Under his leadership, Harrico has expanded from a boutique gem trading business to an 
              integrated enterprise encompassing mining, cutting, jewelry design, manufacturing, and 
              education through GIM, ensuring that our customers receive only the finest gems and jewelry 
              backed by professional expertise and certification.
            </p>
            
            <div className="mt-8 flex items-center">
              <img 
                src="https://via.placeholder.com/120/FFFFFF?text=Signature" 
                alt="M. Haris Yusuf Signature" 
                className="h-16 mr-6"
              />
              <div>
                <h3 className="font-heading text-xl text-amber-900">M. Haris Yusuf</h3>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <LuxurySectionDivider type="diamond" color="amber" />
        
        {/* Our Businesses Section */}
        <div className="py-20">
          <LuxurySectionTitle 
            subtitle="OUR ENTERPRISES"
            title="The Harrico Group"
            description="Discover our integrated family of businesses that ensure exceptional quality at every stage of our gems and jewelry journey."
            alignment="center"
            color="amber"
            size="default"
            animation="fade"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {/* Gems Mining */}
            <div className="bg-white border border-amber-100 rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={GemCuttingImg || "https://via.placeholder.com/600x400/333333/FFFFFF?text=Gem+Mining"}
                  alt="Ceylon Gems Mining" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 via-amber-800/40 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-2xl text-white mb-2">Ceylon Gems Mining</h3>
                  <div className="w-12 h-px bg-amber-400 mb-3"></div>
                  <p className="text-amber-100">Ethically sourcing the finest gemstones from Ceylon's legendary deposits</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Direct from Source</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Rare & Exceptional Specimens</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Jewelry Design & Manufacturing */}
            <div className="bg-white border border-amber-100 rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={JewelryDesignImg || "https://via.placeholder.com/600x400/333333/FFFFFF?text=Jewelry+Design"}
                  alt="Jewelry Design & Manufacturing" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 via-amber-800/40 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-2xl text-white mb-2">Jewelry Creation</h3>
                  <div className="w-12 h-px bg-amber-400 mb-3"></div>
                  <p className="text-amber-100">From design concept to finished masterpiece through expert craftsmanship</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Custom Design Services</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Master Artisan Craftsmanship</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Precision Casting & Setting</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* GIM */}
            <div className="bg-white border border-amber-100 rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={GIMImg || "https://via.placeholder.com/600x400/333333/FFFFFF?text=GIM"}
                  alt="Gemological Institute of Malaysia" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 via-amber-800/40 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-2xl text-white mb-2">GIM</h3>
                  <div className="w-12 h-px bg-amber-400 mb-3"></div>
                  <p className="text-amber-100">Gemological Institute of Malaysia: Education, certification & authentication</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Gemological Certification</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Professional Education</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Advanced Gemological Research</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Gold Mining */}
            <div className="bg-white border border-amber-100 rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={GoldMiningImg || "https://via.placeholder.com/600x400/333333/FFFFFF?text=Gold+Mining"}
                  alt="Gold Mining Ghana" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 via-amber-800/40 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-2xl text-white mb-2">Gold Mining</h3>
                  <div className="w-12 h-px bg-amber-400 mb-3"></div>
                  <p className="text-amber-100">Harrico Gold Mining Ghana: Ethical gold sourcing for our finest creations</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Responsible Mining Practices</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Community Support Programs</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>High-Purity Gold Production</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Gem Family Museum */}
            <div className="bg-white border border-amber-100 rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src="https://via.placeholder.com/600x400/333333/FFFFFF?text=Gem+Museum"
                  alt="Family Gem Museum" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 via-amber-800/40 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-2xl text-white mb-2">Gem Museum</h3>
                  <div className="w-12 h-px bg-amber-400 mb-3"></div>
                  <p className="text-amber-100">Showcasing rare specimens and educating visitors about gemological heritage</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Rare Gem Collection</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Educational Exhibits</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Historical Gem Archives</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Ceylon Products */}
            <div className="bg-white border border-amber-100 rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src="https://via.placeholder.com/600x400/333333/FFFFFF?text=Ceylon+Products"
                  alt="Ceylon Products" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 via-amber-800/40 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-2xl text-white mb-2">Ceylon Products</h3>
                  <div className="w-12 h-px bg-amber-400 mb-3"></div>
                  <p className="text-amber-100">Premium authentic Ceylon specialties from the island of treasures</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Ceylon Tea & Spices</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Ceylon Virgin Coconut Oil</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Premium Ceylon Exports</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Philosophy Section */}
        <div className="bg-amber-50 py-20 px-8 md:px-16 my-20 relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-amber-400/50"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-amber-400/50"></div>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-amber-800 tracking-[0.3em] text-sm mb-3 uppercase">Our Philosophy</p>
            <h2 className="font-heading text-4xl text-amber-900 mb-8">The Harrico Commitment</h2>
            
            <div className="w-24 h-px bg-amber-500 mx-auto mb-12"></div>
            
            <p className="text-xl italic font-light text-amber-900 mb-12 leading-relaxed">
              "Every gemstone tells a story. At Harrico, we are dedicated to preserving the legacy 
              of Ceylon's gem heritage while offering our clients unparalleled quality, authenticity, 
              and craftsmanship in every piece that bears our name."
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-6 shadow-md">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl text-amber-900 mb-3">Uncompromising Quality</h3>
                <p className="text-gray-700">
                  We select only the finest gemstones and materials, maintaining rigorous quality standards 
                  at every stage of production.
                </p>
              </div>
              
              <div>
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-6 shadow-md">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl text-amber-900 mb-3">Authenticity Guaranteed</h3>
                <p className="text-gray-700">
                  Every Harrico gem is authenticated and certified, ensuring complete transparency 
                  and peace of mind for our clients.
                </p>
              </div>
              
              <div>
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-6 shadow-md">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl text-amber-900 mb-3">Ethical Sourcing</h3>
                <p className="text-gray-700">
                  We are committed to responsible sourcing practices that respect communities, 
                  cultural heritage, and the environment.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center my-20">
          <h2 className="font-heading text-3xl text-amber-900 mb-6">Experience the Harrico Difference</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
            We invite you to discover our exceptional collections and experience the quality, craftsmanship, 
            and service that define the Harrico legacy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/collections"
              className="inline-block bg-gradient-to-r from-amber-700 to-amber-800 text-white px-8 py-3 uppercase tracking-wider text-sm border border-amber-700 hover:from-transparent hover:to-transparent hover:text-amber-800 transition-all duration-300"
            >
              Explore Our Collections
            </Link>
            <Link 
              to="/contact"
              className="inline-block bg-transparent text-amber-800 px-8 py-3 uppercase tracking-wider text-sm border border-amber-800 hover:bg-amber-800 hover:text-white transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;