import { twMerge } from 'tailwind-merge';

import { Temp } from '@/components/Temp';
import { Flex } from '@/components/common/Flex';

export default function Home() {
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
      <Temp />
    </Flex>
  );
}
