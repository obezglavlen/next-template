import { Providers } from '@/providers';
import { Metadata } from 'next/types';
import { FC, PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'next-template',
};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default Layout;
