'use client';
import { queryClient } from '@/services/client';
import { ThemeProvider, createTheme } from '@mui/material';
import { SessionProvider } from 'next-auth/react';
import { FC, PropsWithChildren } from 'react';
import { QueryClientProvider } from 'react-query';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

export const Providers: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </SessionProvider>
    </ThemeProvider>
  );
};
