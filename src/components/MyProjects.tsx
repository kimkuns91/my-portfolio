'use client'

import { HoverEffect } from './ui/card-hover-effect';

const MyProjects: React.FC = () => {
  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl text-white font-bold mt-20 md:mt-40">
        My Projects
      </h1>
      <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-4 leading-loose tracking-wide ">
        I{"'"}ve been building a lot of things
      </p>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
};

export const projects = [
  {
    title: 'Stripe',
    description:
      'A technology company that builds economic infrastructure for the internet.',
    link: 'https://stripe.com',
  },
  {
    title: 'Netflix',
    description:
      'A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
    link: 'https://netflix.com',
  },
  {
    title: 'Google',
    description:
      'A multinational technology company that specializes in Internet-related services and products.',
    link: 'https://google.com',
  },
  {
    title: 'Meta',
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: 'https://meta.com',
  },
  {
    title: 'Amazon',
    description:
      'A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.',
    link: 'https://amazon.com',
  },
  {
    title: 'Microsoft',
    description:
      'A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.',
    link: 'https://microsoft.com',
  },
];

export default MyProjects;
