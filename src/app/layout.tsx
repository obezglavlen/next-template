import { Providers } from '@/providers';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Neuton } from 'next/font/google';
import './globals.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { Sidebar } from '@/components/common/Sidebar';
import { twMerge } from 'tailwind-merge';
import { ToastContainer } from 'react-toastify';
import { Flex } from '@/components/common/Flex';
import { Box } from '@/components/common/Box';

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
        <Flex
          as='body'
          className={twMerge(
            `
            justify-between
            py-2
            `,
            inter.className
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
        {/* <ToastContainer
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
        /> */}
      </Providers>
    </html>
  );
}
