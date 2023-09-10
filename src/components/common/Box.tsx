import { ElementType, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { PropsWithAs, PropsWithClassName } from '@/types';

const defaultComponent = 'div';

type BoxProps<E extends ElementType> = {} & PropsWithChildren &
  PropsWithClassName &
  PropsWithAs<E>;

export const Box = <E extends ElementType>({
  as,
  className,
  children,
  ...other
}: BoxProps<E>) => {
  const Component = as || defaultComponent;
  return (
    <Component
      className={twMerge(
        `
        block
        p-2
        `,
        className
      )}
      {...other}
    >
      {children}
    </Component>
  );
};
