import { availableLanguages, getLocale } from '@/intl/config';
import { NextRequest, NextResponse } from 'next/server';

export const middleware = (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;
  const pathnameMissLocale = availableLanguages.every(
    (lng) => !pathname.startsWith(`/${lng}/`) && pathname !== `/${lng}`
  );

  if (pathnameMissLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
};

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|intl|assets).*)'],
};
