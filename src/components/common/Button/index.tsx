import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

import { DefaultButton as Default } from '@/components/common/Button/default';
import { OutlinedButton as Outlined } from '@/components/common/Button/outlined';

import { PropsWithClassName } from '@/types';

export type ButtonProps = {} & PropsWithChildren &
  PropsWithClassName &
  ComponentPropsWithoutRef<'button'>;

export const Button = {
  Default,
  Outlined,
};
