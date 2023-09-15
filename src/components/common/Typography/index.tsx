import { ElementType, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { PropsWithClassName } from '@/types';

type AvailablETypographyVariants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body1'
  | 'body2'
  | 'caption';

type TypographyProps = {
  variant?: AvailablETypographyVariants;
} & PropsWithChildren &
  PropsWithClassName;

export const Typography = ({
  variant = 'body1',
  children,
  className,
}: TypographyProps) => {
  let Component: ElementType;
  let defaultClassName = '';

  switch (variant) {
    case 'h1':
      Component = 'h1';
      defaultClassName = twMerge(
        'text-4xl',
        'font-bold',
        'leading-10',
        'tracking-tight',
      );
      break;
    case 'h2':
      Component = 'h2';
      defaultClassName = twMerge(
        'text-3xl',
        'font-bold',
        'leading-9',
        'tracking-tight',
      );
      break;
    case 'h3':
      Component = 'h3';
      defaultClassName = twMerge(
        'text-2xl',
        'font-bold',
        'leading-8',
        'tracking-tight',
      );
      break;
    case 'body1':
      Component = 'p';
      defaultClassName = twMerge(
        'text-base',
        'font-normal',
        'leading-6',
        'tracking-tight',
      );
      break;
    case 'body2':
      Component = 'p';
      defaultClassName = twMerge(
        'text-sm',
        'font-normal',
        'leading-5',
        'tracking-tight',
      );
      break;
    case 'caption':
      Component = 'p';
      defaultClassName = twMerge(
        'text-xs',
        'font-normal',
        'leading-4',
        'tracking-tight',
      );
      break;
  }

  return (
    <Component className={twMerge(defaultClassName, className)}>
      {children}
    </Component>
  );
};
