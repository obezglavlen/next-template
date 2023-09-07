import { PropsWithClassName } from '@/types';
import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

export const FlexRow: FC<PropsWithClassName & PropsWithChildren> = ({
  className,
  children,
}) => {
  return (
    <div className={classNames('flex', 'flex-row', className)}>{children}</div>
  );
};
