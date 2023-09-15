'use client';

import { availableLanguages } from '@/intl/config';
import { usePathname, useRouter } from 'next/navigation';
import { PropsWithChildren, useEffect } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';

export const IntlProvider = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const router = useRouter();
  const lang = useReadLocalStorage('language');
  useEffect(() => {
    if (lang) {
      const pathNameMissLocale = availableLanguages.every(
        (l) => !pathname.startsWith(`/${l}/`) && pathname !== `/${l}`
      );
      if (pathNameMissLocale) {
        router.replace(`/${lang}${pathname}`);
      } else {
        const pathnameDontHaveCorrectLocale =
          !pathname.startsWith(`/${lang}/`) && pathname !== `/${lang}`;
        if (pathnameDontHaveCorrectLocale) {
          router.replace(pathname.replace(/^\/[^/]+/, `/${lang}`));
        }
      }
    }
  }, [lang]);

  return children;
};
