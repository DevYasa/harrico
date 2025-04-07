// src/pages/about/Team.jsx
import React from 'react';
import SectionTitle from '../../components/common/SectionTitle';
import GoldDivider from '../../components/common/GoldDivider';

// Import data
import { teamData } from '../../data/mockdata';

// Import hero image
import TeamHeroImage from '../../assets/images/about/bg13.jpg';

const Team = () => {
  const { introduction, boardMembers, managementTeam, departmentTeams } = teamData;

  return (
    <div className="bg-white">
      {/* Simple Image Header */}
      <div className="w-full h-96 relative">
        <img 
          src={TeamHeroImage} 
          alt="Harrico Team" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Team Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title={introduction.title}
            subtitle={introduction.subtitle}
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="max-w-3xl mx-auto mt-8 text-center">
            {introduction.content.map((paragraph, index) => (
              <p key={index} className={`text-gray-700 ${index < introduction.content.length - 1 ? 'mb-6' : ''}`}>
                {paragraph}
              </p>
            ))}
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
                className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-500 hover:-translate-y-2"
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
                className="bg-[#f8f8f8] shadow-md rounded-lg overflow-hidden transition-transform duration-500 hover:-translate-y-2"
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
                className="bg-white p-8 border border-gray-200 hover:border-[#b9a16b] transition-colors duration-500"
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
            className="inline-block border border-[#b9a16b] text-[#b9a16b] px-12 py-3 text-sm tracking-widest uppercase hover:bg-[#b9a16b] hover:text-white transition-all duration-500"
          >
            VIEW OPPORTUNITIES
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;