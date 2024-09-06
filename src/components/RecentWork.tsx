import Image from 'next/image';
import Link from 'next/link';
import Section from './Section';
import { works } from '@/lib/constant/projects';

const RecentWork: React.FC = () => {
  const sortedWorks = [...works].sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  const recentWorks = sortedWorks.slice(0, 3);

  return (
    <Section>
      <h2 className="text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600">
        Recent Works
      </h2>
      {/* <h1 className="text-2xl md:text-3xl text-white font-bold mt-20 md:mt-40">
        Recent Works
      </h1> */}
      {recentWorks.map((work) => (
        <div
          className="py-6 lg:py-3 flex flex-col lg:flex-row my-20"
          key={work.id}
        >
          <div className="flex-1 pr-4">
            <h1 className="font-bold text-2xl text-neutral-light">
              {work.title}
            </h1>
            <div className="max-w-xs mt-4">
              <p className="text-sm text-neutral leading-6">
                {work.description}
              </p>
            </div>
            <div className="mt-4 h-px w-6 bg-slate-300"></div>
            <div className="mt-6">
              {work.link && (
                <Link
                  href={work.link}
                  className="py-2 px-3 text-primary bg-accent rounded-md hover:bg-accent-hover"
                >
                  Visit Site
                </Link>
              )}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row mt-10 lg:mt-0 space-y-6 sm:space-y-0 sm:space-x-6 overflow-x-auto flex-[2]">
            <div className="flex-1 aspect-video overflow-hidden rounded-2xl">
              <Image
                src={work.images[0]}
                alt={work.title || 'Image'}
                width={450}
                height={300}
                className="w-full h-full object-cover object-top rounded-lg shadow-md"
              />
            </div>
            <div className="flex-1 aspect-video overflow-hidden rounded-2xl">
              <Image
                src={work.images[0]}
                alt={work.title || 'Image'}
                width={450}
                height={300}
                className="w-full h-full object-cover object-center rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-center relative">
        <Link
          className="text-zinc-200 border border-zinc-600 bg-zinc-900 px-8 py-2 rounded-lg hover:border-zinc-700 hover:bg-zinc-800/[0.8] transition duration-200"
          href="/contributions"
        >
          Show More
        </Link>
      </div>
    </Section>
  );
};

export default RecentWork;
