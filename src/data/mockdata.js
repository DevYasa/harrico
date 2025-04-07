// src/data/mockdata.js
export const companyInfo = {
    name: "Harrico Ceylon Gems and Jewelry Hub Malaysia SDN BHD",
    shortName: "Harrico",
    foundedYear: 1970,
    incorporationDate: "19th of March 2008",
    website: "www.harricogems.com",
    logo: "/assets/images/logo.png", // Update path as needed
    socialMedia: {
      facebook: "https://facebook.com/harricogems",
      instagram: "https://instagram.com/harricogems",
      twitter: "https://twitter.com/harricogems"
    },
    contact: {
      email: "info@harricogems.com",
      phone: "+60 3 2181 8953" // Replace with actual phone
    }
  };
  
  // Locations
  export const locations = {
    flagship: {
      name: "Flagship Store",
      address: "NO.2-03B 2nd floor, Intermark Mall,\n348, Jln Tun Razak, Kampung Datuk\nKeramat, 50400 Kuala Lumpur,\nMalaysia.",
      phone: "+60 3 2181 8953", // Replace with actual phone
      email: "kl@harricogems.com",
      hours: "Mon-Sat: 10:00 AM - 7:00 PM\nSunday: 11:00 AM - 6:00 PM",
      mapLink: "https://goo.gl/maps/...", // Add actual Google Maps link
      image: "/assets/images/stores/kl-store.jpg" // Update with actual image path
    },
    penang: {
      name: "Penang Showroom",
      address: "Parkroyal Hotel, No. 5 & 4, Batu\nFerringhi Beach, 11100 Penang,\nMalaysia.",
      phone: "+60 4 881 1133", // Replace with actual phone
      email: "penang@harricogems.com",
      hours: "Mon-Sat: 10:00 AM - 7:00 PM\nSunday: 11:00 AM - 6:00 PM",
      mapLink: "https://goo.gl/maps/...", // Add actual Google Maps link
      image: "/assets/images/stores/penang-store.jpg" // Update with actual image path
    },
    london: {
      name: "London Office",
      address: "33 Westminster Drive, London N13\n4NT, England.",
      phone: "+44 20 8888 8888", // Replace with actual phone
      email: "london@harricogems.com",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM\nSaturday & Sunday: Closed",
      mapLink: "https://goo.gl/maps/...", // Add actual Google Maps link
      image: "/assets/images/stores/london-office.jpg" // Update with actual image path
    }
  };
  
  // About Page Data
  export const aboutData = {
    introduction: {
      mainText: [
        "Incorporated on the 19th of March 2008 from a family generation based experience on Gems & Jewelleries back in Sri Lanka since 1970, HARRICO CEYLON GEMS AND JEWELRY HUB MALAYSIA SDN BHD has grown into a formidable entity today.",
        "In the past years of its establishment in Malaysia, the experience gained, expertise acquired, qualitative workmanship, latest designs, genuineness, professional attitude & competitive prices has propelled HARRICO CEYLON GEMS AND JEWELRY HUB MALAYSIA SDN BHD into a trustworthy & reliable Jewellery & Gem merchant."
      ],
      highlightedText: "Since its incorporation, HARRICO CEYLON GEMS AND JEWELRY HUB MALAYSIA SDN BHD has maintained a record of not only timely completion but also of quality works. The company has a every intention of perpetuating this proud record in all our future projects. This objective is reflected in the company culture of encouraging HARRICO CEYLON GEMS AND JEWELRY HUB MALAYSIA SDN BHD staff to embrace excellence through proper planning, work organization, quality & attention to specification & details in work execution.",
      additionalText: [
        "HARRICO CEYLON GEMS AND JEWELRY HUB MALAYSIA SDN BHD is also backed by a team of qualified technical consultants, craftsmen, marketing & advisor from various fields in their scope of works. It has also built a good liaison & working relationship with relevant authorities. All our employees are highly experienced jewellery makers.",
        "HARRICO CEYLON GEMS AND JEWELRY HUB MALAYSIA SDN BHD owns their own Gem mines in Sri Lanka where our director is originated & where Gemstones are popular. Most of our Gemstones are from our own mines where we guarantee the quality & the original."
      ]
    },
    
    ceoMessage: {
      name: "Haris Yusuf",
      title: "CEO & Managing Director",
      image: "/assets/images/about/haris.gif", // Update with actual path
      message: [
        "Dear Valued Partners,",
        "I am pleased to present Harrico Group's Corporate Profile.",
        "From our humble beginnings in Sri Lanka's gem trade in 1970 to our current standing as a diversified international conglomerate, our journey has been guided by unwavering commitment to quality and authenticity.",
        "Today, across our jewelry, education, food, and beverage divisions, we continue to honor our heritage while embracing innovation. Our vertically integrated approach ensures exceptional value for our customers and partners worldwide.",
        "We look forward to potential collaborations as we continue our growth journey.",
        "Sincerely,",
        "Mohamed Haris Yusuf"
      ]
    },
    
    sections: [
      {
        id: 'history',
        title: 'History & Heritage',
        description: 'From our humble beginnings in Sri Lanka\'s gem trade in 1970 to our current standing as a diversified international conglomerate.',
        link: '/about/history',
        linkText: 'EXPLORE OUR HISTORY'
      },
      {
        id: 'story',
        title: 'Our Story',
        description: 'Harrico Group\'s journey has been guided by unwavering commitment to quality and authenticity across our jewelry, education, food, and beverage divisions.',
        link: '/about/story',
        linkText: 'READ OUR STORY'
      },
      {
        id: 'team',
        title: 'Our Team',
        description: 'Meet the dedicated professionals and artisans who bring our vision to life through exceptional craftsmanship and innovation.',
        link: '/about/team',
        linkText: 'MEET OUR TEAM'
      }
    ]
  };
  
  // History Page Data
  export const historyData = {
    introduction: {
      title: "Our Heritage",
      subtitle: "SINCE 1970",
      content: [
        "From our humble beginnings in Sri Lanka's gem trade in 1970 to our current standing as a diversified international conglomerate, Harrico Group's journey has been guided by unwavering commitment to quality and authenticity.",
        "Our story began with a passion for Ceylon's extraordinary gemstones. Founded by the Yusuf family, the company initially focused on sourcing and trading the finest sapphires, rubies, and other precious stones from Sri Lanka's renowned gem mines.",
        "As decades passed, we expanded our expertise into fine jewelry manufacturing, combining traditional craftsmanship with innovative designs. Today, Harrico stands as a testament to perseverance, quality, and the timeless beauty of Ceylon gemstones."
      ]
    },
    
    timelineEvents: [
      {
        year: '1970',
        title: 'Humble Beginnings',
        description: 'Harrico was founded in Sri Lanka\'s gem trade, establishing the foundation for our expertise in Ceylon gemstones.'
      },
      {
        year: '1985',
        title: 'International Expansion',
        description: 'Opening our first international office, Harrico began exporting premium Ceylon gems to global markets.'
      },
      {
        year: '1995',
        title: 'Jewelry Manufacturing',
        description: 'Expanded into fine jewelry manufacturing, combining traditional craftsmanship with modern design techniques.'
      },
      {
        year: '2000',
        title: 'Flagship Store Opening',
        description: 'Opened our flagship store in Kuala Lumpur, Malaysia, bringing Ceylon gems directly to Southeast Asian customers.'
      },
      {
        year: '2008',
        title: 'Official Incorporation',
        description: 'Formally incorporated as Harrico Ceylon Gems and Jewelry Hub Malaysia SDN BHD on March 19th.'
      },
      {
        year: '2010',
        title: 'London Office',
        description: 'Established our London office to better serve European markets and high-end clientele.'
      },
      {
        year: '2015',
        title: 'Penang Showroom',
        description: 'Expanded our Malaysian presence with a luxurious showroom in Penang\'s Parkroyal Hotel.'
      },
      {
        year: '2020',
        title: 'Celebrating 50 Years',
        description: 'Marked our golden jubilee with special collections and reinforced commitment to sustainability and ethical practices.'
      },
      {
        year: '2023',
        title: 'Digital Transformation',
        description: 'Launched enhanced online presence to serve global customers with virtual consultations and digital showrooms.'
      }
    ],
    
    heritageValues: [
      {
        title: "Excellence",
        description: "Unwavering commitment to quality in every gemstone and jewelry piece we create.",
        icon: "excellence" // Reference to an icon component
      },
      {
        title: "Heritage",
        description: "Honoring our Sri Lankan origins and the multi-generational expertise in gemology.",
        icon: "heritage" // Reference to an icon component
      },
      {
        title: "Integrity",
        description: "Transparent sourcing and ethical practices in every aspect of our business.",
        icon: "integrity" // Reference to an icon component
      }
    ]
  };
  
  // Team Page Data
  export const teamData = {
    introduction: {
      title: "The People Behind Our Excellence",
      subtitle: "OUR TEAM",
      content: [
        "Our manufacturing facilities employ highly trained craftspeople with decades of collective experience. Many of our master jewelers have been trained in traditional techniques passed down through generations, creating a perfect synthesis of heritage and innovation.",
        "From our skilled artisans to our gemological experts, each member of the Harrico team contributes to our legacy of excellence, ensuring we deliver exceptional quality and value to our customers worldwide."
      ]
    },
    
    boardMembers: [
      {
        name: "Mohamed Haris Yusuf",
        position: "CEO & Managing Director",
        image: "/assets/images/about/haris.gif" // Update with actual path
      },
      {
        name: "Dr. T A Mustafa Al-Hassoun",
        position: "Finance Director",
        image: "/assets/images/about/team/mustafa-al-hassoun.gif" // Update with actual path
      },
      {
        name: "Dato' Dr. Jasan Murugesan",
        position: "International Coordinating Director",
        image: "/assets/images/about/team/jasan-murugesan.gif" // Update with actual path
      },
      {
        name: "Tunku Azwil",
        position: "Director",
        image: "/assets/images/about/team/tunku-azwil.gif" // Update with actual path
      },
      {
        name: "Aliub Khaidarov",
        position: "Business Development Director",
        image: "/assets/images/about/team/aliub-khaidarov.gif" // Update with actual path
      },
      {
        name: "Minas Anastasi Mina",
        position: "International Marketing Director",
        image: "/assets/images/about/team/minas-anastasi.gif" // Update with actual path
      }
    ],
    
    managementTeam: [
      {
        name: "Fathima Shafna Haris",
        position: "Diamond Grading Specialist",
        image: "/assets/images/about/team/fathima-shafna.gif" // Update with actual path
      },
      {
        name: "Sanaa Haris",
        position: "Operation Director",
        image: "/assets/images/about/team/sanaa-haris.gif" // Update with actual path
      },
      {
        name: "Fathima Zainab Haris",
        position: "Jewelry Designer",
        image: "/assets/images/about/team/fathima-zainab.gif" // Update with actual path
      },
      {
        name: "Sabrina binti Ismail",
        position: "Secretary",
        image: "/assets/images/about/team/sabrina-ismail.gif" // Update with actual path
      },
      {
        name: "Mohamed Javad",
        position: "Business Coordinating Director",
        image: "/assets/images/about/team/mohamed-javad.gif" // Update with actual path
      },
      {
        name: "Mr. Mahesh Ramalingam",
        position: "Accountant",
        image: "/assets/images/about/team/mahesh-ramalingam.gif" // Update with actual path
      },
      {
        name: "Mohamed Yasir",
        position: "Web Designer",
        image: "/assets/images/about/team/mohamed-yasir.gif" // Update with actual path
      }
    ],
    
    departmentTeams: [
      {
        department: "Design Studio",
        description: "Our talented designers blend traditional aesthetics with contemporary trends to create timeless jewelry pieces.",
        count: "12 Designers"
      },
      {
        department: "Master Craftspeople",
        description: "With decades of experience, our master jewelers transform designs into exquisite pieces with meticulous attention to detail.",
        count: "25 Artisans"
      },
      {
        department: "Gemologists",
        description: "Our expert gemologists select and grade only the finest Ceylon gems, ensuring exceptional quality and value.",
        count: "8 Specialists"
      },
      {
        department: "Quality Control",
        description: "Every piece undergoes rigorous quality checks to ensure it meets our exacting standards before reaching our customers.",
        count: "10 Experts"
      },
      {
        department: "Customer Experience",
        description: "Dedicated to providing a personalized luxury experience, our team guides clients through selecting their perfect piece.",
        count: "15 Advisors"
      },
      {
        department: "Mining Operations",
        description: "Our mining team in Sri Lanka employs sustainable practices to source the finest Ceylon gemstones directly from the earth.",
        count: "30 Professionals"
      }
    ]
  };
  
  // Story Page Data
  export const storyData = {
    introduction: {
      title: "Our Journey",
      subtitle: "THE HARRICO STORY",
      content: [
        "Harrico Gems & Jewels forms the cornerstone of our group, embodying our rich heritage in gemology and jewelry craftsmanship. With direct ownership of gem mines in Sri Lanka, we maintain complete control over our supply chain, ensuring authenticity and exceptional quality in every piece we create.",
        "Our journey began in 1970 when our founder first discovered the magical allure of Ceylon gemstones in the lush hills of Sri Lanka. What started as a small trading business soon grew into a vertically integrated operation spanning mining, cutting, jewelry design, and retail.",
        "Today, across our jewelry, education, food, and beverage divisions, we continue to honor our heritage while embracing innovation. Our approach ensures exceptional value for our customers and partners worldwide."
      ]
    },
    
    designProcess: {
      title: "Design & Manufacturing Process",
      subtitle: "CRAFTSMANSHIP",
      cadSection: {
        title: "CAD Design Excellence",
        content: [
          "At Harrico Group, we pride ourselves on seamlessly blending traditional craftsmanship with cutting-edge technology. Our integrated design and manufacturing process ensures exceptional quality and precision in every product we create.",
          "Our design team utilizes advanced Computer-Aided Design (CAD) software to create detailed 3D models of each jewelry piece. This precision technology allows us to visualize designs from multiple angles, calculate exact gem measurements, and make precise adjustments."
        ]
      },
      craftSection: {
        title: "Master Craftsmanship",
        content: [
          "Our manufacturing facilities employ highly trained craftspeople with decades of collective experience. Many of our master jewelers have been trained in traditional techniques passed down through generations, creating a perfect synthesis of heritage and innovation."
        ]
      },
      manufacturingSteps: [
        {
          title: "Detailed Wax Modeling",
          description: "Each piece begins with 3D printing of detailed wax models, capturing every intricate detail of the design with perfect precision."
        },
        {
          title: "Lost-Wax Casting",
          description: "We use the traditional lost-wax casting method in precious metals, ensuring structural integrity and fine detail preservation."
        },
        {
          title: "Expert Stone Setting",
          description: "Our specialized technicians expertly set each gemstone, using techniques ranging from prong to pavé to bezel settings."
        },
        {
          title: "Hand-Finishing",
          description: "Every piece receives meticulous hand-finishing and polishing to achieve the perfect luster and texture."
        },
        {
          title: "Quality Control",
          description: "We maintain rigorous quality control at every stage, ensuring each piece meets our exacting standards for beauty and durability."
        },
        {
          title: "Final Inspection",
          description: "Master jewelers conduct final inspections, verifying that each creation meets the Harrico standard of excellence."
        }
      ]
    },
    
    coreValues: [
      {
        title: "Direct Sourcing",
        description: "We own and operate gem mines in Ceylon, giving us complete control over the quality and ethical sourcing of our gemstones.",
        icon: "mining" // Reference to an icon component
      },
      {
        title: "Skilled Craftsmanship",
        description: "Our master jewelers have trained internationally and bring generations of expertise to create stunning pieces with precision.",
        icon: "craftsmanship" // Reference to an icon component
      },
      {
        title: "Ethical Practices",
        description: "We maintain transparent sourcing and fair labor practices throughout our supply chain, ensuring social responsibility.",
        icon: "ethics" // Reference to an icon component
      },
      {
        title: "Micro Pavé Setting",
        description: "Our artisans excel in advanced micro pavé setting techniques, creating intricate designs with unmatched brilliance.",
        icon: "micropave" // Reference to an icon component
      },
      {
        title: "Multi-Generational Expertise",
        description: "Our knowledge in gem cutting and jewelry making has been passed down through generations, combining tradition with innovation.",
        icon: "expertise" // Reference to an icon component
      }
    ],
    
    csrInitiatives: [
      {
        title: "Health Services",
        description: "Providing essential health services for underserved populations in our communities."
      },
      {
        title: "Artisan Support",
        description: "Supporting traditional artisans and craft preservation to maintain cultural heritage."
      },
      {
        title: "Educational Scholarships",
        description: "Providing educational opportunities for underprivileged students through scholarships."
      },
      {
        title: "Environmental Restoration",
        description: "Conducting environmental restoration projects in gem mining regions to minimize impact."
      },
      {
        title: "Community Development",
        description: "Implementing community development initiatives near our mining operations to improve quality of life."
      }
    ]
  };
  
  // News Page Data
  export const newsData = {
    featuredArticles: [
      {
        id: 'new-collection-2025',
        title: 'Harrico Unveils Exclusive "Ceylon Blue" Collection',
        date: 'March 15, 2025',
        category: 'Collections',
        excerpt: 'Harrico launches its highly anticipated Ceylon Blue Collection, featuring rare blue sapphires in contemporary designs.',
        image: '/assets/images/about/news/blue-collection.gif',
        featured: true,
        content: [
          "Harrico Ceylon Gems and Jewelry Hub Malaysia is proud to announce the launch of our exclusive \"Ceylon Blue\" Collection. This highly anticipated collection showcases the extraordinary beauty of rare blue sapphires from our own mines in Sri Lanka, set in contemporary designs that blend traditional craftsmanship with modern aesthetics.",
          "The Ceylon Blue Collection features a carefully curated selection of necklaces, earrings, rings, and bracelets, each highlighting the exceptional color, clarity, and brilliance of our premium Ceylon sapphires. These gemstones, known for their distinctive cornflower blue hue, are among the most sought-after in the world.",
          "\"This collection represents the culmination of our gem expertise and jewelry craftsmanship,\" says Mohamed Haris Yusuf, CEO and Managing Director. \"Each piece tells a story of Ceylon's rich gemological heritage while appealing to contemporary tastes.\"",
          "The collection will be available exclusively at our flagship store in Kuala Lumpur and Penang showroom starting March 20, 2025, with a special preview event for VIP clients on March 18th."
        ]
      }
    ],
    
    latestArticles: [
      {
        id: 'london-exhibition',
        title: 'Harrico to Showcase Rare Gems at London Exhibition',
        date: 'February 28, 2025',
        category: 'Events',
        excerpt: 'Join us at the International Gem Exhibition in London where we\'ll be presenting our most extraordinary Ceylon gemstones.',
        image: '/assets/images/about/news/london-exhibition.gif',
        featured: false,
        content: [
          "Harrico Ceylon Gems and Jewelry Hub Malaysia is thrilled to announce our participation in the prestigious International Gem Exhibition in London, scheduled from March 10-15, 2025. We will be showcasing an exceptional collection of rare Ceylon gemstones, including sapphires, rubies, and alexandrites sourced directly from our mines in Sri Lanka.",
          "This exclusive exhibition offers a unique opportunity for collectors, investors, and jewelry enthusiasts to view and acquire some of the world's finest gemstones. Our expert gemologists will be on hand to provide detailed information about each stone's origin, properties, and value.",
          "\"We are excited to bring these extraordinary treasures from Ceylon to the London market,\" says Minas Anastasi Mina, International Marketing Director. \"This exhibition allows us to share the unparalleled beauty and quality of our gemstones with a discerning international audience.\"",
          "For those interested in scheduling a private viewing or learning more about our exhibition collection, please contact our London office."
        ]
      },
      {
        id: 'sustainable-mining',
        title: 'Harrico Expands Sustainable Mining Practices',
        date: 'January 20, 2025',
        category: 'Corporate',
        excerpt: 'Our commitment to sustainability grows with new eco-friendly mining techniques implemented across all our Ceylon operations.',
        image: '/assets/images/about/news/sustainable-mining.gif',
        featured: false,
        content: [
          "Harrico Ceylon Gems and Jewelry Hub Malaysia is proud to announce the expansion of our sustainable mining practices across all our operations in Sri Lanka. This initiative underscores our ongoing commitment to environmental stewardship and responsible resource management.",
          "The new eco-friendly techniques include improved water recycling systems, reduced energy consumption through solar power integration, and advanced land rehabilitation methods. These practices minimize our environmental footprint while ensuring the continued production of high-quality gemstones.",
          "\"Sustainability is not just a buzzword for us—it's a core value that guides how we operate,\" explains Mohamed Haris Yusuf, CEO and Managing Director. \"We believe that responsible mining practices are essential for the long-term viability of our industry and the preservation of Sri Lanka's natural resources.\"",
          "As part of this initiative, we are also investing in local community development programs and providing specialized training for our mining teams on sustainable practices."
        ]
      },
      {
        id: 'scholarship-program',
        title: 'Harrico Launches Gemology Scholarship Program',
        date: 'November 5, 2024',
        category: 'Community',
        excerpt: 'Our new educational initiative will provide full scholarships to promising students interested in pursuing careers in gemology.',
        image: '/assets/images/about/news/scholarship.gif',
        featured: false,
        content: [
          "Harrico Ceylon Gems and Jewelry Hub Malaysia is proud to announce the launch of our Gemology Scholarship Program, designed to nurture the next generation of gemology professionals. This initiative will provide full scholarships to promising students who demonstrate exceptional interest and aptitude in the field of gemology.",
          "The program will cover tuition fees, educational materials, and practical training opportunities at internationally recognized gemological institutions. Scholarship recipients will also have the opportunity to gain hands-on experience through internships at our facilities in Malaysia and Sri Lanka.",
          "\"Education is the foundation of excellence in our industry,\" says Dr. T A Mustafa Al-Hassoun, Finance Director. \"Through this scholarship program, we aim to cultivate skilled professionals who will contribute to the advancement of gemological knowledge and practices.\"",
          "Applications for the inaugural scholarship cycle will open on January 15, 2025. Interested candidates can find more information and application guidelines on our website."
        ]
      },
      {
        id: 'anniversary-celebration',
        title: 'Harrico Celebrates 55 Years of Excellence',
        date: 'October 30, 2024',
        category: 'Events',
        excerpt: 'Join us for a special anniversary celebration at our flagship store, featuring a retrospective exhibition of our heritage pieces.',
        image: '/assets/images/about/news/anniversary.gif',
        featured: false,
        content: [
          "Harrico Ceylon Gems and Jewelry Hub Malaysia invites you to join us in celebrating 55 years of excellence in the gem and jewelry industry. From our humble beginnings in Sri Lanka's gem trade in 1970 to our current standing as a diversified international conglomerate, our journey has been guided by unwavering commitment to quality and authenticity.",
          "The celebration will feature a retrospective exhibition of heritage pieces that showcase our craftsmanship evolution over the decades. Visitors will have the opportunity to view rare gemstones and iconic jewelry designs that have defined our legacy of excellence.",
          "\"This milestone celebration is a tribute to our founders' vision and the dedication of everyone who has contributed to Harrico's growth and success over the past 55 years,\" notes Mohamed Haris Yusuf, CEO and Managing Director. \"We are proud of our heritage and excited about our future.\"",
          "The anniversary celebration will take place from November 10-15, 2024, at our flagship store in Kuala Lumpur. Special events, including gem appreciation workshops and jewelry design demonstrations, will be held throughout the week."
        ]
      }
    ],
    
    upcomingEvents: [
      {
        id: 'trunk-show-kl',
        title: 'Bridal Collection Trunk Show',
        date: 'April 15-17, 2025',
        location: 'Flagship Store, Kuala Lumpur',
        description: 'Experience our complete bridal jewelry collection with personalized styling sessions and special pricing.',
        registerLink: '/events/bridal-trunk-show',
        details: [
          "We are delighted to invite you to an exclusive trunk show featuring our complete 2025 Bridal Collection. This special event offers a unique opportunity to explore our extensive range of engagement rings, wedding bands, and bridal party jewelry.",
          "Expert stylists will be available for one-on-one consultations to help you select the perfect pieces for your special day. Special pricing will be offered exclusively during this three-day event.",
          "Appointments are highly recommended to ensure personalized attention."
        ]
      },
      {
        id: 'gem-talk',
        title: 'The Magic of Ceylon Sapphires',
        date: 'April 25, 2025',
        location: 'Penang Showroom',
        description: 'Join our Chief Gemologist for an educational talk about the unique properties of Ceylon sapphires.',
        registerLink: '/events/sapphire-talk',
        details: [
          "Join our Chief Gemologist for an enlightening presentation on the unique properties and enduring appeal of Ceylon sapphires. Learn about the geological conditions that create these exceptional gemstones, how to evaluate their quality, and what makes them among the most prized sapphires in the world.",
          "The presentation will be followed by a hands-on session where attendees can examine a variety of Ceylon sapphires under expert guidance. Refreshments will be served.",
          "Space is limited, and registration is required."
        ]
      }
    ]
  };
  
  // Gemstone Data
  export const gemstoneData = {
    preciousGemstones: [
      {
        id: "blue-sapphire",
        name: "Blue Sapphire",
        description: "Ceylon blue sapphires are renowned worldwide for their vivid, cornflower blue color and exceptional clarity. Mined from our own deposits in Sri Lanka, our blue sapphires exhibit the perfect balance of tone and saturation that defines premium quality.",
        properties: {
          mineralType: "Corundum",
          hardness: "9 on Mohs scale",
          color: "Various shades of blue",
          origin: "Sri Lanka (Ceylon)",
          treatment: "Heat treatment (disclosed when applied)"
        },
        image: "/assets/images/gemstones/blue-sapphire.jpg",
        featured: true
      },
      {
        id: "ruby",
        name: "Ruby",
        description: "Ceylon rubies are treasured for their raspberry to vivid red hues with subtle purple undertones. Our ethically sourced rubies come directly from our mines in Sri Lanka, offering excellent transparency and a silky luster that distinguishes them from rubies of other origins.",
        properties: {
          mineralType: "Corundum",
          hardness: "9 on Mohs scale",
          color: "Red to purplish-red",
          origin: "Sri Lanka (Ceylon)",
          treatment: "Heat treatment (disclosed when applied)"
        },
        image: "/assets/images/gemstones/ruby.jpg",
        featured: true
      },
      {
        id: "emerald",
        name: "Emerald",
        description: "Our Ceylon emeralds display a unique bluish-green color with excellent transparency. While less common than Sri Lankan sapphires and rubies, these emeralds are highly sought after by collectors for their distinctive color profile and clarity.",
        properties: {
          mineralType: "Beryl",
          hardness: "7.5-8 on Mohs scale",
          color: "Bluish-green to green",
          origin: "Sri Lanka (Ceylon)",
          treatment: "Minimal oil treatment (disclosed when applied)"
        },
        image: "/assets/images/gemstones/emerald.jpg",
        featured: false
      }
    ],
    
    semiPreciousGemstones: [
        {
          id: "amethyst",
          name: "Amethyst",
          description: "Ceylon amethysts are prized for their deep purple color with reddish undertones. Our amethysts are carefully selected for their rich saturation and exceptional clarity, making them ideal for statement jewelry pieces.",
          properties: {
            mineralType: "Quartz",
            hardness: "7 on Mohs scale",
            color: "Light to deep purple",
            origin: "Sri Lanka (Ceylon)",
            treatment: "None"
          },
          image: "/assets/images/gemstones/amethyst.jpg",
          featured: true
        },
        {
          id: "garnet",
          name: "Garnet",
          description: "Ceylon garnets come in a wide range of colors, from the classic deep red almandine to the rare color-changing varieties. Our garnet collection showcases this versatility, with each stone selected for its vibrant color and brilliance.",
          properties: {
            mineralType: "Garnet group",
            hardness: "6.5-7.5 on Mohs scale",
            color: "Red, orange, green, purple, color-changing",
            origin: "Sri Lanka (Ceylon)",
            treatment: "None"
          },
          image: "/assets/images/gemstones/garnet.jpg",
          featured: false
        },
        {
          id: "topaz",
          name: "Topaz",
          description: "Ceylon topaz is known for its exceptional clarity and range of colors. Our collection features natural blue and golden topaz, sourced directly from our mines in Sri Lanka, offering excellent value and versatility for fine jewelry.",
          properties: {
            mineralType: "Topaz",
            hardness: "8 on Mohs scale",
            color: "Colorless, blue, golden, pink",
            origin: "Sri Lanka (Ceylon)",
            treatment: "Heat or irradiation (disclosed when applied)"
          },
          image: "/assets/images/gemstones/topaz.jpg",
          featured: false
        },
        {
          id: "spinel",
          name: "Spinel",
          description: "Ceylon spinels are among the finest in the world, offering exceptional brilliance and a wide color palette. Our collection includes the classic red spinels as well as rare cobalt blue, vivid pink, and orange varieties, all untreated and naturally beautiful.",
          properties: {
            mineralType: "Spinel",
            hardness: "8 on Mohs scale",
            color: "Red, blue, pink, purple, orange",
            origin: "Sri Lanka (Ceylon)",
            treatment: "None"
          },
          image: "/assets/images/gemstones/spinel.jpg",
          featured: true
        },
        {
          id: "aquamarine",
          name: "Aquamarine",
          description: "Ceylon aquamarines display a distinctive greenish-blue color that evokes the beauty of tropical waters. Our aquamarines are selected for their exceptional clarity and color, making them perfect for both classic and contemporary jewelry designs.",
          properties: {
            mineralType: "Beryl",
            hardness: "7.5-8 on Mohs scale",
            color: "Light blue to greenish-blue",
            origin: "Sri Lanka (Ceylon)",
            treatment: "Heat treatment (disclosed when applied)"
          },
          image: "/assets/images/gemstones/aquamarine.jpg",
          featured: false
        }
      ],
      
      rareGemstones: [
        {
          id: "alexandrite",
          name: "Alexandrite",
          description: "Ceylon alexandrite is one of the world's most rare and valuable gemstones, famous for its color-changing properties. Our alexandrites display a dramatic shift from bluish-green in daylight to purplish-red in incandescent light, exemplifying the highest quality of this extraordinary gem.",
          properties: {
            mineralType: "Chrysoberyl",
            hardness: "8.5 on Mohs scale",
            color: "Color-changing: green/blue to red/purple",
            origin: "Sri Lanka (Ceylon)",
            treatment: "None"
          },
          image: "/assets/images/gemstones/alexandrite.jpg",
          featured: true
        },
        {
          id: "padparadscha-sapphire",
          name: "Padparadscha Sapphire",
          description: "The legendary Padparadscha sapphire is among the most coveted gems in the world. Named after the lotus flower, these rare sapphires display a unique blend of pink and orange that captures the colors of a tropical sunset. Our Padparadscha sapphires come exclusively from our mines in Sri Lanka, the original and most prestigious source for these exceptional gemstones.",
          properties: {
            mineralType: "Corundum",
            hardness: "9 on Mohs scale",
            color: "Pinkish-orange to orangey-pink",
            origin: "Sri Lanka (Ceylon)",
            treatment: "None or minimal heat (disclosed when applied)"
          },
          image: "/assets/images/gemstones/padparadscha.jpg",
          featured: true
        },
        {
          id: "cat-eye-chrysoberyl",
          name: "Cat's Eye Chrysoberyl",
          description: "Ceylon cat's eye chrysoberyl is the standard against which all other chatoyant gems are measured. Our specimens display a sharp, well-defined 'eye' that opens and closes dramatically as the stone moves, set against a honey to greenish-gold background that showcases this optical phenomenon perfectly.",
          properties: {
            mineralType: "Chrysoberyl",
            hardness: "8.5 on Mohs scale",
            color: "Honey, greenish-gold, brown",
            origin: "Sri Lanka (Ceylon)",
            treatment: "None"
          },
          image: "/assets/images/gemstones/cats-eye.jpg",
          featured: false
        }
      ]
    };
    
    // Jewelry Data
    export const jewelryData = {
      goldJewelry: {
        title: "Gold Jewelry",
        subtitle: "TIMELESS ELEGANCE",
        description: "Our gold jewelry collection combines traditional craftsmanship with contemporary design, showcasing the natural beauty of our Ceylon gemstones in settings of 18K and 22K gold.",
        collections: [
          {
            id: "classic-gold",
            name: "Classic Gold Collection",
            description: "Timeless designs featuring 22K gold that celebrate traditional craftsmanship and enduring style.",
            featured: true,
            items: [
              {
                id: "classic-gold-necklace",
                name: "Ceylon Sapphire Necklace",
                description: "22K gold necklace featuring a 3-carat Ceylon blue sapphire pendant surrounded by diamonds.",
                price: "MYR 18,500",
                image: "/assets/images/jewelry/gold/classic-necklace.jpg",
                gemstones: ["blue-sapphire", "diamond"],
                metals: ["22k-gold"],
                featured: true
              },
              {
                id: "classic-gold-ring",
                name: "Royal Ruby Ring",
                description: "22K gold ring showcasing a 2-carat Ceylon ruby with diamond accents.",
                price: "MYR 12,800",
                image: "/assets/images/jewelry/gold/classic-ring.jpg",
                gemstones: ["ruby", "diamond"],
                metals: ["22k-gold"],
                featured: true
              }
            ]
          },
          {
            id: "contemporary-gold",
            name: "Contemporary Gold Collection",
            description: "Modern designs in 18K gold that blend innovative aesthetics with traditional gemstone quality.",
            featured: true,
            items: [
              {
                id: "contemporary-gold-earrings",
                name: "Cascade Earrings",
                description: "18K gold earrings with graduated Ceylon sapphires in shades of blue.",
                price: "MYR 14,200",
                image: "/assets/images/jewelry/gold/contemporary-earrings.jpg",
                gemstones: ["blue-sapphire"],
                metals: ["18k-gold"],
                featured: false
              },
              {
                id: "contemporary-gold-bracelet",
                name: "Harmony Bracelet",
                description: "18K gold bracelet featuring alternating Ceylon rubies and diamonds in a modern link design.",
                price: "MYR 16,500",
                image: "/assets/images/jewelry/gold/contemporary-bracelet.jpg",
                gemstones: ["ruby", "diamond"],
                metals: ["18k-gold"],
                featured: true
              }
            ]
          },
          {
            id: "emerald-gold",
            name: "Emerald Gold Collection",
            description: "Luxurious designs showcasing our finest Ceylon emeralds set in rich gold settings.",
            featured: false,
            items: [
              {
                id: "emerald-gold-ring",
                name: "Emerald Heritage Ring",
                description: "18K yellow gold ring featuring a 1.5-carat emerald-cut Ceylon emerald with diamond halo.",
                price: "MYR 16,800",
                image: "/assets/images/jewelry/gold/emerald-ring.jpg",
                gemstones: ["emerald", "diamond"],
                metals: ["18k-yellow-gold"],
                featured: true
              },
              {
                id: "emerald-gold-pendant",
                name: "Emerald Elegance Pendant",
                description: "22K gold pendant with a 2-carat Ceylon emerald suspended from a delicate gold chain.",
                price: "MYR 15,200",
                image: "/assets/images/jewelry/gold/emerald-pendant.jpg",
                gemstones: ["emerald"],
                metals: ["22k-gold"],
                featured: false
              }
            ]
          }
        ]
      },
      
      platinumJewelry: {
        title: "Platinum Jewelry",
        subtitle: "MODERN SOPHISTICATION",
        description: "Our platinum collection exemplifies modern luxury, pairing the cool elegance of this precious metal with the vibrant colors of our Ceylon gemstones.",
        collections: [
          {
            id: "signature-platinum",
            name: "Signature Platinum Collection",
            description: "Distinguished designs that showcase exceptional gemstones in pure platinum settings.",
            featured: true,
            items: [
              {
                id: "signature-platinum-ring",
                name: "Eternity Platinum Ring",
                description: "Platinum ring featuring a 3-carat unheated Ceylon blue sapphire center stone with diamond pavé band.",
                price: "MYR 24,800",
                image: "/assets/images/jewelry/platinum/signature-ring.jpg",
                gemstones: ["blue-sapphire", "diamond"],
                metals: ["platinum"],
                featured: true
              },
              {
                id: "signature-platinum-earrings",
                name: "Radiance Earrings",
                description: "Platinum drop earrings with matching Ceylon sapphires surrounded by diamond halos.",
                price: "MYR 18,500",
                image: "/assets/images/jewelry/platinum/signature-earrings.jpg",
                gemstones: ["blue-sapphire", "diamond"],
                metals: ["platinum"],
                featured: true
              }
            ]
          },
          {
            id: "ruby-platinum",
            name: "Ruby Platinum Collection",
            description: "Contemporary designs featuring vibrant Ceylon rubies set in sleek platinum.",
            featured: true,
            items: [
              {
                id: "ruby-platinum-ring",
                name: "Royal Ruby Platinum Ring",
                description: "Platinum ring featuring a 2-carat cushion-cut Ceylon ruby with diamond halo and split shank.",
                price: "MYR 22,500",
                image: "/assets/images/jewelry/platinum/ruby-ring.jpg",
                gemstones: ["ruby", "diamond"],
                metals: ["platinum"],
                featured: true
              },
              {
                id: "ruby-platinum-necklace",
                name: "Ruby Cascade Necklace",
                description: "Platinum necklace with graduated Ceylon rubies and diamond accents.",
                price: "MYR 26,800",
                image: "/assets/images/jewelry/platinum/ruby-necklace.jpg",
                gemstones: ["ruby", "diamond"],
                metals: ["platinum"],
                featured: false
              }
            ]
          },
          {
            id: "emerald-platinum",
            name: "Emerald Platinum Collection",
            description: "Modern designs showcasing the vibrant green of Ceylon emeralds against cool platinum.",
            featured: false,
            items: [
              {
                id: "emerald-platinum-ring",
                name: "Emerald Aura Ring",
                description: "Platinum ring featuring a 1.8-carat emerald-cut Ceylon emerald with trapezoid diamond side stones.",
                price: "MYR 19,500",
                image: "/assets/images/jewelry/platinum/emerald-ring.jpg",
                gemstones: ["emerald", "diamond"],
                metals: ["platinum"],
                featured: true
              },
              {
                id: "emerald-platinum-earrings",
                name: "Emerald Drop Earrings",
                description: "Platinum earrings with pear-shaped Ceylon emeralds and diamond halos.",
                price: "MYR 17,800",
                image: "/assets/images/jewelry/platinum/emerald-earrings.jpg",
                gemstones: ["emerald", "diamond"],
                metals: ["platinum"],
                featured: false
              }
            ]
          }
        ]
      },
      
      silverPalladiumJewelry: {
        title: "Silver & Palladium Jewelry",
        subtitle: "ACCESSIBLE LUXURY",
        description: "Our silver and palladium collections offer accessible luxury without compromising on quality or design.",
        collections: [
          {
            id: "sterling-silver",
            name: "Sterling Silver Collection",
            description: "Contemporary designs in sterling silver that highlight the beauty of our Ceylon gemstones.",
            featured: true,
            items: [
              {
                id: "sterling-silver-pendant",
                name: "Azure Pendant",
                description: "Sterling silver pendant featuring a 1.5-carat Ceylon blue sapphire with white topaz accents.",
                price: "MYR 3,800",
                image: "/assets/images/jewelry/silver/silver-pendant.jpg",
                gemstones: ["blue-sapphire", "white-topaz"],
                metals: ["sterling-silver"],
                featured: true
              },
              {
                id: "sterling-silver-bracelet",
                name: "Cascade Bracelet",
                description: "Sterling silver tennis bracelet with graduated Ceylon sapphires in rainbow colors.",
                price: "MYR 4,200",
                image: "/assets/images/jewelry/silver/silver-bracelet.jpg",
                gemstones: ["multi-color-sapphire"],
                metals: ["sterling-silver"],
                featured: false
              }
            ]
          },
          {
            id: "ruby-silver",
            name: "Ruby Silver Collection",
            description: "Bold and affordable designs featuring vibrant Ceylon rubies set in sterling silver.",
            featured: false,
            items: [
              {
                id: "ruby-silver-ring",
                name: "Ruby Solitaire Ring",
                description: "Sterling silver ring featuring a 1-carat round Ceylon ruby.",
                price: "MYR 2,800",
                image: "/assets/images/jewelry/silver/ruby-ring.jpg",
                gemstones: ["ruby"],
                metals: ["sterling-silver"],
                featured: true
              },
              {
                id: "ruby-silver-earrings",
                name: "Ruby Stud Earrings",
                description: "Sterling silver stud earrings with round Ceylon rubies totaling 1 carat.",
                price: "MYR 2,400",
                image: "/assets/images/jewelry/silver/ruby-earrings.jpg",
                gemstones: ["ruby"],
                metals: ["sterling-silver"],
                featured: false
              }
            ]
          },
          {
            id: "emerald-silver",
            name: "Emerald Silver Collection",
            description: "Contemporary designs featuring Ceylon emeralds in sterling silver settings.",
            featured: false,
            items: [
              {
                id: "emerald-silver-pendant",
                name: "Emerald Drop Pendant",
                description: "Sterling silver pendant featuring a 1.2-carat pear-shaped Ceylon emerald.",
                price: "MYR 3,200",
                image: "/assets/images/jewelry/silver/emerald-pendant.jpg",
                gemstones: ["emerald"],
                metals: ["sterling-silver"],
                featured: true
              },
              {
                id: "emerald-silver-bracelet",
                name: "Emerald Link Bracelet",
                description: "Sterling silver bracelet with Ceylon emerald stations.",
                price: "MYR 3,600",
                image: "/assets/images/jewelry/silver/emerald-bracelet.jpg",
                gemstones: ["emerald"],
                metals: ["sterling-silver"],
                featured: false
              }
            ]
          }
        ]
      }
    };
    
    // Helper functions you could add to make filtering easier
    export const filterJewelryByGemstone = (gemstoneId) => {
      const allItems = [];
      
      // Collect all jewelry items across different metal types
      Object.values(jewelryData).forEach(metalType => {
        metalType.collections.forEach(collection => {
          collection.items.forEach(item => {
            if (item.gemstones && item.gemstones.includes(gemstoneId)) {
              allItems.push({
                ...item,
                collectionName: collection.name,
                metalType: metalType.title
              });
            }
          });
        });
      });
      
      return allItems;
    };
    
    export const filterJewelryByMetal = (metalId) => {
      const allItems = [];
      
      // Collect all jewelry items with the specified metal
      Object.values(jewelryData).forEach(metalType => {
        metalType.collections.forEach(collection => {
          collection.items.forEach(item => {
            if (item.metals && item.metals.includes(metalId)) {
              allItems.push({
                ...item,
                collectionName: collection.name,
                metalType: metalType.title
              });
            }
          });
        });
      });
      
      return allItems;
    };
    
    // Categories Data
    export const categoriesData = {
      rings: {
        title: "Rings",
        subtitle: "STATEMENT PIECES",
        description: "Our ring collection spans from stunning engagement rings to bold statement pieces, each showcasing exceptional Ceylon gemstones in settings designed to highlight their unique beauty.",
        collections: [
          {
            id: "engagement-rings",
            name: "Engagement Rings",
            description: "Timeless symbols of love featuring exceptional Ceylon sapphires, rubies, and rare gemstones.",
            featured: true,
            items: [
              {
                id: "classic-sapphire-engagement",
                name: "Classic Ceylon Sapphire",
                description: "Platinum ring featuring a 2-carat oval Ceylon blue sapphire with diamond halo and band.",
                price: "MYR 22,500",
                image: "/assets/images/categories/rings/sapphire-engagement.jpg"
              },
              {
                id: "ruby-engagement",
                name: "Passion Ruby",
                description: "18K rose gold ring with a 1.8-carat cushion-cut Ceylon ruby and diamond accents.",
                price: "MYR 18,800",
                image: "/assets/images/categories/rings/ruby-engagement.jpg"
              }
            ]
          },
          {
            id: "cocktail-rings",
            name: "Cocktail Rings",
            description: "Bold, statement-making rings featuring large Ceylon gemstones in artistic settings.",
            featured: true,
            items: [
              {
                id: "alexandrite-cocktail",
                name: "Twilight Alexandrite",
                description: "18K white gold cocktail ring featuring a 5-carat color-changing Ceylon alexandrite surrounded by diamonds.",
                price: "MYR 85,000",
                image: "/assets/images/categories/rings/alexandrite-cocktail.jpg"
              },
              {
                id: "multicolor-cocktail",
                name: "Rainbow Symphony",
                description: "18K yellow gold ring showcasing multiple Ceylon sapphires in various colors arranged in a floral design.",
                price: "MYR 28,500",
                image: "/assets/images/categories/rings/multicolor-cocktail.jpg"
              }
            ]
          }
        ]
      },
      
      necklaces: {
        title: "Necklaces",
        subtitle: "ELEGANT STATEMENTS",
        description: "From sophisticated pendants to statement collar necklaces, our collection showcases the vibrant colors of Ceylon gemstones in designs that range from classic to contemporary.",
        collections: [
          {
            id: "pendants",
            name: "Pendants",
            description: "Elegant gemstone pendants on precious metal chains, perfect for everyday luxury.",
            featured: true,
            items: [
              {
                id: "sapphire-drop-pendant",
                name: "Sapphire Drop",
                description: "18K white gold pendant featuring a 2-carat pear-shaped Ceylon blue sapphire with diamond halo on a delicate chain.",
                price: "MYR 16,500",
                image: "/assets/images/categories/necklaces/sapphire-pendant.jpg"
              },
              {
                id: "ruby-heart-pendant",
                name: "Ruby Heart",
                description: "18K rose gold heart-shaped pendant with a 1.5-carat Ceylon ruby surrounded by diamonds.",
                price: "MYR 14,800",
                image: "/assets/images/categories/necklaces/ruby-pendant.jpg"
              }
            ]
          },
          {
            id: "statement-necklaces",
            name: "Statement Necklaces",
            description: "Bold, eye-catching designs featuring multiple Ceylon gemstones in artistic arrangements.",
            featured: false,
            items: [
              {
                id: "sapphire-cascade",
                name: "Sapphire Cascade",
                description: "18K white gold collar necklace with graduating sizes of Ceylon blue sapphires and diamond accents.",
                price: "MYR 58,000",
                image: "/assets/images/categories/necklaces/sapphire-statement.jpg"
              },
              {
                id: "rainbow-collar",
                name: "Rainbow Spectrum",
                description: "18K yellow gold statement necklace featuring Ceylon sapphires in every color of the rainbow.",
                price: "MYR 65,000",
                image: "/assets/images/categories/necklaces/rainbow-statement.jpg"
              }
            ]
          }
        ]
      },
      
      earrings: {
        title: "Earrings",
        subtitle: "COLORFUL ACCENTS",
        description: "Our earring collection ranges from everyday studs to dramatic chandelier designs, each pair highlighting the exceptional color and clarity of our Ceylon gemstones.",
        collections: [
          {
            id: "stud-earrings",
            name: "Stud Earrings",
            description: "Classic stud earrings featuring premium Ceylon gemstones, perfect for everyday elegance.",
            featured: true,
            items: [
              {
                id: "sapphire-studs",
                name: "Ceylon Sapphire Studs",
                description: "18K white gold studs featuring matched 1-carat round Ceylon blue sapphires with diamond halos.",
                price: "MYR 12,500",
                image: "/assets/images/categories/earrings/sapphire-studs.jpg"
              },
              {
                id: "ruby-studs",
                name: "Ruby Elegance Studs",
                description: "18K yellow gold studs with 0.75-carat round Ceylon rubies.",
                price: "MYR 9,800",
                image: "/assets/images/categories/earrings/ruby-studs.jpg"
              }
            ]
          },
          {
            id: "drop-earrings",
            name: "Drop Earrings",
            description: "Sophisticated drop and chandelier earrings for special occasions and evening wear.",
            featured: true,
            items: [
              {
                id: "sapphire-cascade-drops",
                name: "Sapphire Cascade Drops",
                description: "18K white gold drop earrings with graduating Ceylon blue sapphires and diamond accents.",
                price: "MYR 18,500",
                image: "/assets/images/categories/earrings/sapphire-drops.jpg"
              },
              {
                id: "multicolor-chandeliers",
                name: "Kaleidoscope Chandeliers",
                description: "18K yellow gold chandelier earrings featuring Ceylon sapphires in various colors.",
                price: "MYR 24,000",
                image: "/assets/images/categories/earrings/multicolor-chandeliers.jpg"
              }
            ]
          }
        ]
      },
      
      bracelets: {
        title: "Bracelets",
        subtitle: "WEARABLE ART",
        description: "From classic tennis bracelets to statement cuffs, our bracelet collection showcases the vibrant colors of Ceylon gemstones in designs that complement any style.",
        collections: [
          {
            id: "tennis-bracelets",
            name: "Tennis Bracelets",
            description: "Elegant line bracelets featuring carefully matched Ceylon gemstones for timeless appeal.",
            featured: true,
            items: [
              {
                id: "sapphire-tennis",
                name: "Ceylon Sapphire Tennis Bracelet",
                description: "18K white gold tennis bracelet with 12 carats of matched Ceylon blue sapphires alternating with diamonds.",
                price: "MYR 38,500",
                image: "/assets/images/categories/bracelets/sapphire-tennis.jpg"
              },
              {
                id: "ruby-tennis",
                name: "Ruby Radiance Tennis Bracelet",
                description: "18K rose gold tennis bracelet featuring 8 carats of oval Ceylon rubies with diamond accents.",
                price: "MYR 42,000",
                image: "/assets/images/categories/bracelets/ruby-tennis.jpg"
              }
            ]
          },
          {
            id: "bangle-bracelets",
            name: "Bangles & Cuffs",
            description: "Statement bangle and cuff bracelets featuring Ceylon gemstones in bold, artistic designs.",
            featured: false,
            items: [
              {
                id: "sapphire-bangle",
                name: "Sapphire Mosaic Bangle",
                description: "18K white gold bangle with Ceylon sapphires in various blue hues arranged in a mosaic pattern.",
                price: "MYR 32,000",
                image: "/assets/images/categories/bracelets/sapphire-bangle.jpg"
              },
              {
                id: "ruby-cuff",
                name: "Ruby Romance Cuff",
                description: "18K yellow gold open cuff bracelet featuring graduated Ceylon rubies with diamond accents.",
                price: "MYR 28,500",
                image: "/assets/images/categories/bracelets/ruby-cuff.jpg"
              }
            ]
          }
        ]
      }
    };
    
    // Custom Design Data
    export const customDesignData = {
      process: {
        title: "Custom Design Process",
        subtitle: "FROM CONCEPT TO CREATION",
        description: "Our bespoke jewelry design service allows you to create a one-of-a-kind piece that perfectly reflects your personal style and story. Our expert team guides you through every step of the process, from initial concept to the finished creation.",
        steps: [
          {
            title: "Initial Consultation",
            description: "Meet with our design consultants to discuss your vision, preferences, and budget. We'll help you explore different gemstone and metal options that align with your aesthetic and practical requirements.",
            image: "/assets/images/custom-designs/consultation.jpg"
          },
          {
            title: "Gemstone Selection",
            description: "Choose from our extensive collection of exceptional Ceylon gemstones, or we can source specific stones to match your requirements. Our gemologists will guide you in selecting the perfect stone for your design.",
            image: "/assets/images/custom-designs/gemstone-selection.jpg"
          },
          {
            title: "Design Development",
            description: "Our designers will create detailed sketches and 3D renderings of your piece, allowing you to visualize the final result and make any adjustments before production begins.",
            image: "/assets/images/custom-designs/design-development.jpg"
          },
          {
            title: "Crafting Process",
            description: "Watch your design come to life as our master craftspeople meticulously create your piece using traditional techniques and cutting-edge technology to ensure exceptional quality and attention to detail.",
            image: "/assets/images/custom-designs/crafting.jpg"
          },
          {
            title: "Final Reveal",
            description: "Experience the joy of receiving your completely unique, custom-designed jewelry piece, accompanied by authentication and care documentation.",
            image: "/assets/images/custom-designs/final-reveal.jpg"
          }
        ],
        testimonials: [
          {
            client: "Sarah L.",
            text: "The custom design process was exceptional from start to finish. The team listened carefully to my ideas and created a sapphire engagement ring that exceeded all my expectations. It's truly one-of-a-kind and holds special meaning for us.",
            image: "/assets/images/custom-designs/testimonial-sarah.jpg"
          },
          {
            client: "James & Maria T.",
            text: "We wanted wedding bands that reflected our personalities and shared journey. Harrico's design team helped us create matching bands incorporating Ceylon sapphires that symbolize our connection. The attention to detail and craftsmanship is remarkable.",
            image: "/assets/images/custom-designs/testimonial-james-maria.jpg"
          }
        ]
      },
      
      engagement: {
        title: "Custom Engagement Rings",
        subtitle: "SYMBOLS OF LOVE",
        description: "Create a unique engagement ring that tells your love story. Our custom design process ensures that your ring will be as exceptional as your relationship, featuring the world's finest Ceylon gemstones in a design created especially for you.",
        featured: [
          {
            name: "Sapphire Solitaire",
            description: "Custom-designed platinum engagement ring featuring a 3-carat oval Ceylon blue sapphire with diamond pavé band.",
            image: "/assets/images/custom-designs/engagement-sapphire.jpg"
          },
          {
            name: "Ruby Halo",
            description: "18K rose gold engagement ring with a 2-carat cushion-cut Ceylon ruby surrounded by a diamond halo and split shank.",
            image: "/assets/images/custom-designs/engagement-ruby.jpg"
          },
          {
            name: "Padparadscha Dream",
            description: "18K yellow gold engagement ring showcasing a rare 1.8-carat Padparadscha sapphire with tapered baguette diamond accents.",
            image: "/assets/images/custom-designs/engagement-padparadscha.jpg"
          }
        ],
        process: [
          "Schedule a private consultation to discuss your vision and preferences",
          "Select your center stone from our collection of exceptional Ceylon gemstones",
          "Work with our designers to create a unique setting that showcases your chosen gemstone",
          "Approve detailed renderings before your ring is crafted by our master jewelers",
          "Receive your one-of-a-kind engagement ring, complete with authentication and insurance documentation"
        ]
      },
      
      gallery: {
        title: "Custom Design Gallery",
        subtitle: "INSPIRATION SHOWCASE",
        description: "Explore our gallery of custom-designed pieces that showcase the creativity and craftsmanship of our design team. Each piece tells a unique story and demonstrates the possibilities of our bespoke jewelry service.",
        categories: [
          {
            name: "Engagement Rings",
            items: [
              {
                name: "Sapphire Trilogy",
                description: "Platinum ring featuring three Ceylon sapphires in graduating shades of blue with diamond accents.",
                image: "/assets/images/custom-designs/gallery-engagement1.jpg"
              },
              {
                name: "Ruby Romance",
                description: "18K rose gold vintage-inspired ring with a 2.5-carat Ceylon ruby center stone and diamond halo.",
                image: "/assets/images/custom-designs/gallery-engagement2.jpg"
              }
            ]
          },
          {
            name: "Statement Necklaces",
            items: [
              {
                name: "Sapphire Waterfall",
                description: "18K white gold necklace featuring graduated Ceylon sapphires in a cascading design with diamond accents.",
                image: "/assets/images/custom-designs/gallery-necklace1.jpg"
              },
              {
                name: "Rainbow Spectrum",
                description: "18K yellow gold collar necklace showcasing Ceylon sapphires in every color of the rainbow.",
                image: "/assets/images/custom-designs/gallery-necklace2.jpg"
              }
            ]
          },
          {
            name: "Heirloom Redesigns",
            items: [
              {
                name: "Modern Heritage",
                description: "Transformation of vintage family gemstones into a contemporary platinum and Ceylon sapphire bracelet.",
                image: "/assets/images/custom-designs/gallery-heirloom1.jpg"
              },
              {
                name: "Legacy Pendant",
                description: "Repurposed family diamonds combined with a new Ceylon ruby in an 18K white gold pendant design.",
                image: "/assets/images/custom-designs/gallery-heirloom2.jpg"
              }
            ]
          }
        ]
      }
    };
    
    // Export all data as a single object for convenience
    export default {
      companyInfo,
      locations,
      aboutData,
      historyData,
      teamData,
      storyData,
      newsData,
      gemstoneData,
      jewelryData,
      categoriesData,
      customDesignData,
      filterJewelryByGemstone,
      filterJewelryByMetal
    };