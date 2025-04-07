// src/App.jsx
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import LoadingScreen from './components/common/LoadingScreen';
import ScrollToTop from './components/common/ScrollToTop';
import ScrollRestoration from './components/common/ScrollRestoration';

// Lazy-loaded components
const Home = lazy(() => import('./pages/Home'));

// About section
const About = lazy(() => import('./pages/About'));
const History = lazy(() => import('./pages/about/History'));
const Story = lazy(() => import('./pages/about/Story'));
const Team = lazy(() => import('./pages/about/Team'));
const News = lazy(() => import('./pages/about/News'));

// Gemstone Pages
const Gemstones = lazy(() => import('./pages/gemstones/Gemstones')); // New main gemstone page
const PreciousGemstones = lazy(() => import('./pages/gemstones/PreciousGemstones'));
const SemiPreciousGemstones = lazy(() => import('./pages/gemstones/SemiPreciousGemstones'));
// Add individual gemstone pages as needed
const BlueSapphire = lazy(() => import('./pages/gemstones/precious/BlueSapphire'));
const Emerald = lazy(() => import('./pages/gemstones/precious/Emerald'));
const Ruby = lazy(() => import('./pages/gemstones/precious/Ruby'));

// Jewelry Pages 
const Jewelry = lazy(() => import('./pages/jewelry/Jewelry')); // New main jewelry page
const GoldJewelry = lazy(() => import('./pages/jewelry/GoldJewelry'));
const PlatinumJewelry = lazy(() => import('./pages/jewelry/PlatinumJewelry'));
const SilverPalladiumJewelry = lazy(() => import('./pages/jewelry/SilverPalladiumJewelry'));

// Categories Pages
const Categories = lazy(() => import('./pages/categories/Categories')); // New main categories page
const Rings = lazy(() => import('./pages/categories/Rings'));
const Necklaces = lazy(() => import('./pages/categories/Necklaces'));
const Earrings = lazy(() => import('./pages/categories/Earrings'));
const Bracelets = lazy(() => import('./pages/categories/Bracelets'));

// Custom Design Pages
const CustomDesigns = lazy(() => import('./pages/custom-designs/CustomDesigns'));
const CustomProcess = lazy(() => import('./pages/custom-designs/Process'));
const CustomGallery = lazy(() => import('./pages/custom-designs/Gallery'));
const CustomEngagement = lazy(() => import('./pages/custom-designs/Engagement'));

// Contact Section
const Contact = lazy(() => import('./pages/Contact'));
const Boutiques = lazy(() => import('./pages/contact/Boutiques'));
const Appointment = lazy(() => import('./pages/contact/Appointment'));

// Payment Page
const Payment = lazy(() => import('./pages/Payment'));

// Legal Pages
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('./pages/TermsOfUse'));

function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    // Initial loading screen
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  // While initially loading, show only the loading screen
  if (initialLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <ScrollRestoration />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<Home />} />
              
              {/* About section routes */}
              <Route path="/about" element={<About />} />
              <Route path="/about/history" element={<History />} />
              <Route path="/about/story" element={<Story />} />
              <Route path="/about/team" element={<Team />} />
              <Route path="/about/news" element={<News />} />
              
              {/* New gemstones routes */}
              <Route path="/gemstones" element={<Gemstones />} />
              <Route path="/gemstones/precious" element={<PreciousGemstones />} />
              <Route path="/gemstones/semi-precious" element={<SemiPreciousGemstones />} />
              <Route path="/gemstones/precious/blue-sapphire" element={<BlueSapphire />} />
              <Route path="/gemstones/precious/emerald" element={<Emerald />} />
              <Route path="/gemstones/precious/ruby" element={<Ruby />} />
              {/* Add other gemstone routes as needed */}
              
              {/* New jewelry routes */}
              <Route path="/jewelry" element={<Jewelry />} />
              <Route path="/jewelry/gold" element={<GoldJewelry />} />
              <Route path="/jewelry/platinum" element={<PlatinumJewelry />} />
              <Route path="/jewelry/silver-palladium" element={<SilverPalladiumJewelry />} />
              {/* Add subcategory jewelry routes as needed */}
              
              {/* New category routes */}
              <Route path="/categories" element={<Categories />} />
              <Route path="/categories/rings" element={<Rings />} />
              <Route path="/categories/necklaces" element={<Necklaces />} />
              <Route path="/categories/earrings" element={<Earrings />} />
              <Route path="/categories/bracelets" element={<Bracelets />} />
              {/* Add other category routes as needed */}
              
              {/* Custom design routes */}
              <Route path="/custom-designs" element={<CustomDesigns />} />
              <Route path="/custom-designs/process" element={<CustomProcess />} />
              <Route path="/custom-designs/gallery" element={<CustomGallery />} />
              <Route path="/custom-designs/engagement" element={<CustomEngagement />} />
              
              {/* Contact routes */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/contact/boutiques" element={<Boutiques />} />
              <Route path="/contact/appointment" element={<Appointment />} />
              <Route path="/contact/:section" element={<Contact />} />
              
              {/* Payment route */}
              <Route path="/payment" element={<Payment />} />
              
              {/* Legal Pages */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-use" element={<TermsOfUse />} />
              
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;