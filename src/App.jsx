// src/App.jsx
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import LoadingScreen from './components/common/LoadingScreen';
import CollectionDetail from './pages/CollectionDetail';

// Lazy-loaded components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Collections = lazy(() => import('./pages/Collections'));
const Contact = lazy(() => import('./pages/Contact'));
const CeylonGemsHub = lazy(() => import('./pages/CeylonGemsHub'));
const GIM = lazy(() => import('./pages/GIM'));

function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    // Initial loading screen
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 6500);

    return () => clearTimeout(timer);
  }, []);

  if (initialLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-16">
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/collections/:id" element={<CollectionDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/ceylon-gems-hub" element={<CeylonGemsHub />} />
              <Route path="/gim" element={<GIM />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;