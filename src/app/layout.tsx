import '@/styles/globals.css';

import { Inter, JetBrains_Mono } from 'next/font/google';
import { NextLayout, NextProvider } from './providers';

import Header from '@/components/Header';
import type { Metadata } from 'next';
import PageTransition from '@/components/PageTransition';
import StairTransition from '@/components/StairTransition';
import { cn } from '@/lib/utils';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono',
});

export const metadata: Metadata = {
  title: 'White Mouse Dev - Portfolio',
  description: 'White Mouse Dev',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('scrollbar', jetbrainsMono.variable)}>
        <NextProvider>
          <NextLayout>{children}</NextLayout>
        </NextProvider>
      </body>
    </html>
  );
}
