import React from 'react';
import { Link } from 'react-router-dom';
import Shop from '../assets/images/shop.png';
// Import CEO image
import CEOImage from '../assets/images/haris.jpg';

const About = () => {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-amber-800 tracking-[0.3em] text-sm mb-3">OUR STORY</p>
          <h1 className="font-heading text-4xl md:text-5xl text-amber-900 mb-4">About Harrico</h1>
          <div className="w-24 h-px bg-amber-800 mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg mb-6 text-gray-700">
                Harrico Ceylon Gems & Jewels is a premier destination for exquisite Ceylon gemstones and 
                fine jewelry. We specialize in bringing the beauty and rarity of authentic Ceylon gems to 
                discerning customers worldwide.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                Founded with a passion for gemological excellence, our brand represents the pinnacle of 
                craftsmanship, quality, and ethical sourcing. Each piece in our collection is carefully 
                selected and crafted to showcase the exceptional brilliance and color of Ceylon's finest gemstones.
              </p>
            </div>
            <div className="rounded-md overflow-hidden shadow-lg">
              <img 
                src={Shop}
                alt="Harrico Workshop" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* CEO Section (Moved from GIM page) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="rounded-md overflow-hidden shadow-lg">
              <img 
                src={CEOImage}
                alt="M. Haris Yusuf - CEO" 
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl text-amber-900 mb-6">About Our CEO</h2>
              <div className="w-16 h-px bg-amber-800 mb-8"></div>
              <p className="text-lg mb-6 text-gray-700">
                M. Haris Yusuf serves as the CEO of both Harrico Gems & Jewels and the 
                Gemological Institute of Malaysia. With decades of experience in the gems and 
                jewelry industry, his expertise and vision have established GIM as a premier 
                authority on gemstone authentication and certification in Malaysia.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                Under his leadership, GIM has developed internationally recognized programs 
                in gemology, jewelry design, and manufacturing arts, ensuring that our students 
                acquire the skills needed for success in the global gem and jewelry market.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="font-heading text-3xl text-amber-900 mb-6">Our Philosophy</h2>
            <div className="w-16 h-px bg-amber-800 mb-8"></div>
            <p className="text-lg mb-6 text-gray-700">
              At Harrico, we believe that every gemstone tells a story. Our philosophy is rooted in the 
              tradition of Ceylon's gem heritage, combined with contemporary design sensibilities. We are 
              committed to ethical sourcing, ensuring that our gems are obtained through responsible practices 
              that respect both the environment and the communities involved in mining.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Our master artisans blend centuries-old techniques with modern innovation to create jewelry 
              pieces that are not merely accessories, but heirlooms to be treasured for generations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-amber-50 p-6 rounded-sm shadow-sm">
              <h3 className="font-heading text-xl text-amber-900 mb-3">Expertise</h3>
              <p className="text-gray-700">
                With decades of experience in gemology, our team has developed an exceptional eye for 
                quality and authenticity, ensuring that each gem meets our rigorous standards.
              </p>
            </div>
            <div className="bg-amber-50 p-6 rounded-sm shadow-sm">
              <h3 className="font-heading text-xl text-amber-900 mb-3">Quality</h3>
              <p className="text-gray-700">
                We personally select each gemstone for its color, clarity, cut, and character, 
                guaranteeing that only the finest examples become part of the Harrico collection.
              </p>
            </div>
            <div className="bg-amber-50 p-6 rounded-sm shadow-sm">
              <h3 className="font-heading text-xl text-amber-900 mb-3">Service</h3>
              <p className="text-gray-700">
                Our dedication to customer satisfaction extends beyond the purchase, offering 
                personalized service and expert guidance throughout your journey with us.
              </p>
            </div>
          </div>
          
          <div className="text-center">
          <Link to="/contact" className="inline-block bg-gradient-to-r from-amber-700 to-amber-800 text-white px-8 py-3 uppercase tracking-wider text-sm border border-amber-700 hover:from-transparent hover:to-transparent hover:text-amber-800 transition-all duration-300">
            Contact Us
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;