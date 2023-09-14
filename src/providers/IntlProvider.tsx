'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { PropsWithChildren, useEffect } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';

export const IntlProvider = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const lang = useReadLocalStorage('language');
  useEffect(() => {
    if (lang) {
      console.log('aaa');
      router.replace(
        `${pathname.replace(/^\/.*\/?/, `/${lang}/`)}?${searchParams}`
      );
    }
  }, [lang]);

  return children;
};
