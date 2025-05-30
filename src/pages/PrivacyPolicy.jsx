// src/pages/PrivacyPolicy.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedPageHeader from '../components/common/AnimatedPageHeader';
import PolicyHeaderImage from '../assets/images/about/bg12.jpg'; // Use an appropriate image

const PrivacyPolicy = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <AnimatedPageHeader 
        title="Privacy Policy" 
        subtitle="Information about our data practices"
        backgroundImage={PolicyHeaderImage}
      />

      {/* Content */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {/* Last updated date */}
            <p className="text-gray-500">Last updated: April 07, 2025</p>
            
            <h2 className="text-2xl md:text-3xl font-serif my-6">Overview</h2>
            
            <p>This Privacy Policy describes the privacy practices of Harrico Ceylon Gems & Jewelry SDN. BHD. ("Harrico," "we," "us," or "our") in connection with our website at <a href="https://harricogems.com/" className="text-[#b9a16b] hover:underline">https://harricogems.com/</a> (the "Site"). This Privacy Policy explains how we collect, use, disclose, and otherwise process personal information and explains the rights and choices available to individuals with respect to their information.</p>
            
            <h2 className="text-2xl md:text-3xl font-serif my-6">Information We Collect</h2>
            
            <p>We collect very limited information from visitors to our website:</p>
            
            <h3 className="text-xl md:text-2xl font-serif my-4">Information Collected Automatically</h3>
            
            <p>We may automatically collect certain information about your use of our Site through cookies, web beacons, and other technologies, including:</p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Domain name</li>
              <li>Your browser type and operating system</li>
              <li>Web pages you view on the Site</li>
              <li>Links you click on the Site</li>
              <li>Your IP address</li>
              <li>The length of time you visit our Site</li>
              <li>The referring URL, or the webpage that led you to our Site</li>
            </ul>
            
            <p>This information is used to analyze trends, administer the site, track users' movements around the site, and gather general demographic information for aggregate use. This information is not linked to personally identifiable information.</p>
            
            <h3 className="text-xl md:text-2xl font-serif my-4">Payment Processing</h3>
            
            <p>We use Stripe, a third-party payment processor, to process payments made to us. In connection with the processing of such payments, we do not retain any personally identifiable information or financial information such as credit card numbers. Rather, all such information is provided directly to our third-party processor, Stripe, whose use of your personal information is governed by their privacy policy, which may be viewed at <a href="https://stripe.com/privacy" className="text-[#b9a16b] hover:underline" target="_blank" rel="noreferrer">https://stripe.com/privacy</a>.</p>
            
            <h2 className="text-2xl md:text-3xl font-serif my-6">Cookies</h2>
            
            <p>Our Site may use "cookies" to enhance user experience. A cookie is a small piece of data that our website stores on your computer, and accesses each time you visit, so we can understand how you use our site. This helps us serve you content based on preferences you have specified.</p>
            
            <p>We use the following types of cookies:</p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential cookies</strong>: Necessary for navigating and enabling functions on our website.</li>
              <li><strong>Functional cookies</strong>: Recognize you on our website and remember your previously selected preferences.</li>
            </ul>
            
            <p>You can control cookies through your browser settings. Please note that disabling cookies may affect your experience of the Site.</p>
            
            <h2 className="text-2xl md:text-3xl font-serif my-6">How We Use Your Information</h2>
            
            <p>We use the automatically-collected information to:</p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Maintain, improve, and administer our Site</li>
              <li>Analyze trends and gather broad demographic information</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Site</li>
            </ul>
            
            <h2 className="text-2xl md:text-3xl font-serif my-6">Information Sharing</h2>
            
            <p>We do not sell, trade, or otherwise transfer your automatically-collected information to third parties. This does not include trusted third parties who assist us in operating our website, so long as those parties agree to keep this information confidential.</p>
            
            <h2 className="text-2xl md:text-3xl font-serif my-6">Data Security</h2>
            
            <p>We implement a variety of security measures to maintain the safety of any information we collect. However, the transmission of information via the internet is not completely secure. Although we do our best to protect your information, we cannot guarantee the security of your information transmitted to our Site; any transmission is at your own risk.</p>
                        
            <h2 className="text-2xl md:text-3xl font-serif my-6">Your Rights and Choices</h2>
            
            <p>You have the right to:</p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Opt-out of cookies via your browser settings</li>
              <li>Request information about what data we've collected</li>
            </ul>
            
            <h2 className="text-2xl md:text-3xl font-serif my-6">Children's Privacy</h2>
            
            <p>Our Site is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are under 13, please do not provide any information on this Site.</p>
            
            <h2 className="text-2xl md:text-3xl font-serif my-6">Changes to This Privacy Policy</h2>
            
            <p>We may update this Privacy Policy from time to time. If we make material changes to how we treat our users' personal information, we will notify you by updating the date at the top of this Privacy Policy. Your continued use of the Site after we make changes is deemed to be acceptance of those changes, so please check the Privacy Policy periodically for updates.</p>
            
            <h2 className="text-2xl md:text-3xl font-serif my-6">Contact Us</h2>
            
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            
            <p>
              <strong>Harrico Ceylon Gems & Jewelry SDN. BHD.</strong><br />
              No.5.Level 41. Intermark Building<br />
              348.Jalan Tun Razak<br />
              50400 Kuala Lumpur<br />
              W.P. Kuala Lumpur<br />
              Malaysia<br />
              <br />
              Email: harricoceylongems@gmail.com<br />
              Phone: +60 3 2181 8953
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;