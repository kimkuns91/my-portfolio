import React from 'react';

// 타입 정의
interface TimelineItemProps {
  year: string;
  events: string[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, events }) => (
  <div className="border-b border-zinc-800">
    <h1 className="text-xl font-bold text-neutral-light my-8 relative">
      <div className="h-3 md:h-4 w-3 md:w-4 border-2 border-accent bg-zinc-800 rounded-full absolute -left-[20px] md:-left-[46px] top-2 md:top-1"></div>
      {year}
    </h1>
    <div className="mb-8">
      {events.map((event, index) => (
        <div key={index} className="flex flex-row space-x-2 items-start my-2">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="text-accent mt-[3px] flex-shrink-0"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-neutral text-sm md:text-base">{event}</span>
        </div>
      ))}
    </div>
  </div>
);

const Timeline: React.FC = () => (
  <div className="max-w-4xl mx-auto divide-zinc-800 relative">
    <div className="absolute h-full w-[4px] bg-gradient-to-b from-transparent via-accent to-transparent -left-4 md:-left-10"></div>
    <TimelineItem
      year="2024"
      events={[
        'Collaborated with a university to create an MVP version of a learning model system.',
        'Built a legal service using technologies like NextJS 14 and OPENAI.',
        'Planned and developed an MVP version of a video platform.',
      ]}
    />
    <TimelineItem
      year="2023"
      events={[
        'Obtained a Data Analysis Expert certification.',
        'Participated in several AI seminars, sharing and learning information with various companies.',
        'Developed an order management system application using Flutter.',
      ]}
    />
    <TimelineItem
      year="2022"
      events={[
        'Worked on creating several online shopping malls.',
        'Completed a project analyzing images using Python.',
        'Signed a contract with the Public Data Center and worked on integrating various APIs.',
      ]}
    />
    <TimelineItem
      year="2021"
      events={[
        'Founded Lyncare Co., Ltd.',
        'Obtained a Web Design certification.',
        'Bought a new M1 chip macbook pro wow this is crazy!',
      ]}
    />
    {/* 추가 TimelineItem으로 연도별 기록을 계속 추가 */}
  </div>
);

export default Timeline;
