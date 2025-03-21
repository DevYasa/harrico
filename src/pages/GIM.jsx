import React from 'react';
// You'll need to import the GIM image
import GIMImage from '../assets/images/gim.jpg';

const GIM = () => {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-amber-800 tracking-[0.3em] text-sm mb-3">EXPLORE</p>
          <h1 className="font-heading text-4xl md:text-5xl text-amber-900 mb-4">Gemological Institute of Malaysia</h1>
          <div className="w-24 h-px bg-amber-800 mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <img 
              src={GIMImage}
              alt="Gemological Institute of Malaysia Preview" 
              className="w-full h-auto rounded-md shadow-lg mb-8"
            />
            
            <p className="text-lg text-gray-700 mb-8">
              The Gemological Institute of Malaysia (GIM) is our premier educational institution for 
              gemology and jewelry arts, owned and operated by Harrico Gems & Jewels. GIM provides 
              comprehensive certification and training in gem authentication, jewelry design, and manufacturing.
            </p>
            
            <p className="text-lg text-gray-700 mb-12">
              With state-of-the-art equipment and expert instructors, GIM ensures that every 
              Harrico gemstone meets the highest standards of quality and authenticity, backed
              by official GIM certification.
            </p>
            
            <a 
              href="https://your-gim-website-url.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-gradient-to-r from-amber-700 to-amber-800 text-white px-8 py-3 uppercase tracking-wider text-sm border border-amber-700 hover:from-transparent hover:to-transparent hover:text-amber-800 transition-all duration-300"
            >
              Explore GIM Programs
              <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-amber-50 p-6 rounded-sm shadow-sm">
              <h3 className="font-heading text-xl text-amber-900 mb-3">Expert Certification</h3>
              <p className="text-gray-700">
                Our comprehensive gemstone certification includes detailed analysis of properties, origin, and quality factors, meeting international standards.
              </p>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-sm shadow-sm">
              <h3 className="font-heading text-xl text-amber-900 mb-3">Educational Programs</h3>
              <p className="text-gray-700">
                From Graduate Gemologist diplomas to Jewelry Design courses, GIM offers professional training for all aspects of the jewelry industry.
              </p>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-sm shadow-sm">
              <h3 className="font-heading text-xl text-amber-900 mb-3">Advanced Technology</h3>
              <p className="text-gray-700">
                Our laboratories feature cutting-edge equipment for precise gem analysis, grading, and authentication procedures.
              </p>
            </div>
          </div>
          
          <div className="bg-amber-50 p-8 rounded-md shadow-sm mb-16">
            <h2 className="text-2xl font-heading text-amber-900 mb-4 text-center">Our Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="p-4 border border-amber-200 rounded-sm bg-white">
                <h3 className="font-heading text-lg text-amber-900 mb-2">Graduate Gemologist Diploma</h3>
                <p className="text-gray-700">Comprehensive training in diamond and colored stone grading, identification, and evaluation.</p>
              </div>
              <div className="p-4 border border-amber-200 rounded-sm bg-white">
                <h3 className="font-heading text-lg text-amber-900 mb-2">Jewelry Design Certificate</h3>
                <p className="text-gray-700">Learn to create custom jewelry designs using traditional and CAD/CAM techniques.</p>
              </div>
              <div className="p-4 border border-amber-200 rounded-sm bg-white">
                <h3 className="font-heading text-lg text-amber-900 mb-2">Graduate Jeweler Diploma</h3>
                <p className="text-gray-700">Master metal working, fabrication, jewelry repair, and stone setting skills.</p>
              </div>
              <div className="p-4 border border-amber-200 rounded-sm bg-white">
                <h3 className="font-heading text-lg text-amber-900 mb-2">Accredited Jewelry Professional</h3>
                <p className="text-gray-700">Essential product knowledge and sales techniques for jewelry retail professionals.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-xl font-serif italic text-amber-800 mb-8">
              "Every Harrico gemstone comes with a GIM certificate of authenticity, ensuring that our customers receive only the finest quality gems with verified properties."
            </p>
            <a 
              href="mailto:info@gim-malaysia.com" 
              className="inline-block bg-gradient-to-r from-amber-700 to-amber-800 text-white px-8 py-3 uppercase tracking-wider text-sm border border-amber-700 hover:from-transparent hover:to-transparent hover:text-amber-800 transition-all duration-300"
            >
              Contact GIM
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GIM;