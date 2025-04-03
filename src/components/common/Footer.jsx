// src/components/common/LuxuryFooter.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/logo1.png';

const Footer = () => {
  return (
    <footer className="relative bg-gray-950 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-amber-600/5 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-amber-600/5 blur-3xl"></div>
      
      {/* Gold accent at top */}
      <div className="h-1 w-full bg-gradient-to-r from-amber-300 via-amber-600 to-amber-300"></div>
      
      {/* Upper Footer */}
      <div className="container mx-auto px-4">
        <div className="pt-20 pb-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Brand Information */}
          <div className="lg:col-span-1 animate-fade-in">
            <Link to="/" className="block mb-8 group">
              <img src={logoImage} alt="Harrico Ceylon Gems & Jewels" className="h-16 transition-transform duration-500 group-hover:scale-105" />
            </Link>
            <p className="text-gray-400 mb-8 font-light leading-relaxed">
              Exquisite Ceylon gems and fine jewelry, handcrafted with passion and precision. Our creations embody timeless elegance and exceptional craftsmanship.
            </p>
            <div className="flex space-x-5">
              {/* Social icons with hover animations */}
              {[
                { icon: 'facebook', url: 'https://facebook.com' },
                { icon: 'instagram', url: 'https://instagram.com' },
                { icon: 'pinterest', url: 'https://pinterest.com' }
              ].map((social) => (
                <a 
                  key={social.icon} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full border border-amber-700/30 flex items-center justify-center text-amber-300 hover:text-gray-900 hover:bg-amber-400 transition-all duration-300 group overflow-hidden relative"
                  aria-label={`Follow us on ${social.icon}`}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    {social.icon === 'facebook' && (
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    )}
                    {social.icon === 'instagram' && (
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    )}
                    {social.icon === 'pinterest' && (
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="animate-fade-in delay-150">
            <h3 className="text-lg font-heading mb-6 text-amber-300">Quick Links</h3>
            <div className="w-16 h-px bg-amber-700/50 mb-6"></div>
            <ul className="space-y-4">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About Us' },
                { path: '/collections', label: 'Collections' },
                { path: '/ceylon-gems-hub', label: 'Ceylon Gems Hub' },
                { path: '/gim', label: 'GIM' },
                { path: '/contact', label: 'Contact' }
              ].map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="text-gray-400 hover:text-amber-300 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-px bg-amber-500 transition-all duration-300 mr-0 group-hover:w-3 group-hover:mr-2"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="animate-fade-in delay-300">
            <h3 className="text-lg font-heading mb-6 text-amber-300">Contact Us</h3>
            <div className="w-16 h-px bg-amber-700/50 mb-6"></div>
            <address className="not-italic text-gray-400 space-y-4">
              <div className="flex items-start group">
                <svg className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  NO.2-03B 2nd floor, Intermark Mall,<br />
                  348, Jln Tun Razak, Kampung Datuk Keramat,<br />
                  50400 Kuala Lumpur, Federal Territory of Kuala Lumpur
                </span>
              </div>
              <div className="flex items-center group">
                <svg className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="group-hover:text-gray-300 transition-colors duration-300">+60 3 2181 8000</span>
              </div>
              <div className="flex items-center group">
                <svg className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="group-hover:text-gray-300 transition-colors duration-300">harricoceylongems@gmail.com</span>
              </div>
            </address>
          </div>
          
          {/* Newsletter */}
          <div className="lg:col-span-1 animate-fade-in delay-450">
            <h3 className="text-lg font-heading mb-6 text-amber-300">Newsletter</h3>
            <div className="w-16 h-px bg-amber-700/50 mb-6"></div>
            <p className="text-gray-400 mb-6 font-light">Subscribe to receive updates on new collections and exclusive events.</p>
            <form className="flex flex-col space-y-4">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-gray-900 text-white px-4 py-3 w-full outline-none focus:ring-2 focus:ring-amber-400 border border-gray-800 transition-all duration-300 placeholder:text-gray-600"
                />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transform scale-x-0 transition-transform duration-300 origin-left group-focus-within:scale-x-100"></div>
              </div>
              <button 
                type="submit" 
                className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-3 transition-colors duration-500 uppercase tracking-widest text-sm relative overflow-hidden group"
              >
                <span className="relative z-10">Subscribe</span>
                <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-400 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800/50 text-gray-500 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Harrico Ceylon Gems & Jewels. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="#" className="hover:text-amber-300 transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-amber-300 transition-colors duration-300">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;