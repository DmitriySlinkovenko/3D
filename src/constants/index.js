export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "What to Wear",
    desc: "What to Wear is a full stack project built to help users decide what to wear based on weather conditions.",
    subdesc:
      "Built as a unique Software-as-a-Service app with React.js and Express.js, What to Wear is designed for optimal performance and scalability.",
    href: "https://www.wtwr.root.sx/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Figma",
        path: "/assets/figma.svg",
      },
      {
        id: 3,
        name: "HTML5",
        path: "/assets/html.svg",
      },
      {
        id: 4,
        name: "CSS3",
        path: "/assets/CSS3.svg",
      },
    ],
  },
  {
    title: "News Explorer",
    desc: "News Explorer is a full stack app to search for news, on topics that interest the user, with the ability to save the news.",
    subdesc:
      "With News Explorer, users can experience lightning fast news searching by using React.js and Express newest features.",
    href: "https://news-explorerds22.root.sx/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Figma",
        path: "/assets/figma.svg",
      },
      {
        id: 3,
        name: "HTML5",
        path: "/assets/html.svg",
      },
      {
        id: 4,
        name: "CSS3",
        path: "/assets/CSS3.svg",
      },
    ],
  },
  {
    title: "Around the US",
    desc: " Front end app build to share beautiful pictures of US nature amongst users. It simplifies the ability to share and like each others pictures.",
    subdesc:
      "With a focus on efficiency, Around the US integrantes forms and form validations, by using JS.",
    href: "https://dmitriyslinkovenko.github.io/se_project_aroundtheus/",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "JS",
        path: "/assets/js.svg",
      },
      {
        id: 2,
        name: "Figma",
        path: "/assets/figma.svg",
      },
      {
        id: 3,
        name: "HTML5",
        path: "/assets/html.svg",
      },
      {
        id: 4,
        name: "CSS3",
        path: "/assets/CSS3.svg",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Swift Car Keys",
    pos: "Business owner and Locksmith",
    duration: "2024 - Present",
    title:
      "Launched a locksmithing business from the ground up and grew it into a profitable enterprise.  Maintained a high customer satisfaction rating, reflected in positive reviews and repeat business, resulting in over 80% returning customers and referrals.  Integrated cutting-edge technology and software into business operations to enhance efficiency and service quality,resulting in 35% increase of possible job opportunities, by investing into new equipment and education.",
    icon: "/assets/sck.png",
    animation: "victory",
  },
  {
    id: 2,
    name: "Any Car Keys",
    pos: "Locksmith",
    duration: "2017 - 2024",
    title:
      "Created and managed inventory of over 400 items, shared across the company resulting in more efficient allocation of workforce.  Successfully completed advanced training in automotive locksmith techniques and technologies, enhancing service capabilities and expertise.  Increased revenue by 35% through upselling of security upgrades and additional services during customer interactions.",
    icon: "/assets/ack.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Marshall's",
    pos: "Sales Coordinator",
    duration: "2015 - 2016",
    title:
      "Spearheaded initiatives that led to a 15% increase in sales revenue over a 12-month period by implementing strategicmerchandising and promotional displays. Achieved a 20% improvement in customer satisfaction scores through effective staff training programs and improved service protocols, resulting in higher repeat business and positive customer feedback. Created compelling displays and layouts that increased foot traffic by 10% and contributed to a 12% rise in impulse buys.",
    icon: "/assets/marshalls.svg",
    animation: "salute",
  },
];
