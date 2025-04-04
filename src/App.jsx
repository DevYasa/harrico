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
const Locations = lazy(() => import('./pages/about/Locations'));
const News = lazy(() => import('./pages/about/News'));

// Collections main page
const Collections = lazy(() => import('./pages/Collections'));

// Gemstone collections
const PreciousGemstones = lazy(() => import('./pages/collections/PreciousGemstones'));
const SemiPreciousGemstones = lazy(() => import('./pages/collections/SemiPreciousGemstones'));

// Jewelry collections
const GoldJewelry = lazy(() => import('./pages/collections/GoldJewelry'));
const PlatinumJewelry = lazy(() => import('./pages/collections/PlatinumJewelry'));
const SilverPalladiumJewelry = lazy(() => import('./pages/collections/SilverPalladiumJewelry'));
const CustomDesigns = lazy(() => import('./pages/collections/CustomDesigns'));

// Other pages
const Contact = lazy(() => import('./pages/Contact'));

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
      <ScrollRestoration /> {/* Add ScrollRestoration to reset scroll position on navigation */}
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
              <Route path="/about/locations" element={<Locations />} />
              <Route path="/about/news" element={<News />} />
              
              {/* Collections main page */}
              <Route path="/collections" element={<Collections />} />
              
              {/* Gemstone collections */}
              <Route path="/collections/precious-gemstones" element={<PreciousGemstones />} />
              <Route path="/collections/semi-precious-gemstones" element={<SemiPreciousGemstones />} />
              
              {/* Jewelry collections */}
              <Route path="/collections/gold-jewelry" element={<GoldJewelry />} />
              <Route path="/collections/platinum-jewelry" element={<PlatinumJewelry />} />
              <Route path="/collections/silver-palladium" element={<SilverPalladiumJewelry />} />
              <Route path="/collections/custom-designs" element={<CustomDesigns />} />
              
              {/* Contact route */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/contact/:section" element={<Contact />} />
              
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ScrollToTop /> {/* Add the ScrollToTop button */}
      </div>
    </Router>
  );
}

export default App;