'use client';

import { projects, works } from '@/lib/constant/projects';

import Image from 'next/image';
import Link from 'next/link';
import MotionScrollSection from '../MotionSection';
import { Projects } from '@/interface';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const WorksPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <MotionScrollSection>
      <div className="flex justify-center space-x-4 mb-20">
        <button
          className={cn('px-6 py-2 rounded-full', {
            'bg-accent text-primary': activeTab === 'all',
            'bg-neutral-dark': activeTab !== 'all',
          })}
          onClick={() => setActiveTab('all')}
        >
          All
        </button>
        <button
          className={cn('px-6 py-2 rounded-full', {
            'bg-accent text-primary': activeTab === 'works',
            'bg-neutral-dark': activeTab !== 'works',
          })}
          onClick={() => setActiveTab('works')}
        >
          Works
        </button>
        <button
          className={cn('px-6 py-2 rounded-full', {
            'bg-accent text-primary': activeTab === 'projects',
            'bg-neutral-dark': activeTab !== 'projects',
          })}
          onClick={() => setActiveTab('projects')}
        >
          My Projects
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full relative z-20">
        {activeTab === 'all' &&
          [...projects, ...works].map((item, index) => (
            <Card project={item} key={item.title + index} />
          ))}
        {activeTab === 'projects' &&
          projects.map((project, index) => (
            <Card project={project} key={project.title + index} />
          ))}
        {activeTab === 'works' &&
          works.map((work, index) => (
            <Card project={work} key={work.title + index} />
          ))}
      </div>
    </MotionScrollSection>
  );
};

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
    >
      <div className="h-5 w-6 bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm" />
      <span className="font-medium text-white">DevStudio</span>
    </Link>
  );
};

export const Card = ({ project }: { project: Projects }) => {
  const truncate = (text: string, length: number) => {
    return text.length > length ? text.slice(0, length) + '...' : text;
  };
  return (
    <Link
      className="shadow-derek rounded-3xl border border-neutral-800 w-full bg-secondary overflow-hidden  hover:scale-[1.02] transition duration-200"
      href={project.link || '/'}
    >
      {project.images ? (
        <BlurImage
          src={project.images[0] || ''}
          alt={project.title}
          height="800"
          width="800"
          className="h-52 object-cover object-top w-full"
        />
      ) : (
        <div className="h-52 flex items-center justify-center bg-neutral-900">
          <Logo />
        </div>
      )}
      <div className="p-4 md:p-8 bg-secondary">
        <div className="flex space-x-2 items-center  mb-2">
          <Image
            src={'/assets/kunwoo-4.jpg'}
            alt={'kunwoo'}
            width={20}
            height={20}
            className="rounded-full h-5 w-5"
          />
          <p className="text-sm font-normal text-neutral-400">WhiteMouseDev</p>
        </div>
        <p className="text-lg font-bold mb-4 text-neutral-100">
          {project.title}
        </p>
        <p className="text-left text-sm mt-2 text-neutral-400">
          {truncate(project.description, 100)}
        </p>
      </div>
    </Link>
  );
};

interface IBlurImage {
  height?: any;
  width?: any;
  src?: string | any;
  objectFit?: any;
  className?: string | any;
  alt?: string | undefined;
  layout?: any;
  [x: string]: any;
}

export const BlurImage = ({
  height,
  width,
  src,
  className,
  objectFit,
  alt,
  layout,
  ...rest
}: IBlurImage) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        'transition duration-300 transform',
        isLoading ? 'blur-sm scale-105' : 'blur-0 scale-100',
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={src}
      layout={layout}
      alt={alt ? alt : 'Avatar'}
      {...rest}
    />
  );
};

export function GridPatternContainer({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,white,transparent)]',
        className
      )}
    >
      <GridPattern />
    </div>
  );
}
export function GridPattern() {
  const columns = 30;
  const rows = 11;
  return (
    <div className="flex bg-gray-200 dark:bg-neutral-700 flex-shrink-0 flex-wrap justify-center items-center gap-x-px gap-y-px  scale-105">
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: columns }).map((_, col) => {
          const index = row * columns + col;
          return (
            <div
              key={`${col}-${row}`}
              className={`w-10 h-10 flex flex-shrink-0 rounded-[1px] ${
                index % 2 === 0
                  ? 'bg-gray-100 dark:bg-neutral-800'
                  : 'bg-gray-100 dark:bg-neutral-800 shadow-[0px_0px_0px_3px_rgba(255,255,255,1)_inset] dark:shadow-[0px_0px_0px_3px_rgba(0,0,0,0.2)_inset]'
              }`}
            />
          );
        })
      )}
    </div>
  );
}

export default WorksPage;
