// src/pages/about/Locations.jsx
import React from 'react';
import SectionTitle from '../../components/common/SectionTitle';
import GoldDivider from '../../components/common/GoldDivider';
import LocationsHeroImage from '../../assets/images/hero-bg.gif'; // Add this image
import KLStoreImage from '../../assets/images/about/kl-showroom.gif'; // Add this image
import PenangShowroomImage from '../../assets/images/about/penang-showroom.gif'; // Add this image
import LondonOfficeImage from '../../assets/images/about/london-office.gif'; // Add this image

const Locations = () => {
  // Store locations
  const storeLocations = [
    {
      id: 'flagship-kl',
      name: 'Flagship Store',
      location: 'Kuala Lumpur, Malaysia',
      address: 'NO.2-03B 2nd floor, Intermark Mall, 348, Jln Tun Razak, Kampung Datuk Keramat, 50400 Kuala Lumpur, Malaysia',
      image: KLStoreImage,
      hours: 'Monday - Sunday: 9AM - 9PM',
      phone: '+60 3-2181 4473',
      mapUrl: 'https://maps.app.goo.gl/5ZhQ7FDV9LJVscH48',
      featured: true
    },
    {
      id: 'penang-showroom',
      name: 'Penang Showroom',
      location: 'Penang, Malaysia',
      address: 'Parkroyal Hotel, No. 5 & 4, Batu Ferringhi Beach, 11100 Penang, Malaysia',
      image: PenangShowroomImage,
      hours: 'Monday - Sunday: 9AM - 9PM',
      phone: '+60 4-881 1133',
      mapUrl: 'https://maps.app.goo.gl/bB8Bf5uPUFuGxfFw5',
      featured: false
    },
    {
      id: 'london-office',
      name: 'London Office',
      location: 'London, England',
      address: '33 Westminster Drive, London N13 4NT, England',
      image: LondonOfficeImage,
      hours: 'Monday - Friday: 9AM - 5PM (By appointment only)',
      phone: '+44 20 8886 8261',
      mapUrl: 'https://maps.app.goo.gl/XYZ123', // Replace with actual Google Maps URL
      featured: false
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-[#08081a]" 
                 style={{
                   backgroundImage: `url(${LocationsHeroImage})`,
                   backgroundPosition: 'center',
                   backgroundSize: 'cover',
                   backgroundRepeat: 'no-repeat'
                 }}>
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black opacity-30"></div>
              
              {/* Content overlay */}
              <div className="relative h-full z-10 flex items-center justify-center">
                <div className="container text-white text-center">
                  <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Locations</h1>
                  <p className="max-w-2xl mx-auto">
                    Visit us at our elegant boutiques across the globe
                  </p>
                </div>
              </div>
            </div>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Visit Harrico" 
            subtitle="EXPERIENCE LUXURY" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="max-w-3xl mx-auto mt-8 text-center">
            <p className="text-gray-700 mb-6">
              Experience the unparalleled beauty of Ceylon gemstones and exquisite craftsmanship at our 
              elegant boutiques. Our knowledgeable staff is ready to guide you through our collections 
              and help you find the perfect piece.
            </p>
            <p className="text-gray-700">
              With locations in Malaysia and the United Kingdom, Harrico brings the finest Ceylon gems 
              and jewelry to discerning customers around the world. We invite you to visit us and 
              discover the extraordinary world of Harrico.
            </p>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Featured Location - Flagship Store */}
      {storeLocations.filter(store => store.featured).map((store) => (
        <section key={store.id} className="py-16 md:py-24 bg-[#f8f8f8]">
          <div className="container mx-auto px-6">
            <SectionTitle 
              title={store.name}
              subtitle="FLAGSHIP LOCATION"
              alignment="center"
              maxWidth="2xl"
            />
            
            <div className="flex flex-col md:flex-row items-center gap-12 mt-12">
              <div className="w-full md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={store.image} 
                    alt={`Harrico ${store.name}`} 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-serif mb-4">{store.location}</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-[#b9a16b] font-medium mb-2">ADDRESS</p>
                    <p className="text-gray-700">{store.address}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#b9a16b] font-medium mb-2">HOURS</p>
                    <p className="text-gray-700">{store.hours}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#b9a16b] font-medium mb-2">CONTACT</p>
                    <p className="text-gray-700">{store.phone}</p>
                  </div>
                  <div>
                    <a 
                      href={store.mapUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block border border-[#b9a16b] text-[#b9a16b] px-8 py-2 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300"
                    >
                      GET DIRECTIONS
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <GoldDivider />

      {/* Other Locations */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Our Global Presence" 
            subtitle="MORE LOCATIONS" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {storeLocations.filter(store => !store.featured).map((store) => (
              <div 
                key={store.id} 
                className="bg-[#f8f8f8] rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={store.image} 
                    alt={`Harrico ${store.name}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif mb-2">{store.name}</h3>
                  <p className="text-sm text-[#b9a16b] font-medium mb-4">{store.location}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm font-medium mb-1">Address:</p>
                      <p className="text-gray-700">{store.address}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Hours:</p>
                      <p className="text-gray-700">{store.hours}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Contact:</p>
                      <p className="text-gray-700">{store.phone}</p>
                    </div>
                  </div>
                  
                  <a 
                    href={store.mapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block border border-[#b9a16b] text-[#b9a16b] px-6 py-2 text-xs tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300"
                  >
                    GET DIRECTIONS
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Book Appointment CTA */}
      <section className="py-16 md:py-24 bg-[#08081a] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Schedule a Private Consultation</h2>
          <p className="max-w-2xl mx-auto mb-10">
            For a personalized experience, book an appointment with our gemstone experts. 
            Discover our exclusive collections and explore custom design options in a 
            private setting.
          </p>
          <a 
            href="/contact/appointment" 
            className="inline-block border border-[#b9a16b] text-[#b9a16b] px-12 py-3 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300"
          >
            BOOK AN APPOINTMENT
          </a>
        </div>
      </section>
    </div>
  );
};

export default Locations;