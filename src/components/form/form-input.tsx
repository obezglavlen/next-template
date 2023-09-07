import { PropsWithClassName } from '@/types';
import classNames from 'classnames';
import {
  HTMLInputTypeAttribute,
  PropsWithChildren,
  Ref,
  forwardRef,
} from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { FlexColumn, FlexRow } from '../flex';

type FormInputProps = {
  type: HTMLInputTypeAttribute;
  label?: string;
  error?: string;
} & UseFormRegisterReturn &
  PropsWithChildren &
  PropsWithClassName;

export const FormInput = forwardRef(
  (
    { type, children, error, label, className, ...register }: FormInputProps,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <FlexColumn>
        <FlexRow>
          <label htmlFor={register.name}>{label}</label>
          <input
            type={type}
            id={register.name}
            {...register}
            ref={ref}
            className={classNames(
              'border-2',
              'border-slate-300',
              'outline-pink-300',
              'rounded',
              error && 'border-red-400',
              className
            )}
          />
        </FlexRow>
        {error && (
          <FlexRow>
            <p className="text-red-400">{error}</p>
          </FlexRow>
        )}
      </FlexColumn>
    );
  }
);

FormInput.displayName = 'FormInput';
