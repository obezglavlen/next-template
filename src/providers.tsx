'use client';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { FC, PropsWithChildren } from 'react';
import { queryClient } from '@/services/client';

export const Providers: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SessionProvider>
  );
};
