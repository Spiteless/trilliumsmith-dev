import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Trillium Smith | Fullstack Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Trillium Smith | Fullstack Web Developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Title Section',
  name: 'Trillium',
  subtitle: 'Fullstack Web Developer',
  cta: 'CTA',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Paragraph1 Paragraph1 Paragraph1 Paragraph1 Paragraph1 Paragraph1 ',
  paragraphTwo: 'Paragraph2 Paragraph2 Paragraph2 Paragraph2 Paragraph2 Paragraph2',
  paragraphThree: 'Paragraph3 Paragraph3 Paragraph3 Paragraph3 Paragraph3 Paragraph3 Paragraph3 ',
  resume:
    'https://docs.google.com/document/d/1k5j8vrwb0Sm7Sht37BoO_EeJ0MfdSixCNhU_bHUtCd8/export?format=pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1_harvestHealth.jpg',
    title: 'Harvest Health and Fitness',
    info: 'Brochure website for Personal Trainer',
    info2: 'Built with React, Gatsby, Material-IU.',
    url: 'https://harvesthealth.netlify.app/',
    liveUrlTitle: 'Website.',
    repo: 'https://github.com/Spiteless/harvest-health', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2_quizZap.jpg',
    title: 'Quiz Zap',
    info: 'API Based memory matching game.',
    info2: 'Built with React.',
    url: '',
    liveUrlTitle: 'Thangle',
    repo: 'https://github.com/Spiteless/Quiz-Zapp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://docs.google.com/document/d/1k5j8vrwb0Sm7Sht37BoO_EeJ0MfdSixCNhU_bHUtCd8/export?format=pdf', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Let's get in touch!",
  btn: 'Email',
  email: 'trillium@hatsfabulous.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },

    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/trilliumsmith/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Spiteless/',
    },
  ],
};
