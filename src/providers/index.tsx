'use client';

import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';

import { IntlProvider } from '@/providers/IntlProvider';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <IntlProvider>
      <SessionProvider>{children}</SessionProvider>
    </IntlProvider>
  );
};
