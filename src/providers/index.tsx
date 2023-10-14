'use client';

import { ToasterProvider } from './ToasterProvider';
import { fetcher } from '@/utils/fetcher';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';
import { SWRConfig } from 'swr';

import { IntlProvider } from '@/providers/IntlProvider';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <SWRConfig
      value={{
        fetcher,
        shouldRetryOnError: true,
        errorRetryCount: 3,
        errorRetryInterval: 1000,
        keepPreviousData: true,
      }}
    >
      <IntlProvider>
        <ThemeProvider>
          <SessionProvider>{children}</SessionProvider>
          <ToasterProvider />
        </ThemeProvider>
      </IntlProvider>
    </SWRConfig>
  );
};
