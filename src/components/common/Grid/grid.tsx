import { ElementType, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { PropsWithAs, PropsWithClassName } from '@/types';

const defaultComponent = 'div';

type GridProps<E extends ElementType> = {
  col?: number;
  row?: number;
} & PropsWithChildren &
  PropsWithClassName &
  PropsWithAs<E>;

export const Grid = <E extends ElementType>({
  as,
  className,
  children,
  col,
  row,
  ...other
}: GridProps<E>) => {
  const Component = as || defaultComponent;

  const _cols = [
    'grid-cols-1',
    'grid-cols-2',
    'grid-cols-3',
    'grid-cols-4',
    'grid-cols-5',
    'grid-cols-6',
    'grid-cols-7',
    'grid-cols-8',
    'grid-cols-9',
    'grid-cols-10',
    'grid-cols-11',
    'grid-cols-12',
    'grid-cols-none',
  ];

  const _rows = [
    'grid-rows-1',
    'grid-rows-2',
    'grid-rows-3',
    'grid-rows-4',
    'grid-rows-5',
    'grid-rows-6',
    'grid-rows-7',
    'grid-rows-8',
    'grid-rows-9',
    'grid-rows-10',
    'grid-rows-11',
    'grid-rows-12',
    'grid-rows-none',
  ];

  const auto = ['auto-cols-fr', 'auto-rows-fr'];
  const _auto = col && row ? '' : col ? auto[1] : row ? auto[0] : '';
  const _gridCols = col ? _cols.find((c) => c.endsWith(`${col}`)) : '';
  const _gridRows = row ? _rows.find((r) => r.endsWith(`${row}`)) : '';

  return (
    <Component
      className={twMerge(
        `
        grid
        ${_auto}
        ${_gridCols}
        ${_gridRows}
        `,
        className
      )}
      {...other}
    >
      {children}
    </Component>
  );
};
