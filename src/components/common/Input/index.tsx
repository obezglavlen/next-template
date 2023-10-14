import { Slot } from '../Slot';
import inputStyles from './styles.module.scss';
import React, {
  ComponentPropsWithoutRef,
  ForwardedRef,
  PropsWithChildren,
  forwardRef,
  useCallback,
} from 'react';

import { PropsWithAsChild } from '@/types';

type InputProps = {
  label?: string;
} & PropsWithChildren &
  PropsWithAsChild &
  ComponentPropsWithoutRef<'input'>;

export const Input = forwardRef(
  ({ asChild, label, ...other }: InputProps, ref: ForwardedRef<any>) => {
    const Comp = asChild ? Slot : 'input';

    const Wrapper = useCallback(
      ({ children }: PropsWithChildren) => {
        if (!label) return children;
        return (
          <div className={inputStyles.wrapper}>
            <label>{label}</label>
            {children}
          </div>
        );
      },
      [label]
    );

    return (
      <Wrapper>
        <Comp className={inputStyles.input} {...other} ref={ref} />
      </Wrapper>
    );
  }
);
