import { FlexColumn, FlexRow } from '@/components/flex';
import { PropsWithClassName } from '@/types';
import { FC, PropsWithChildren } from 'react';
export * from './form-input';

type FormProps = {
  handleSubmit: () => void;
} & PropsWithChildren &
  PropsWithClassName;
export const Form: FC<FormProps> = ({ handleSubmit, children, className }) => {
  return (
    <form onSubmit={handleSubmit}>
      <FlexColumn className={className}>{children}</FlexColumn>
    </form>
  );
};
