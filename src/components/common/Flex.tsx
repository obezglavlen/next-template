import { PropsWithAs, PropsWithClassName } from '@/types/idnex';
import { ElementType, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

const defaultComponent = 'div';

type FlexProps<E extends ElementType> = {
  direction?: 'col' | 'row';
} & PropsWithChildren &
  PropsWithClassName &
  PropsWithAs<E>;

export const Flex = <E extends ElementType>({
  as,
  className,
  direction = 'row',
  children,
  ...other
}: FlexProps<E>) => {
  const Component = as || defaultComponent;
  const _directions = ['flex-row', 'flex-col'];
  const _direction = _directions.find((d) => d.endsWith(direction));

  return (
    <Component
      className={twMerge(
        `
        flex
        ${_direction}
        gap-2
        `,
        className
      )}
      {...other}
    >
      {children}
    </Component>
  );
};
