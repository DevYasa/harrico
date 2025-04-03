// src/pages/EnhancedContact.jsx
import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import LuxurySectionTitle from '../components/common/LuxurySectionTitle';
import LuxurySectionDivider from '../components/common/LuxurySectionDivider';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('kualalumpur');
  const formRef = useRef();
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Send email using EmailJS - You'll need to replace with actual credentials
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      
      if (result.text === 'OK') {
        reset();
        setSubmitSuccess(true);
        
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitError('There was an error sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Boutique location data
  const locations = {
    kualalumpur: {
      name: "Kuala Lumpur Flagship",
      address: "NO.2-03B 2nd floor, Intermark Mall,<br/>348, Jln Tun Razak, Kampung Datuk Keramat,<br/>50400 Kuala Lumpur, Federal Territory of Kuala Lumpur",
      phone: "+60 3 2181 8000",
      email: "harricoceylongems@gmail.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7748557716446!2d101.71916631475608!3d3.161643397679525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37d12d669c1f%3A0xf370508ae2ee560c!2sIntermark%20Mall!5e0!3m2!1sen!2sus!4v1616148309509!5m2!1sen!2sus",
      hours: [
        { days: "Monday - Friday", hours: "10:00 AM - 8:00 PM" },
        { days: "Saturday", hours: "10:00 AM - 9:00 PM" },
        { days: "Sunday", hours: "11:00 AM - 7:00 PM" }
      ],
      image: "https://via.placeholder.com/800x500/333333/FFFFFF?text=Kuala+Lumpur+Boutique"
    },
    penang: {
      name: "Penang Boutique",
      address: "G-18, Gurney Plaza,<br/>Persiaran Gurney,<br/>10250 Penang, Malaysia",
      phone: "+60 4 123 4567",
      email: "penang@harricoceylongems.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.0372383441205!2d100.30563427606508!3d5.432957935111171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac3abac77eb77%3A0x548e520d72db32!2sGurney%20Plaza!5e0!3m2!1sen!2smy!4v1695653526505!5m2!1sen!2smy",
      hours: [
        { days: "Monday - Friday", hours: "10:00 AM - 8:00 PM" },
        { days: "Saturday - Sunday", hours: "10:00 AM - 9:00 PM" }
      ],
      image: "https://via.placeholder.com/800x500/333333/FFFFFF?text=Penang+Boutique"
    },
    london: {
      name: "London Showcase",
      address: "72 Hatton Garden,<br/>London EC1N 8JT,<br/>United Kingdom",
      phone: "+44 20 7123 4567",
      email: "london@harricoceylongems.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.7407162050153!2d-0.10948242302223865!3d51.520531979538256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b4ef9e22553%3A0x9a3a369b73a39aed!2s72%20Hatton%20Garden%2C%20London%20EC1N%208JT%2C%20UK!5e0!3m2!1sen!2smy!4v1695653734329!5m2!1sen!2smy",
      hours: [
        { days: "Monday - Friday", hours: "10:00 AM - 6:00 PM" },
        { days: "Saturday", hours: "10:00 AM - 5:00 PM" },
        { days: "Sunday", hours: "Closed" }
      ],
      image: "https://via.placeholder.com/800x500/333333/FFFFFF?text=London+Showcase"
    }
  };

  return (
    <div className="pt-32 pb-20 bg-white">
      {/* Hero Section */}
      <div className="relative h-80 mb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-black/80"></div>
          <img
            src="https://via.placeholder.com/1920x500/333333/FFFFFF?text=Contact+Us" 
            alt="Contact Harrico"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-5xl text-white mb-6">Contact Us</h1>
              <div className="w-24 h-px bg-amber-400 mx-auto mb-8"></div>
              <p className="text-amber-100 text-xl leading-relaxed">
                We would be delighted to answer your questions, assist with your inquiries, 
                or arrange a private consultation at one of our exclusive boutiques.
              </p>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 border-t-2 border-l-2 border-amber-400/30"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 border-b-2 border-r-2 border-amber-400/30"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Boutique Locations Tabs */}
        <div className="max-w-5xl mx-auto mb-20">
          <LuxurySectionTitle 
            subtitle="OUR LOCATIONS"
            title="Visit Our Boutiques"
            description="Experience our world of luxury at one of our exclusive boutique locations, where our expert consultants await to provide you with personalized service."
            alignment="center"
            color="amber"
          />
          
          {/* Location Tabs */}
          <div className="mt-16 flex justify-center border-b border-amber-200">
            {Object.keys(locations).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedLocation(key)}
                className={`px-8 py-4 text-sm font-medium tracking-wider uppercase transition-all duration-300 relative ${
                  selectedLocation === key 
                    ? 'text-amber-700' 
                    : 'text-gray-500 hover:text-amber-600'
                }`}
              >
                {locations[key].name}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 transform transition-transform origin-left duration-300 ${
                    selectedLocation === key ? 'scale-x-100' : 'scale-x-0'
                  }`}
                ></span>
              </button>
            ))}
          </div>
          
          {/* Selected Location Details */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Location Image */}
            <div>
              <div className="relative rounded-sm overflow-hidden shadow-lg h-72 lg:h-full">
                <img 
                  src={locations[selectedLocation].image} 
                  alt={locations[selectedLocation].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-2xl text-white mb-2">{locations[selectedLocation].name}</h3>
                  <div className="w-12 h-px bg-amber-400 mb-2"></div>
                </div>
              </div>
            </div>
            
            {/* Location Details */}
            <div className="bg-amber-50 p-8 rounded-sm shadow-sm">
              <h3 className="font-heading text-2xl text-amber-900 mb-6">Visit Our Store</h3>
              
              <address className="not-italic text-gray-700 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: locations[selectedLocation].address }} />
              
              <div className="flex items-start mb-2">
                <svg className="w-5 h-5 text-amber-700 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-gray-700">{locations[selectedLocation].phone}</span>
              </div>
              
              <div className="flex items-start mb-6">
                <svg className="w-5 h-5 text-amber-700 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-gray-700">{locations[selectedLocation].email}</span>
              </div>
              
              <h3 className="font-heading text-lg text-amber-800 mb-3">Business Hours</h3>
              <div className="space-y-2 text-gray-700 mb-6">
                {locations[selectedLocation].hours.map((hour, index) => (
                  <p key={index} className="flex justify-between">
                    <span>{hour.days}:</span>
                    <span>{hour.hours}</span>
                  </p>
                ))}
              </div>
              
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(locations[selectedLocation].address.replace(/<br\/>/g, ' '))}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-amber-800 text-white px-6 py-3 rounded-sm uppercase tracking-wider text-sm hover:bg-amber-700 transition-colors duration-300"
              >
                Get Directions
                <svg className="w-4 h-4 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Map */}
          <div className="mt-12 h-96 rounded-sm overflow-hidden shadow-lg">
            <iframe 
              src={locations[selectedLocation].mapUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title={`${locations[selectedLocation].name} Map`}
            ></iframe>
          </div>
        </div>
        
        {/* Divider */}
        <LuxurySectionDivider type="double-line" color="amber" />
        
        {/* Contact Form Section */}
        <div className="max-w-5xl mx-auto py-16">
          <LuxurySectionTitle 
            subtitle="GET IN TOUCH"
            title="Send Us a Message"
            description="Whether you have a question about our products, services, or would like to schedule a private consultation, we're here to help."
            alignment="center"
            color="amber"
          />
          
          <div className="mt-16 bg-white shadow-xl border border-amber-100/50 p-10 rounded-sm">
            {submitSuccess && (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-sm p-4 mb-8 flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Message sent successfully! We'll get back to you shortly.</span>
              </div>
            )}
            
            {submitError && (
              <div className="bg-red-50 border border-red-200 text-red-800 rounded-sm p-4 mb-8 flex items-center">
                <svg className="w-5 h-5 mr-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>{submitError}</span>
              </div>
            )}
            
            <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Hidden field to specify recipient email */}
              <input 
                type="hidden" 
                name="to_email" 
                value="harricoceylongems@gmail.com" 
              />
              
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Full Name <span className="text-amber-700">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-gray-50 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Your Name"
                  {...register("name", { 
                    required: "Name is required",
                    minLength: { value: 2, message: "Name must be at least 2 characters" }
                  })}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email Address <span className="text-amber-700">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-gray-50 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Your Email"
                  {...register("email", { 
                    required: "Email is required", 
                    pattern: { 
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                      message: "Invalid email address" 
                    }
                  })}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-gray-50 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Your Phone Number"
                  {...register("phone", { 
                    pattern: { 
                      value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/i, 
                      message: "Invalid phone number" 
                    }
                  })}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium">Subject <span className="text-amber-700">*</span></label>
                <select
                  id="subject"
                  name="subject"
                  className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-gray-50 ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                  {...register("subject", { required: "Please select a subject" })}
                >
                  <option value="">Select a subject</option>
                  <option value="Product Inquiry">Product Inquiry</option>
                  <option value="Appointment Request">Appointment Request</option>
                  <option value="Custom Design Request">Custom Design Request</option>
                  <option value="Certification Services">Certification Services (GIM)</option>
                  <option value="Ceylon Products">Ceylon Products</option>
                  <option value="Other">Other</option>
                </select>
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message <span className="text-amber-700">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-gray-50 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Your Message"
                  {...register("message", { 
                    required: "Message is required",
                    minLength: { value: 10, message: "Message must be at least 10 characters" }
                  })}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-amber-700 to-amber-800 text-white py-4 px-6 rounded-sm border border-amber-700 hover:from-transparent hover:to-transparent hover:text-amber-800 transition-all duration-300 uppercase tracking-wider text-sm ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Customer Service Benefits */}
        <div className="max-w-5xl mx-auto py-16 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-amber-50 p-8 rounded-sm text-center">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl text-amber-900 mb-3">Fast Response</h3>
              <p className="text-gray-700">
                Our dedicated team strives to respond to all inquiries within 24 hours.
              </p>
            </div>
            
            <div className="bg-amber-50 p-8 rounded-sm text-center">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl text-amber-900 mb-3">Expert Consultants</h3>
              <p className="text-gray-700">
                Our gemological experts provide personalized advice and guidance for your every need.
              </p>
            </div>
            
            <div className="bg-amber-50 p-8 rounded-sm text-center">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="font-heading text-xl text-amber-900 mb-3">Customized Solutions</h3>
              <p className="text-gray-700">
                We tailor our services to meet your specific requirements and preferences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;