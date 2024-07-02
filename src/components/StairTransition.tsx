'use client';

import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Stairs from './Stairs';
import { usePathname } from 'next/navigation';

// components

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div
            className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex"
          >
            <Stairs />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
