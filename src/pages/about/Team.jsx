// src/pages/about/Team.jsx
import React from 'react';
import SectionTitle from '../../components/common/SectionTitle';
import GoldDivider from '../../components/common/GoldDivider';
import TeamHeroImage from '../../assets/images/hero-bg.gif'; // Add this image
import CEOImage from '../../assets/images/about/haris.gif'; // Same as used in About.jsx
import MustafaAlHassoun from '../../assets/images/about/team/mustafa-al-hassoun.gif'; // Add this image
import JasanMurugesan from '../../assets/images/about/team/jasan-murugesan.gif'; // Add this image
import TunkuAzwil from '../../assets/images/about/team/tunku-azwil.gif'; // Add this image
import AliubKhaidarov from '../../assets/images/about/team/aliub-khaidarov.gif'; // Add this image
import MinasAnastasi from '../../assets/images/about/team/minas-anastasi.gif'; // Add this image
import FathimaShafna from '../../assets/images/about/team/fathima-shafna.gif'; // Add this image
import SanaaHaris from '../../assets/images/about/team/sanaa-haris.gif'; // Add this image
import FathimaZainab from '../../assets/images/about/team/fathima-zainab.gif'; // Add this image
import SabrinaIsmail from '../../assets/images/about/team/sabrina-ismail.gif'; // Add this image
import MohamedJavad from '../../assets/images/about/team/mohamed-javad.gif'; // Add this image
import MaheshRamalingam from '../../assets/images/about/team/mahesh-ramalingam.gif'; // Add this image
import MohamedYasir from '../../assets/images/about/team/mohamed-yasir.gif'; // Add this image

const Team = () => {
  // Board of Directors
  const boardMembers = [
    {
      name: 'Mohamed Haris Yusuf',
      position: 'CEO & Managing Director',
      image: CEOImage
    },
    {
      name: 'Dr. T A Mustafa Al-Hassoun',
      position: 'Finance Director',
      image: MustafaAlHassoun
    },
    {
      name: 'Dato\' Dr. Jasan Murugesan',
      position: 'International Coordinating Director',
      image: JasanMurugesan
    },
    {
      name: 'Tunku Azwil',
      position: 'Director',
      image: TunkuAzwil
    },
    {
      name: 'Aliub Khaidarov',
      position: 'Business Development Director',
      image: AliubKhaidarov
    },
    {
      name: 'Minas Anastasi Mina',
      position: 'International Marketing Director',
      image: MinasAnastasi
    }
  ];
  
  // Management Team
  const managementTeam = [
    {
      name: 'Fathima Shafna Haris',
      position: 'Diamond Grading Specialist',
      image: FathimaShafna
    },
    {
      name: 'Sanaa Haris',
      position: 'Operation Director',
      image: SanaaHaris
    },
    {
      name: 'Fathima Zainab Haris',
      position: 'Jewelry Designer',
      image: FathimaZainab
    },
    {
      name: 'Sabrina binti Ismail',
      position: 'Secretary',
      image: SabrinaIsmail
    },
    {
      name: 'Mohamed Javad',
      position: 'Business Coordinating Director',
      image: MohamedJavad
    },
    {
      name: 'Mr. Mahesh Ramalingam',
      position: 'Accountant',
      image: MaheshRamalingam
    },
    {
      name: 'Mohamed Yasir',
      position: 'Web Designer',
      image: MohamedYasir
    }
  ];
  
  // Department teams
  const departmentTeams = [
    {
      department: 'Design Studio',
      description: 'Our talented designers blend traditional aesthetics with contemporary trends to create timeless jewelry pieces.',
      count: '12 Designers'
    },
    {
      department: 'Master Craftspeople',
      description: 'With decades of experience, our master jewelers transform designs into exquisite pieces with meticulous attention to detail.',
      count: '25 Artisans'
    },
    {
      department: 'Gemologists',
      description: 'Our expert gemologists select and grade only the finest Ceylon gems, ensuring exceptional quality and value.',
      count: '8 Specialists'
    },
    {
      department: 'Quality Control',
      description: 'Every piece undergoes rigorous quality checks to ensure it meets our exacting standards before reaching our customers.',
      count: '10 Experts'
    },
    {
      department: 'Customer Experience',
      description: 'Dedicated to providing a personalized luxury experience, our team guides clients through selecting their perfect piece.',
      count: '15 Advisors'
    },
    {
      department: 'Mining Operations',
      description: 'Our mining team in Sri Lanka employs sustainable practices to source the finest Ceylon gemstones directly from the earth.',
      count: '30 Professionals'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-[#08081a]" 
                 style={{
                   backgroundImage: `url(${TeamHeroImage})`,
                   backgroundPosition: 'center',
                   backgroundSize: 'cover',
                   backgroundRepeat: 'no-repeat'
                 }}>
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black opacity-30"></div>
              
              {/* Content overlay */}
              <div className="relative h-full z-10 flex items-center justify-center">
                <div className="container text-white text-center">
                  <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Team</h1>
                  <p className="max-w-2xl mx-auto">
                    Meet the dedicated professionals who bring the Harrico vision to life
                  </p>
                </div>
              </div>
            </div>

      {/* Team Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="The People Behind Our Excellence" 
            subtitle="OUR TEAM" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="max-w-3xl mx-auto mt-8 text-center">
            <p className="text-gray-700 mb-6">
              Our manufacturing facilities employ highly trained craftspeople with decades of collective experience. 
              Many of our master jewelers have been trained in traditional techniques passed down through 
              generations, creating a perfect synthesis of heritage and innovation.
            </p>
            <p className="text-gray-700">
              From our skilled artisans to our gemological experts, each member of the Harrico team 
              contributes to our legacy of excellence, ensuring we deliver exceptional quality and value 
              to our customers worldwide.
            </p>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Board of Directors */}
      <section className="py-16 md:py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Group Leadership" 
            subtitle="BOARD OF DIRECTORS" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {boardMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="h-64 overflow-hidden">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">Image coming soon</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-1">{member.name}</h3>
                  <p className="text-sm text-[#b9a16b] font-medium mb-4">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Management Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Management Team" 
            subtitle="KEY PERSONNEL" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
            {managementTeam.map((member, index) => (
              <div 
                key={index} 
                className="bg-[#f8f8f8] shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="h-64 overflow-hidden">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">Image coming soon</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-1">{member.name}</h3>
                  <p className="text-sm text-[#b9a16b] font-medium mb-4">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Craftspeople & Teams */}
      <section className="py-16 md:py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Our Specialized Teams" 
            subtitle="EXCELLENCE IN ACTION" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {departmentTeams.map((team, index) => (
              <div 
                key={index} 
                className="bg-white p-8 border border-gray-200 hover:border-[#b9a16b] transition-colors duration-300"
              >
                <h3 className="text-xl font-serif mb-2">{team.department}</h3>
                <p className="text-sm text-[#b9a16b] font-medium mb-4">{team.count}</p>
                <p className="text-gray-700">{team.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 md:py-24 bg-[#08081a] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Join Our Team</h2>
          <p className="max-w-2xl mx-auto mb-10">
            We're always looking for talented individuals who share our passion for excellence and 
            craftsmanship. Explore career opportunities with Harrico Group.
          </p>
          <a 
            href="/careers" 
            className="inline-block border border-[#b9a16b] text-[#b9a16b] px-12 py-3 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-300"
          >
            VIEW OPPORTUNITIES
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;