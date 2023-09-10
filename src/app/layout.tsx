import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
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
      <Providers>
        <body className={inter.className}>
          <Flex
            as='main'
            className={twMerge(
              `
              justify-between
              py-2
              h-full
              w-full
              `
            )}
          >
            <Sidebar />
            <Box
              className={twMerge(
                `
              rounded-l-md
              p-0
              overflow-hidden
              h-full
              w-full
              `
              )}
            >
              {children}
            </Box>
          </Flex>
          <ToastContainer
            position='top-right'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme={'dark'}
          />
        </body>
      </Providers>
    </html>
  );
}
