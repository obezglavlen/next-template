import { twMerge } from 'tailwind-merge';

import { Temp } from '@/components/Temp';
import { Flex } from '@/components/common/Flex';

export default function Home() {
  return (
    <Flex
      direction='col'
      className={twMerge(
        'items-center',
        'justify-center',
        'h-full',
        'bg-slate-600'
      )}
    >
      <Temp />
    </Flex>
  );
}
