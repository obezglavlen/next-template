'use client';

import { useSearchParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

import { Flex } from '@/components/common/Flex';

export default function Error() {
  const err = useSearchParams();
  return (
    <Flex
      direction='col'
      className={twMerge(
        'p-4',
        'items-center',
        'justify-center',
        'min-h-full',
        'bg-primary dark:bg-secondary'
      )}
    >
      {err.get('error')}
    </Flex>
  );
}
