import { projects, works } from '@/lib/constant/projects';

import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import React from 'react';
import Section from './Section';

const WorkExperience: React.FC = () => {
  return (
    <Section>
      <h2 className="text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600">
        Portfolio Showcase
      </h2>
      <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-4 leading-loose tracking-wide ">
        From client collaborations to individual innovations, here’s what I{"'"}
        ve built
      </p>
      <div className="mt-8 rounded-md flex flex-col antialiased bg-primary items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={works} direction="right" speed="slow" />
      </div>
      <div className="mt-8 rounded-md flex flex-col antialiased bg-primary items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={projects} direction="left" speed="slow" />
      </div>
    </Section>
  );
};

export default WorkExperience;
