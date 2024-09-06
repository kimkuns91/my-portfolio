import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandKakoTalk,
  IconBrandLinkedin,
  IconBrandTwitter,
} from '@tabler/icons-react';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';
import { links } from '@/lib/constant/link';

const Footer = () => {
  return (
    <div className="border-t border-neutral-100 border-white/[0.1] px-8 py-20 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-sm text-neutral-100  justify-between items-start md:px-8">
        <div className="flex flex-col items-center justify-center w-full relative">
          <div className="mr-0 md:mr-4 md:flex mb-4">
            <Link
              href="/"
              className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1  relative z-20"
            >
              <Image
                src={'/assets/logo.png'}
                alt="logo"
                width={250}
                height={30}
              />
            </Link>
          </div>

          <ul className="transition-colors flex sm:flex-row flex-col hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none gap-4">
            {links.map((link, index) => (
              <li key={'pages' + index} className="list-none">
                <Link
                  className="transition-colors text-neutral-dark hover:text-neutral-light"
                  href={link.path}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="list-none">
              <Link
                className="transition-colors text-neutral-dark hover:text-neutral-light"
                href={'https://www.whitemouse.dev/'}
              >
                blog
              </Link>
            </li>
          </ul>

          <GridLineHorizontal className="max-w-7xl mx-auto mt-8" />
        </div>
        <div className="flex sm:flex-row flex-col justify-between mt-8 items-center w-full">
          <p className="text-neutral-400 mb-8 sm:mb-0">
            © 2024 WhiteMouseDev. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="https://www.linkedin.com/in/kun-woo-kim-b39727225/">
              <IconBrandLinkedin className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
            </Link>
            <Link href="https://github.com/kimkuns91">
              <IconBrandGithub className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
            </Link>
            <Link href="https://open.kakao.com/o/gq51dAMg">
              <IconBrandKakoTalk className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
            </Link>
            <Link href="https://www.instagram.com/kimkuns98/">
              <IconBrandInstagram className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          '--background': '#ffffff',
          '--color': 'rgba(0, 0, 0, 0.2)',
          '--height': '1px',
          '--width': '5px',
          '--fade-stop': '90%',
          '--offset': offset || '200px', //-100px if you want to keep the line inside
          '--color-dark': 'rgba(255, 255, 255, 0.2)',
          maskComposite: 'exclude',
        } as React.CSSProperties
      }
      className={cn(
        'w-[calc(100%+var(--offset))] h-[var(--height)]',
        'bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]',
        '[background-size:var(--width)_var(--height)]',
        '[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]',
        '[mask-composite:exclude]',
        'z-30',
        'dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]',
        className
      )}
    ></div>
  );
};

export default Footer;
