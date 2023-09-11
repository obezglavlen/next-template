import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

import { BaseButton as Default } from '@/components/common/Button/base';
import { FilledButton as Filled } from '@/components/common/Button/filled';
import { OutlinedButton as Outlined } from '@/components/common/Button/outlined';

import { PropsWithClassName } from '@/types';

export type ButtonProps = {} & PropsWithChildren &
  PropsWithClassName &
  ComponentPropsWithoutRef<'button'>;

export const Button = {
  Default,
  Outlined,
  Filled,
};
