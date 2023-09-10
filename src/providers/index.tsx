'use client';

import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ThemeProvider } from '@/providers/ThemeProvider';

export const queryClient = new QueryClient();

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>{children}</SessionProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
