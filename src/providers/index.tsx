'use client';

import { ThemeProvider } from './ThemeProvider';
import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';

import { IntlProvider } from '@/providers/IntlProvider';

import '@radix-ui/themes/styles.css';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <IntlProvider>
      <ThemeProvider>
        <SessionProvider>{children}</SessionProvider>
      </ThemeProvider>
    </IntlProvider>
  );
};
