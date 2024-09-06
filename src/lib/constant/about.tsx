import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import { SiAdobexd, SiFlutter, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';

import { TbBrandReactNative } from "react-icons/tb";

// about data
export const about = {
  title: 'About Me',
  description:
    "Hi there!\nI'm a Full Stack Developer with a passion for crafting seamless and innovative solutions.\nIn the ever-evolving world of technology, I pride myself on staying ahead of the curve, continually honing my skills to deliver top-notch results.\nI’m excited to connect with like-minded individuals and organizations, so feel free to reach out if you’d like to chat about technology, collaboration, or just to share a great story!",
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
      fieldValue: 'Republic of Korea',
    },
    {
      fieldName: 'Email',
      fieldValue: 'kimkuns98@gmail.com',
    },
    {
      fieldName: 'Major',
      fieldValue: 'Computer Science',
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
  title: 'My Experience',
  description:
    'I have gained valuable experience working in various roles across different organizations, contributing to my growth as a professional in the field of technology.',
  items: [
    {
      company: 'OGT',
      position: 'Coach',
      duration: '2019',
    },
    {
      company: 'Freelance',
      position: 'Fullstack Programmer',
      duration: '2019-2021',
    },
    {
      company: 'Lyncare Inc.',
      position: 'CEO',
      duration: '2021-present',
    },
    {
      company: 'Wevibe Inc.',
      position: 'CTO',
      duration: '2021-present',
    },
  ],
};

// education data
export const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description:
    'I have pursued a diverse educational path to build a solid foundation in web development and design.',
  items: [
    {
      institution: 'Online Course Platform',
      degree: 'Full Stack Web Development Bootcamp',
      duration: '2021',
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
      duration: '2021- 2022',
    },
    {
      institution: 'College',
      degree: 'Associate Degree in Computer Science',
      duration: '2012 - 2019',
    },
  ],
};

// skills data
export const skills = {
  title: 'My Skills',
  description:
    'Making apps with modern technologies and best practices is my passion.',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'Html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'Css 3',
    },
    {
      icon: <FaJs />,
      name: 'Javascript',
    },
    {
      icon: <SiTypescript />,
      name: 'Typescript',
    },
    {
      icon: <FaReact />,
      name: 'React.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind.css',
    },
    {
      icon: <FaNodeJs />,
      name: 'Node.js',
    },
    {
      icon:  <TbBrandReactNative />,
      name: 'React Native',
    },
    {
      icon: <SiFlutter />,
      name: 'Flutter',
    },
    {
      icon: <FaFigma />,
      name: 'Figma',
    },
    {
      icon: <SiAdobexd />,
      name: 'XD',
    },
  ],
};
