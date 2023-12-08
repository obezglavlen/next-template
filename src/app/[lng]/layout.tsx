'use client';

import { breakpoints } from '@/css/breakpoints';
import { useWindowSize } from '@uidotdev/usehooks';
import { PropsWithChildren } from 'react';

import HorizontalNavigation from '@/components/navigation/horizontal';
import { navigationRoutes } from '@/components/navigation/routes';
import VerticalNavigation from '@/components/navigation/vertical';

export default function Layout({ children }: PropsWithChildren) {
  const { width } = useWindowSize();
  const isMobile = true || !width || width! <= breakpoints.sm;

  return (
    <>
      {!isMobile ? (
        <HorizontalNavigation config={navigationRoutes} />
      ) : (
        <VerticalNavigation config={navigationRoutes} />
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
