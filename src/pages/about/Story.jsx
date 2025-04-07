// src/pages/about/Story.jsx
import React from 'react';
import SectionTitle from '../../components/common/SectionTitle';
import GoldDivider from '../../components/common/GoldDivider';

// Import data
import { storyData } from '../../data/mockdata';

// Import images
import StoryHeroImage from '../../assets/images/about/bg13.jpeg'; 
import StoryImage1 from '../../assets/images/about/story-bg2.gif'; 
import StoryImage2 from '../../assets/images/about/story-bg1.gif'; 

const Story = () => {
  const { introduction, designProcess, coreValues, csrInitiatives } = storyData;

  return (
    <div className="bg-white">
      {/* Simple Image Header */}
      <div className="w-full h-96 relative">
        <img 
          src={StoryHeroImage} 
          alt="Harrico Story" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <SectionTitle 
                title={introduction.title}
                subtitle={introduction.subtitle}
                alignment="left"
              />
              
              <div className="space-y-4 mt-8">
                {introduction.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-700">{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src={StoryImage1} 
                alt="Harrico Artisans at Work" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Design & Manufacturing Process */}
      <section className="py-16 md:py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title={designProcess.title}
            subtitle={designProcess.subtitle}
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="flex flex-col md:flex-row items-center gap-12 mt-12">
            <div className="w-full md:w-1/2">
              <img 
                src={StoryImage2} 
                alt="Jewelry Design Process" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-serif mb-6">{designProcess.cadSection.title}</h3>
              {designProcess.cadSection.content.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-6">{paragraph}</p>
              ))}
              
              <h3 className="text-2xl font-serif mb-6 mt-8">{designProcess.craftSection.title}</h3>
              {designProcess.craftSection.content.map((paragraph, index) => (
                <p key={index} className="text-gray-700">{paragraph}</p>
              ))}
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-serif mb-8 text-center">Precision Manufacturing</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designProcess.manufacturingSteps.map((step, index) => (
                <div key={index} className="bg-white p-8 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-500">
                  <h4 className="text-xl font-serif mb-4">{step.title}</h4>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Competitive Advantages */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Competitive Advantages" 
            subtitle="WHY CHOOSE HARRICO" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-8 border border-gray-200 hover:border-[#b9a16b] transition-colors duration-500"
              >
                <div className="mb-6">
                  {value.icon === "mining" && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-[#b9a16b]">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.869A9 9 0 118.965 3.525" />
                    </svg>
                  )}
                  {value.icon === "craftsmanship" && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-[#b9a16b]">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                    </svg>
                  )}
                  {value.icon === "ethics" && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-[#b9a16b]">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.83 2.83m-2.83-2.83a48.454 48.454 0 00-7.86 0L5.25 7.8m13.5-2.82L12 21.75 5.25 7.8m13.5-2.82A49.18 49.18 0 0115.75 8m-7.5-5.82A49.18 49.18 0 018.25 8m5.5-5.82a48.394 48.394 0 00-5.5 0m5.5 0a48.394 48.394 0 010 5.82m0-5.82v5.82" />
                    </svg>
                  )}
                  {value.icon === "micropave" && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-[#b9a16b]">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178-.07-.207-.07-.431 0-.639C3.423 7.51 7.36 4.5 12 4.5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                  {value.icon === "expertise" && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-[#b9a16b]">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-serif mb-4">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* CSR Section */}
      <section className="py-16 md:py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Corporate Social Responsibility" 
            subtitle="GIVING BACK" 
            alignment="center"
            maxWidth="2xl"
          />
          
          <div className="max-w-3xl mx-auto mt-8 text-center">
            <p className="text-gray-700 mb-8">
              Harrico Group maintains a dedication to sustainable practices, ethical sourcing, and community 
              development. Our charity foundation provides relief and development assistance to individuals 
              and communities in need, irrespective of race or religion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 mt-8 max-w-4xl mx-auto">
            {csrInitiatives.map((initiative, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-[#b9a16b]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">{initiative.title}</h4>
                  <p className="text-gray-700">{initiative.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;