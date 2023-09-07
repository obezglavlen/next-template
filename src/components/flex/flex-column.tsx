import { PropsWithClassName } from '@/types';
import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

export const FlexColumn: FC<PropsWithClassName & PropsWithChildren> = ({
  className,
  children,
}) => {
  return (
    <div className={classNames('flex', 'flex-col', className)}>{children}</div>
  );
};
