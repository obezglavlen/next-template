'use client';

import { ToasterProvider } from './ToasterProvider';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { IntlProvider } from '@/providers/IntlProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      retry: 3,
    },
  },
});

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <IntlProvider>
        <ThemeProvider>
          <SessionProvider>{children}</SessionProvider>
          <ToasterProvider />
        </ThemeProvider>
      </IntlProvider>
    </QueryClientProvider>
  );
};
