'use client';

import { useSearchParams } from 'next/navigation';

export default function Error() {
  const err = useSearchParams();
  return err.get('error');
}
