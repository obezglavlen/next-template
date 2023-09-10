import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { PropsWithAs, PropsWithClassName } from '@/types';

type ButtonProps = {} & PropsWithChildren &
  PropsWithClassName &
  ComponentPropsWithoutRef<'button'>;

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
        'bg-red-200 bg-opacity-30',
        'active:bg-red-300 active:bg-opacity-30',
        'p-2',
        className
      )}
      {...other}
    >
      {children}
    </button>
  );
};
