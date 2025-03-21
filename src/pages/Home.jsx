// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedGems from '../components/home/FeaturedGems';
import FeaturedJewelry from '../components/home/FeaturedJewelry';
import StoreShowcase from '../components/home/StoreShowcase';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedGems />
      <FeaturedJewelry />
      <StoreShowcase />
      <Testimonials />
    </>
  );
};

export default Home;