// src/pages/LuxuryHome.jsx
import React from 'react';
import EnhancedHeroSection from '../components/home/EnhancedHeroSection';
import EnhancedFeaturedGems from '../components/home/EnhancedFeaturedGems';
import EnhancedFeaturedJewelry from '../components/home/EnhancedFeaturedJewelry';
import EnhancedStoreShowcase from '../components/home/EnhancedStoreShowcase';
import EnhancedTestimonials from '../components/home/EnhancedTestimonials';
import LuxurySectionDivider from '../components/common/LuxurySectionDivider';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <EnhancedHeroSection />
      
      {/* Divider between sections */}
      <LuxurySectionDivider type="diamond" color="amber" />
      
      {/* Featured Gems */}
      <EnhancedFeaturedGems />
      
      {/* Divider between sections */}
      <LuxurySectionDivider type="wave" color="amber" />
      
      {/* Featured Jewelry */}
      <EnhancedFeaturedJewelry />
      
      {/* Divider between sections */}
      <LuxurySectionDivider type="line-with-gem" color="amber" />
      
      {/* Store Showcase */}
      <EnhancedStoreShowcase />
      
      {/* Divider between sections */}
      <LuxurySectionDivider type="ornate" color="amber" />
      
      {/* Testimonials */}
      <EnhancedTestimonials />
    </>
  );
};

export default Home;