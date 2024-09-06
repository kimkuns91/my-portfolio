'use client';

import { useEffect, useState } from 'react';

import { BsArrowDownRight } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import MotionScrollSection from '../MotionSection';
import Timeline from './Timeline';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { services } from '@/lib/constant/services';

const AboutPage: React.FC = () => {
  return (
    <MotionScrollSection>
      <div className="w-full md:mt-20 relative flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 justify-between">
        <div className="flex-[1.5]">
          <h2 className="font-bold text-3xl md:text-5xl md:leading-tight text-zinc-50 max-w-4xl">
            Hey! I{"'"}m <span className="text-accent">Kun Woo Kim</span> and I
            {"'"}m a full stack developer.
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 md:leading-loose tracking-wide">
            I{"'"}ve been obsessed with technology ever since I was a kid. When
            I wasn{"'"}t taking apart my family{"'"}s computer (sorry, mom), I
            was teaching myself how to code. Fast forward a few years, and now I
            {"'"}m a full-fledged code ninja with an insatiable thirst for
            creating beautiful websites and functional applications.
          </p>
        </div>
        <div className="flex-1 order-first md:order-last relative">
          <div
            className={cn(
              'w-full aspect-square overflow-hidden transition-opacity duration-500 absolute inset-0 z-10'
            )}
          >
            <Image
              src="/assets/kunwoo-4.jpg"
              alt="Avatar"
              priority
              width={500}
              height={500}
              className="object-cover rounded-2xl w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="w-full py-12 pb-24">
        <h2 className="font-bold text-xl mb-20 lg:mb-28 md:text-2xl md:leading-tight text-neutral-light">
          Here{"'"}s a timeline of what I{"'"}ve been upto
        </h2>
        <Timeline />
      </div>
    </MotionScrollSection>
  );
};

export default AboutPage;
