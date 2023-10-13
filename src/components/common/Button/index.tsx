import { Slot } from '../Slot';
import buttonStyle from './styles.module.scss';
import { cn } from '@/css/cn';
import React, { PropsWithChildren } from 'react';

import { PropsWithAsChild } from '@/types';

type ButtonProps = {
  onClick: () => void;
} & PropsWithChildren &
  PropsWithAsChild;

export const Button: React.FC<ButtonProps> = ({
  onClick,
  asChild,
  children,
}) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp className={cn(buttonStyle.button)} onClick={onClick}>
      {children}
    </Comp>
  );
};