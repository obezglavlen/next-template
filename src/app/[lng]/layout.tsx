'use client';

import { breakpoints } from '@/css/breakpoints';
import { PropsWithChildren } from 'react';
import { useWindowSize } from 'usehooks-ts';

import { navigationConfig } from '@/components/navigation/config';
import HorizontalNavigation from '@/components/navigation/horizontal';
import VerticalNavigation from '@/components/navigation/vertical';

export default function Layout({ children }: PropsWithChildren) {
  const { width } = useWindowSize();
  const isMobile = true || width <= breakpoints.sm;

  return (
    <>
      {!isMobile ? (
        <HorizontalNavigation config={navigationConfig} />
      ) : (
        <VerticalNavigation config={navigationConfig} />
      )}
      <main
        style={{
          height: isMobile
            ? 'calc(100% - var(--nav-horizontal-height))'
            : '100%',
        }}
      >
        {children}
      </main>
    </>
  );
}
