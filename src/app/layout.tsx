import { Providers } from '@/providers';
import classNames from 'classnames';
import { Inter } from 'next/font/google';
import { Metadata } from 'next/types';
import { FC, PropsWithChildren } from 'react';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'next-template',
};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className={classNames(inter.className)}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default Layout;
