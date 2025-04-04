// src/pages/about/News.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/common/SectionTitle';
import GoldDivider from '../../components/common/GoldDivider';
import NewsHeroImage from '../../assets/images/about/bg11.jpeg'; // Add this image
import BlueCollection from '../../assets/images/about/news/blue-collection.gif'; // Placeholder for the blue collection image
import LondonExhibition from '../../assets/images/about/news/london-exhibition.gif'; // Placeholder for the London exhibition image
import SustainableMining from '../../assets/images/about/news/sustainable-mining.gif'; // Placeholder for the sustainable mining image
import Scholarship from '../../assets/images/about/news/scholarship.gif'; // Placeholder for the scholarship image
import Anniversary from '../../assets/images/about/news/anniversary.gif'; // Placeholder for the anniversary image

const News = () => {
  // Latest news articles
  const newsArticles = [
    {
      id: 'new-collection-2025',
      title: 'Harrico Unveils Exclusive "Ceylon Blue" Collection',
      date: 'March 15, 2025',
      category: 'Collections',
      excerpt: 'Harrico launches its highly anticipated Ceylon Blue Collection, featuring rare blue sapphires in contemporary designs.',
      image: BlueCollection,
      featured: true
    },
    {
      id: 'london-exhibition',
      title: 'Harrico to Showcase Rare Gems at London Exhibition',
      date: 'February 28, 2025',
      category: 'Events',
      excerpt: 'Join us at the International Gem Exhibition in London where we\'ll be presenting our most extraordinary Ceylon gemstones.',
      image: LondonExhibition,
      featured: false
    },
    {
      id: 'sustainable-mining',
      title: 'Harrico Expands Sustainable Mining Practices',
      date: 'January 20, 2025',
      category: 'Corporate',
      excerpt: 'Our commitment to sustainability grows with new eco-friendly mining techniques implemented across all our Ceylon operations.',
      image: SustainableMining,
      featured: false
    },
    {
      id: 'scholarship-program',
      title: 'Harrico Launches Gemology Scholarship Program',
      date: 'November 5, 2024',
      category: 'Community',
      excerpt: 'Our new educational initiative will provide full scholarships to promising students interested in pursuing careers in gemology.',
      image: Scholarship,
      featured: false
    },
    {
      id: 'anniversary-celebration',
      title: 'Harrico Celebrates 55 Years of Excellence',
      date: 'October 30, 2024',
      category: 'Events',
      excerpt: 'Join us for a special anniversary celebration at our flagship store, featuring a retrospective exhibition of our heritage pieces.',
      image: Anniversary,
      featured: false
    }
  ];

  // Upcoming events
  const upcomingEvents = [
    {
      id: 'trunk-show-kl',
      title: 'Bridal Collection Trunk Show',
      date: 'April 15-17, 2025',
      location: 'Flagship Store, Kuala Lumpur',
      description: 'Experience our complete bridal jewelry collection with personalized styling sessions and special pricing.',
      registerLink: '/events/bridal-trunk-show'
    },
    {
      id: 'gem-talk',
      title: 'The Magic of Ceylon Sapphires',
      date: 'April 25, 2025',
      location: 'Penang Showroom',
      description: 'Join our Chief Gemologist for an educational talk about the unique properties of Ceylon sapphires.',
      registerLink: '/events/sapphire-talk'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${NewsHeroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="container relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">News & Events</h1>
          <p className="max-w-2xl mx-auto">
            Stay updated with the latest from Harrico
          </p>
        </div>
      </div>

      {/* Featured News */}
      {newsArticles.filter(article => article.featured).map((article) => (
        <section key={article.id} className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-sm text-[#b9a16b] font-medium mb-2">{article.category} | {article.date}</p>
                <h2 className="text-3xl font-serif mb-4">{article.title}</h2>
                <p className="text-gray-700 mb-6 text-lg">{article.excerpt}</p>
                <Link
                  to={`/news/${article.id}`}
                  className="inline-block border border-[#b9a16b] text-[#b9a16b] px-8 py-2 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300"
                >
                  READ MORE
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <GoldDivider />

      {/* Latest News */}
      <section className="py-16 md:py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Latest News" 
            subtitle="STAY INFORMED" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {newsArticles.filter(article => !article.featured).slice(0, 5).map((article, index) => (
              <div 
                key={article.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs text-[#b9a16b] font-medium mb-2">{article.category} | {article.date}</p>
                  <h3 className="text-xl font-serif mb-3">{article.title}</h3>
                  <p className="text-gray-700 mb-4 text-sm line-clamp-3">{article.excerpt}</p>
                  <Link
                    to={`/news/${article.id}`}
                    className="text-sm text-[#b9a16b] tracking-wider uppercase relative group inline-flex items-center"
                  >
                    READ MORE <span className="ml-1">›</span>
                    <span className="absolute bottom-0 left-0 w-full h-px bg-[#b9a16b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/news/archive"
              className="inline-block border border-[#b9a16b] text-[#b9a16b] px-8 py-2 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300"
            >
              VIEW ALL NEWS
            </Link>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Upcoming Events */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Upcoming Events" 
            subtitle="JOIN US" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="mt-12 space-y-8 max-w-4xl mx-auto">
            {upcomingEvents.map((event) => (
              <div 
                key={event.id} 
                className="border border-gray-200 hover:border-[#b9a16b] transition-colors duration-300 p-6 md:p-8 flex flex-col md:flex-row"
              >
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <p className="text-xs text-[#b9a16b] font-medium mb-1">DATE</p>
                  <p className="text-lg font-medium">{event.date}</p>
                  <p className="text-gray-700 mt-2">{event.location}</p>
                </div>
                <div className="md:w-2/3 md:pl-8 md:border-l border-gray-200">
                  <h3 className="text-xl font-serif mb-3">{event.title}</h3>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <Link
                    to={event.registerLink}
                    className="inline-block border border-[#b9a16b] text-[#b9a16b] px-6 py-2 text-xs tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300"
                  >
                    REGISTER
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/events"
              className="inline-block border border-[#b9a16b] text-[#b9a16b] px-8 py-2 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300"
            >
              VIEW ALL EVENTS
            </Link>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Newsletter Signup */}
      <section className="py-16 md:py-24 bg-[#08081a] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Subscribe to Our Newsletter</h2>
          <p className="max-w-2xl mx-auto mb-10">
            Stay updated with the latest collections, events, and exclusive offers from Harrico.
            Join our mailing list for VIP invitations and special previews.
          </p>
          
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="flex-1 px-4 py-3 bg-transparent border border-gray-500 focus:border-[#b9a16b] text-white placeholder-gray-400 outline-none"
                required
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-[#b9a16b] text-white text-sm tracking-widest uppercase hover:bg-white hover:text-[#b9a16b] transition-all duration-300"
              >
                SUBSCRIBE
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from Harrico.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default News;