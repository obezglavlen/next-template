import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

import { Box } from '@/components/common/Box';
import { Flex } from '@/components/common/Flex';
import { Sidebar } from '@/components/sections/Sidebar';

import { Providers } from '@/providers';

import './globals.css';
import 'react-toastify/dist/ReactToastify.min.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <Flex
            as='main'
            className={twMerge('justify-between', 'py-2', 'w-full', 'min-h-full')}
          >
            <Sidebar />
            <Box
              className={twMerge(
                'rounded-l-md',
                'p-0',
                'overflow-hidden',
                'w-full',
                'min-h-full'
              )}
            >
              {children}
            </Box>
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
