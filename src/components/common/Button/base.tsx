import { twMerge } from 'tailwind-merge';

import type { ButtonProps } from '@/components/common/Button';
import { Flex } from '@/components/common/Flex';

export const BaseButton = ({ children, className, ...other }: ButtonProps) => {
  return (
    <Flex
      as='button'
      className={twMerge(
        'min-w-[8rem]',
        'min-h-[2rem]',
        'rounded-md',
        'p-2',
        'justify-center items-center',
        'text-black dark:text-white',
        className
      )}
      {...other}
    >
      {children}
    </Flex>
  );
};
