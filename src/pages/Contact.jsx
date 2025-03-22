// src/pages/Contact.jsx
import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const formRef = useRef();
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Send email using EmailJS
      // You'll need to sign up at emailjs.com and get these credentials
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Create a service with Gmail or another provider
        'YOUR_TEMPLATE_ID', // Create an email template 
        formRef.current,
        'YOUR_PUBLIC_KEY' // Your EmailJS public key
      );
      
      if (result.text === 'OK') {
        // Reset form and show success message
        reset();
        setSubmitSuccess(true);
        
        // Hide success message after 5 seconds
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

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header section remains the same */}
        <div className="text-center mb-16">
          <p className="text-amber-800 tracking-[0.3em] text-sm mb-3">GET IN TOUCH</p>
          <h1 className="font-heading text-4xl md:text-5xl text-amber-900 mb-4">Contact Us</h1>
          <div className="w-24 h-px bg-amber-800 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We would be delighted to assist you with any inquiries about our gemstones, 
            jewelry collections, or custom design services.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info section remains the same */}
            <div className="lg:col-span-2 bg-amber-50 p-8 rounded-sm shadow-sm">
              {/* Contact details as before */}
              <h2 className="font-heading text-2xl text-amber-900 mb-6">Our Boutique</h2>
              
              <div className="mb-8">
                <h3 className="font-heading text-lg text-amber-800 mb-3">Visit Our Store</h3>
                <address className="not-italic text-gray-700 mb-6 leading-relaxed">
                  NO.2-03B 2nd floor, Intermark Mall,<br />
                  348, Jln Tun Razak, Kampung Datuk Keramat,<br />
                  50400 Kuala Lumpur, Federal Territory of Kuala Lumpur
                </address>
                
                <div className="flex items-start mb-2">
                  <svg className="w-5 h-5 text-amber-700 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-gray-700">+60 3 2181 8000</span>
                </div>
                <div className="flex items-start mb-6">
                  <svg className="w-5 h-5 text-amber-700 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-gray-700">harricoceylongems@gmail.com</span>
                </div>
              </div>
              
              <h3 className="font-heading text-lg text-amber-800 mb-3">Business Hours</h3>
              <div className="space-y-2 text-gray-700">
                <p className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>10:00 AM - 8:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 9:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>
                  <span>11:00 AM - 7:00 PM</span>
                </p>
              </div>
            </div>
            
            {/* Contact Form - 3 columns */}
            <div className="lg:col-span-3">
              {submitSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-sm p-4 mb-6 flex items-center">
                  <svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Message sent successfully! We'll get back to you shortly.</span>
                </div>
              )}
              
              {submitError && (
                <div className="bg-red-50 border border-red-200 text-red-800 rounded-sm p-4 mb-6 flex items-center">
                  <svg className="w-5 h-5 mr-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>{submitError}</span>
                </div>
              )}
              
              <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <h2 className="font-heading text-2xl text-amber-900 mb-6">Send Us a Message</h2>
                </div>
                
                {/* Hidden field to specify recipient email */}
                <input 
                  type="hidden" 
                  name="to_email" 
                  value="harricoceylongems@gmail.com" 
                />
                
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Your Name"
                    {...register("name", { 
                      required: "Name is required",
                      minLength: { value: 2, message: "Name must be at least 2 characters" }
                    })}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
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
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={`w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
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
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject <span className="text-red-500">*</span></label>
                  <select
                    id="subject"
                    name="subject"
                    className={`w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                    {...register("subject", { required: "Please select a subject" })}
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Schedule an Appointment">Schedule an Appointment</option>
                    <option value="Custom Design Request">Custom Design Request</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message <span className="text-red-500">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className={`w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
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
                    className={`w-full bg-gradient-to-r from-amber-700 to-amber-800 text-white py-3 px-6 rounded-sm border border-amber-700 hover:from-transparent hover:to-transparent hover:text-amber-800 transition-all duration-300 uppercase tracking-wider text-sm ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
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
        </div>
        
        {/* Map section remains the same */}
        <div className="mb-16">
          <h2 className="font-heading text-2xl text-amber-900 mb-8 text-center">Find Us</h2>
          <div className="h-96 w-full rounded-sm overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7748557716446!2d101.71916631475608!3d3.161643397679525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37d12d669c1f%3A0xf370508ae2ee560c!2sIntermark%20Mall!5e0!3m2!1sen!2sus!4v1616148309509!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Harrico Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;