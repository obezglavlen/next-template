import { ElementType, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { Box } from '@/components/common/Box';

import type { PropsWithAs, PropsWithClassName } from '@/types';

type GridItemProps<E extends ElementType> = {
  rowSpan?: number;
  colSpan?: number;
} & PropsWithChildren &
  PropsWithClassName &
  PropsWithAs<E>;

export const GridItem = <E extends ElementType>({
  as,
  children,
  className,
  rowSpan,
  colSpan,
  ...other
}: GridItemProps<E>) => {
  const _colSpans = [
    'col-span-1',
    'col-span-2',
    'col-span-3',
    'col-span-4',
    'col-span-5',
    'col-span-6',
    'col-span-7',
    'col-span-8',
    'col-span-9',
    'col-span-10',
    'col-span-11',
    'col-span-12',
    'col-span-full',
  ];
  const _rowSpans = [
    'row-span-1',
    'row-span-2',
    'row-span-3',
    'row-span-4',
    'row-span-5',
    'row-span-6',
    'row-span-full',
  ];
  const _colSpan = colSpan
    ? _colSpans.find((s) => s.endsWith(`${colSpan}`))
    : '';
  const _rowSpan = rowSpan
    ? _rowSpans.find((s) => s.endsWith(`${rowSpan}`))
    : '';

  return (
    <Box
      as={as as ElementType}
      {...other}
      className={twMerge(_colSpan, _rowSpan, className)}
    >
      {children}
    </Box>
  );
};
