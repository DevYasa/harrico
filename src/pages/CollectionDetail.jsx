// src/pages/CollectionDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SapphireCollection from '../assets/images/collections/sapphire-collection.png';
import RubyCollection from '../assets/images/collections/ruby-collection.png';
import EmeraldCollection from '../assets/images/collections/emerald-collection.png';
import DiamondJewelry from '../assets/images/collections/diamond-jewelry.png';
import SapphireJewelry from '../assets/images/collections/sapphire-jewelry.jpg';
import BridalCollection from '../assets/images/collections/bridal-collection.jpg';
import PigeonBloodRuby from '../assets/images/gems/ruby/pigeon-blood-ruby.jpg';
import OvalRuby from '../assets/images/gems/ruby/oval-ruby.jpg';
import CushionCutRuby from '../assets/images/gems/ruby/cushion-cut-ruby.jpg';
import CornflowerBlueSapphire from '../assets/images/gems/sapphire/cornflower-blue-sapphire.jpg';
import RoyalBlueSapphire from '../assets/images/gems/sapphire/royal-blue-sapphire.jpg';
import StarSapphire from '../assets/images/gems/sapphire/star-sapphire.jpg';
import OvalCutSapphire from '../assets/images/gems/sapphire/oval-cut-sapphire.jpg';
import EmeraldCut from '../assets/images/gems/emerald/emerald-cut.jpg';
import ZambianEmerald from '../assets/images/gems/emerald/zambian-emerald.jpg';
import ColombianEmerald from '../assets/images/gems/emerald/colombian-emerald.jpg';
import DiamondPendant from '../assets/images/jewelry/diamond/diamond-pendant.jpg';
import DiamondTennisBracelet from '../assets/images/jewelry/diamond/diamond-tennis-bracelet.jpg';
import SolitaireDiamondRing from '../assets/images/jewelry/diamond/solitaire-diamond-ring.jpg';
import SapphireDropEarrings from '../assets/images/jewelry/sapphire/sapphire-drop-earrings.jpg';
import SapphireTennisBracelet from '../assets/images/jewelry/sapphire/sapphire-tennis-bracelet.jpg';
import SapphireAndDiamondRing from '../assets/images/jewelry/sapphire/sapphire-and-diamond-ring.jpg';
import WeddingBandSet from '../assets/images/jewelry/bridal/wedding-band-set.jpg';
import BridalNecklace from '../assets/images/jewelry/bridal/bridal-necklace.jpg';
import DiamondEngagementRing from '../assets/images/jewelry/bridal/diamond-engagement-ring.jpg';

const CollectionDetail = () => {
  const { id } = useParams();
  const [collection, setCollection] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Sample collection data - in a real app, this would come from your data source
  const collectionsData = [
    {
      id: 1,
      name: "Sapphire Collection",
      category: "gems",
      description: "Exquisite blue sapphires from Ceylon, renowned for their exceptional color and clarity.",
      longDescription: "Our Sapphire Collection features the finest Ceylon blue sapphires, hand-selected for their exceptional color, clarity, and brilliance. Each sapphire in this collection has been carefully sourced from the renowned gem mines of Sri Lanka and certified for authenticity and quality. From deep royal blues to the rare cornflower blue hues, our sapphires represent the pinnacle of gemstone excellence.",
      image: SapphireCollection,
      items: [
        { name: "Royal Blue Sapphire", carat: "2.5", price: 4800, image: RoyalBlueSapphire },
        { name: "Cornflower Blue Sapphire", carat: "1.8", price: 3200, image: CornflowerBlueSapphire },
        { name: "Star Sapphire", carat: "3.2", price: 5600, image: StarSapphire },
        { name: "Oval Cut Sapphire", carat: "2.1", price: 3900, image: OvalCutSapphire }
      ]
    },
    {
      id: 2,
      name: "Ruby Treasures",
      category: "gems",
      description: "Vibrant red rubies that capture the essence of passion and luxury.",
      longDescription: "Our Ruby Treasures collection showcases the vibrant red gemstones that have captivated humanity for centuries. Often referred to as the 'king of precious stones,' our Ceylon rubies exhibit the perfect balance of color, clarity, and fire. Each ruby is meticulously selected for its pigeon-blood red color, the most prized hue in the gemstone world, and cut to maximize its natural beauty and brilliance.",
      image: RubyCollection,
      items: [
        { name: "Pigeon Blood Ruby", carat: "1.5", price: 6200, image: PigeonBloodRuby},
        { name: "Cushion Cut Ruby", carat: "1.2", price: 4800, image: CushionCutRuby },
        { name: "Oval Ruby", carat: "2.0", price: 7500, image: OvalRuby }
      ]
    },
    
    {
      id: 3,
      name: "Emerald Elegance",
      category: "gems",
      description: "Rich green emeralds that embody natural beauty and timeless sophistication.",
      longDescription: "Our Emerald Elegance collection features the finest Colombian and Zambian emeralds, known for their rich green color and garden-like inclusions that gemologists refer to as 'jardin' (garden in French). Each emerald is selected for its vivid color, clarity, and character, then precision-cut to maximize its natural beauty and brilliance.",
      image: EmeraldCollection,
      items: [
        { name: "Colombian Emerald", carat: "1.8", price: 5800, image: ColombianEmerald },
        { name: "Zambian Emerald", carat: "2.2", price: 6300, image: ZambianEmerald },
        { name: "Emerald Cut", carat: "1.5", price: 4900, image: EmeraldCut}
      ]
    },
    {
      id: 4,
      name: "Diamond Classics",
      category: "jewelry",
      description: "Timeless diamond jewelry pieces that celebrate life's most precious moments.",
      longDescription: "Our Diamond Classics collection offers timeless diamond jewelry pieces that celebrate life's most precious moments. Each piece features meticulously selected diamonds known for their exceptional cut, clarity, color, and carat weight. From solitaire engagement rings to statement necklaces, these classic designs are crafted to be cherished for generations.",
      image: DiamondJewelry,
      items: [
        { name: "Solitaire Diamond Ring", carat: "1.0", price: 5200, image: SolitaireDiamondRing},
        { name: "Diamond Tennis Bracelet", carat: "3.5 total", price: 8900, image: DiamondTennisBracelet },
        { name: "Diamond Pendant", carat: "0.75", price: 3200, image: DiamondPendant }
      ]
    },
    {
      id: 5,
      name: "Sapphire Jewelry",
      category: "jewelry",
      description: "Contemporary designs featuring Ceylon's finest blue sapphires.",
      longDescription: "Our Sapphire Jewelry collection combines Ceylon's finest blue sapphires with exquisite craftsmanship to create contemporary jewelry pieces that make a statement. Each design showcases the natural beauty of sapphires complemented by diamonds and precious metals, resulting in pieces that are both timeless and modern.",
      image: SapphireJewelry,
      items: [
        { name: "Sapphire and Diamond Ring", description: "18K White Gold", price: 4700, image: SapphireAndDiamondRing },
        { name: "Sapphire Drop Earrings", description: "18K Yellow Gold", price: 3900, image: SapphireDropEarrings },
        { name: "Sapphire Tennis Bracelet", description: "Platinum", price: 8500, image: SapphireTennisBracelet }
      ]
    },
    {
      id: 6,
      name: "Bridal Collection",
      category: "jewelry",
      description: "Exquisite pieces designed to make your special day even more memorable.",
      longDescription: "Our Bridal Collection features exquisite jewelry pieces designed to make your special day even more memorable. From engagement rings to wedding bands and bridal accessories, each piece is crafted with meticulous attention to detail. We offer a range of styles from classic to contemporary, all featuring the highest quality gemstones and precious metals.",
      image: BridalCollection,
      items: [
        { name: "Diamond Engagement Ring", description: "Platinum", price: 6800, image: DiamondEngagementRing },
        { name: "Wedding Band Set", description: "18K White Gold", price: 3200, image: WeddingBandSet},
        { name: "Bridal Necklace", description: "Diamonds and Pearls", price: 4500, image: BridalNecklace }
      ]
    }
  ];
  
  useEffect(() => {
    // Find the collection with the matching ID
    const foundCollection = collectionsData.find(item => item.id === parseInt(id));
    
    // In a real app, you would fetch data from an API here
    setTimeout(() => {
      setCollection(foundCollection || null);
      setLoading(false);
    }, 500); // Simulate API request delay
  }, [id]);

  if (loading) {
    return (
      <div className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 border-4 border-amber-800 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-amber-800">Loading collection...</p>
        </div>
      </div>
    );
  }

  if (!collection) {
    return (
      <div className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-3xl text-amber-900 mb-4">Collection Not Found</h1>
          <p className="text-lg text-gray-700 mb-8">The collection you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/collections"
            className="inline-block bg-gradient-to-r from-amber-700 to-amber-800 text-white px-8 py-3 uppercase tracking-wider text-sm border border-amber-700 hover:from-transparent hover:to-transparent hover:text-amber-800 transition-all duration-300"
          >
            Back to Collections
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-amber-800 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/collections" className="hover:text-amber-800 transition-colors">Collections</Link>
            <span className="mx-2">/</span>
            <span className="text-amber-800">{collection.name}</span>
          </div>
        </div>
        
        {/* Collection Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="relative overflow-hidden rounded-sm shadow-lg">
            <img 
              src={collection.image} 
              alt={collection.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <p className="text-amber-800 tracking-[0.3em] text-sm mb-3 uppercase">{collection.category}</p>
            <h1 className="font-heading text-4xl md:text-5xl text-amber-900 mb-4">{collection.name}</h1>
            <div className="w-24 h-px bg-amber-800 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-8">
              {collection.longDescription}
            </p>
            
            <Link 
              to="/contact"
              className="inline-block bg-gradient-to-r from-amber-700 to-amber-800 text-white px-8 py-3 uppercase tracking-wider text-sm border border-amber-700 hover:from-transparent hover:to-transparent hover:text-amber-800 transition-all duration-300"
            >
              Inquire About This Collection
            </Link>
          </div>
        </div>
        
        {/* Collection Items */}
        <div className="mb-16">
          <h2 className="font-heading text-3xl text-amber-900 mb-8 text-center">Featured Items</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {collection.items && collection.items.map((item, index) => (
              <div key={index} className="group bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Link 
                        to="/contact"
                        className="inline-block bg-white/80 text-amber-900 px-4 py-2 text-sm tracking-wider uppercase font-medium w-full text-center"
                      >
                        Inquire
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-lg text-amber-900 mb-1">{item.name}</h3>
                  {item.carat && <p className="text-gray-500 text-sm mb-1">{item.carat} Carats</p>}
                  {item.description && <p className="text-gray-500 text-sm mb-1">{item.description}</p>}
                  <p className="text-amber-800 font-medium">${item.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Related Collections */}
        <div className="mb-16">
          <h2 className="font-heading text-3xl text-amber-900 mb-8 text-center">You May Also Like</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collectionsData
              .filter(relatedCollection => 
                relatedCollection.category === collection.category && 
                relatedCollection.id !== collection.id
              )
              .slice(0, 3)
              .map(relatedCollection => (
                <div key={relatedCollection.id} className="group bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                  <Link to={`/collections/${relatedCollection.id}`} className="block">
                    <div className="relative overflow-hidden">
                      <img 
                        src={relatedCollection.image} 
                        alt={relatedCollection.name}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading text-lg text-amber-900 mb-1">{relatedCollection.name}</h3>
                      <p className="text-gray-600 text-sm">{relatedCollection.description}</p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-amber-50 p-8 rounded-sm shadow-sm text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl text-amber-900 mb-4">Ready to Explore More?</h2>
          <p className="text-gray-700 mb-6">
            Visit our boutique in Kuala Lumpur to view these exquisite pieces in person, 
            or contact us to arrange a private consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact"
              className="inline-block bg-gradient-to-r from-amber-700 to-amber-800 text-white px-8 py-3 uppercase tracking-wider text-sm border border-amber-700 hover:from-transparent hover:to-transparent hover:text-amber-800 transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link 
              to="/collections"
              className="inline-block bg-transparent text-amber-800 px-8 py-3 uppercase tracking-wider text-sm border border-amber-800 hover:bg-amber-800 hover:text-white transition-all duration-300"
            >
              View All Collections
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionDetail;