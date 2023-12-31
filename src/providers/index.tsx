'use client';

import { ToasterProvider } from './ToasterProvider';
import {
  QueryClient,
  QueryClientProvider,
  keepPreviousData,
} from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      placeholderData: keepPreviousData,
      queryFn: () => {
        return fetch(``).then((data) => data.json());
      },
    },
  },
});

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <SessionProvider>{children}</SessionProvider>
        <ToasterProvider />
      </ThemeProvider>
    </QueryClientProvider>
  );
};
