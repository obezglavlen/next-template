import { PropsWithAs, PropsWithClassName } from '@/types/idnex';
import { Over_the_Rainbow } from 'next/font/google';
import { ElementType, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

const defaultComponent = 'div';

type RowXorCol = { row?: number; col?: never } | { row?: never; col?: number };

type GridProps<E extends ElementType> =
  {} & PropsWithChildren & PropsWithClassName & PropsWithAs<E> & RowXorCol;

export const Grid = <E extends ElementType>({
  as,
  className,
  children,
  col,
  row,
  ...other
}: GridProps<E>) => {
  const Component = as || defaultComponent;

  const auto = ['auto-cols-fr', 'auto-rows-fr'];
  const _auto = col ? auto[0] : row ? auto[1] : '';

  return (
    <Component
      className={twMerge(
        `
        grid
        ${_auto}
        `
      )}
      {...other}
    ></Component>
  );
};
