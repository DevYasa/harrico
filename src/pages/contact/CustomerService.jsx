// src/pages/contact/CustomerService.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GoldDivider from '../../components/common/GoldDivider';

const CustomerService = () => {
  const [activeTab, setActiveTab] = useState('faq');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  // Animate content on tab change
  useEffect(() => {
    setAnimateIn(false);
    const timer = setTimeout(() => {
      setAnimateIn(true);
    }, 50);
    return () => clearTimeout(timer);
  }, [activeTab]);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Support form submitted:', formData);
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  // Toggle FAQ expansion
  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Essential FAQ items
  const faqs = [
    {
      question: "What gemstone certification do you provide?",
      answer: "All our precious gemstones come with GIA, Gubelin, SSEF, or our in-house GIM certification verifying authenticity, origin, and quality."
    },
    {
      question: "Do you offer jewelry cleaning services?",
      answer: "Yes, we provide complimentary cleaning and inspection for all Harrico jewelry at our boutiques."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 14-day return policy for unworn merchandise in original condition. Custom-designed pieces are non-returnable."
    },
    {
      question: "How do I care for my Ceylon sapphire?",
      answer: "Clean with mild soap and warm water using a soft brush. Avoid chemicals and store separately to prevent scratches."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Simple Header */}
      <div className="bg-[#08081a] text-white py-6 text-center">
        <h1 className="text-2xl font-serif">Customer Service</h1>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex justify-center">
          <button
            onClick={() => setActiveTab('faq')}
            className={`px-4 py-3 text-sm ${
              activeTab === 'faq' 
                ? 'border-b-2 border-[#b9a16b] text-[#08081a]' 
                : 'text-gray-500'
            }`}
          >
            FAQ
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-4 py-3 text-sm ${
              activeTab === 'contact' 
                ? 'border-b-2 border-[#b9a16b] text-[#08081a]' 
                : 'text-gray-500'
            }`}
          >
            CONTACT US
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <section className="py-8 px-4 max-w-md mx-auto">
        {/* FAQ Content */}
        {activeTab === 'faq' && (
          <div className={`${animateIn ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'} transition-all duration-500`}>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-3">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex justify-between items-center w-full text-left py-2"
                  >
                    <span className="text-sm font-medium">{faq.question}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${expandedFaq === index ? 'transform rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  {expandedFaq === index && (
                    <div className="text-sm text-gray-600 py-2 pl-1 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button
                onClick={() => setActiveTab('contact')}
                className="text-[#b9a16b] text-sm font-medium"
              >
                Need more help? Contact us
              </button>
            </div>
          </div>
        )}
        
        {/* Contact Form */}
        {activeTab === 'contact' && (
          <div className={`${animateIn ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'} transition-all duration-500`}>
            {formSubmitted ? (
              <div className="text-center py-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#08081a] flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#b9a16b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h2 className="text-xl font-serif mb-3">Thank You</h2>
                <p className="text-gray-600 mb-4">
                  We've received your message and will respond within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setActiveTab('faq');
                  }}
                  className="text-[#b9a16b] text-sm font-medium"
                >
                  Return to FAQ
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-[#b9a16b] bg-transparent"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-[#b9a16b] bg-transparent"
                  />
                </div>
                
                <div>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-[#b9a16b] bg-transparent"
                  >
                    <option value="" disabled>Select Subject</option>
                    <option value="Product Inquiry">Product Inquiry</option>
                    <option value="Order Status">Order Status</option>
                    <option value="Return/Exchange">Return/Exchange</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows="4"
                    className="w-full border border-gray-300 py-2 px-3 mt-2 focus:outline-none focus:border-[#b9a16b] bg-transparent"
                  ></textarea>
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-[#08081a] text-white py-3 uppercase text-sm tracking-wider"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </section>

      <GoldDivider />

      {/* Quick Contact Options */}
      <section className="py-8 px-4 text-center bg-gray-50">
        <h2 className="text-lg font-serif mb-4">Connect With Us</h2>
        
        <div className="flex justify-center space-x-6 mb-4">
          <a href="tel:+60321814473" className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#08081a] flex items-center justify-center mb-2">
              <svg className="w-5 h-5 text-[#b9a16b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <span className="text-xs">Call</span>
          </a>
          
          <a href="mailto:clientcare@harrico.com" className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#08081a] flex items-center justify-center mb-2">
              <svg className="w-5 h-5 text-[#b9a16b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <span className="text-xs">Email</span>
          </a>
          
          <Link to="/contact/boutiques" className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#08081a] flex items-center justify-center mb-2">
              <svg className="w-5 h-5 text-[#b9a16b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <span className="text-xs">Visit</span>
          </Link>
        </div>
        
        <p className="text-xs text-gray-500 mt-2">
          Hours: Mon-Sun, 9AM - 9PM
        </p>
      </section>

      {/* Add CSS animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in;
        }
      `}</style>
    </div>
  );
};

export default CustomerService;