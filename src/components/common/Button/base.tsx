import { twMerge } from 'tailwind-merge';

import type { ButtonProps } from '@/components/common/Button';

export const BaseButton = ({ children, className, ...other }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'min-w-[8rem]',
        'min-h-[2rem]',
        'ring-2',
        'ring-pink-100',
        'hover:ring-pink-200',
        'rounded-sm',
        'bg-red-200 bg-opacity-40',
        'active:bg-red-300 active:bg-opacity-40',
        'p-2',
        className
      )}
      {...other}
    >
      {children}
    </button>
  );
};
