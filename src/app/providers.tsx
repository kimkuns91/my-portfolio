'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import { RecoilRoot } from 'recoil';
import StairTransition from '@/components/StairTransition';
import { Toaster } from 'react-hot-toast';

interface Props {
  children?: React.ReactNode;
}

export const NextProvider = ({ children }: Props) => {
  return (
    <RecoilRoot>
      {children}
      <Toaster />
    </RecoilRoot>
  );
};

export const NextLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <StairTransition />
      <PageTransition>{children}</PageTransition>
      <Footer />
    </>
  );
};
