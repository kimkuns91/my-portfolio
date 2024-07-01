import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

// about data
export const about = {
  title: 'About me',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Kun Woo Kim',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+82) 010 8595 9869',
    },
    {
      fieldName: 'Experience',
      fieldValue: '5+ Years',
    },
    {
      fieldName: 'KakaoTalk ID',
      fieldValue: 'kimkuns98',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Korean',
    },
    {
      fieldName: 'Email',
      fieldValue: 'kimkuns98@gmail.com',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    },
    {
      fieldName: 'Lanuages',
      fieldValue: 'Korean, English, Japanese',
    },
  ],
};

// experience data
export const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.',
  items: [
    {
      company: 'Tech Solutions Inc.',
      position: 'Full Stack Developer',
      duration: '2022 - Present',
    },
    {
      company: 'Web Design Studio',
      position: 'Front-End Developer Intern',
      duration: 'Summer 2021',
    },
    {
      company: 'E-commerce Startup',
      position: 'Freelance Web Developer',
      duration: '2020 - 2021',
    },
    {
      company: 'Tech Academy',
      position: 'Teaching Assistant',
      duration: '2019 - 2020',
    },
    {
      company: 'Digital Agency',
      position: 'UI/UX Designer',
      duration: '2018 - 2019',
    },
    {
      company: 'Software Development Firm',
      position: 'Junior Developer',
      duration: '2017 - 2018',
    },
  ],
};

// education data
export const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.',
  items: [
    {
      institution: 'Online Course Platform',
      degree: 'Full Stack Web Development Bootcamp',
      duration: '2023',
    },
    {
      institution: 'Codecademy',
      degree: 'Front-end Track',
      duration: '2022',
    },
    {
      institution: 'Online Course',
      degree: 'Programming Course',
      duration: '2020 - 2021',
    },
    {
      institution: 'Tech Institute',
      degree: 'Certified Web Developer',
      duration: '2019',
    },
    {
      institution: 'Design School',
      degree: 'Diploma in Graphic Design',
      duration: '2016 - 2018',
    },
    {
      institution: 'Community College',
      degree: 'Associate Degree in Computer Science',
      duration: '2014 - 2016',
    },
  ],
};

// skills data
export const skills = {
  title: 'My skills',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <FaReact />,
      name: 'react.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js',
    },
    {
      icon: <FaFigma />,
      name: 'figma',
    },
  ],
};
