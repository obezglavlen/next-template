'use client';

import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ThemeProvider } from '@/providers/ThemeProvider';
import { ToastProvider } from '@/providers/ToastProvider';

export const queryClient = new QueryClient();

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <ToastProvider />
      <QueryClientProvider client={queryClient}>
        <SessionProvider>{children}</SessionProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
