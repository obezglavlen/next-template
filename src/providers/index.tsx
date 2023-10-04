'use client';

import { ToasterProvider } from './ToasterProvider';
import { Theme } from '@radix-ui/themes';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';

import { IntlProvider } from '@/providers/IntlProvider';

import '@radix-ui/themes/styles.css';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <IntlProvider>
      <ThemeProvider attribute='class'>
        <Theme accentColor='amber'>
          <SessionProvider>{children}</SessionProvider>
          <ToasterProvider />
        </Theme>
      </ThemeProvider>
    </IntlProvider>
  );
};
