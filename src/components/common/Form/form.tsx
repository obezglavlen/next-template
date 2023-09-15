import { FormEvent, PropsWithChildren } from 'react';

import { Flex } from '@/components/common/Flex';

import { PropsWithClassName } from '@/types';

type onSubmitXorAction =
  | {
      onSubmit?: never;
      action?: string;
      method?: string;
    }
  | {
      onSubmit: (_e: FormEvent<HTMLFormElement>) => void;
      action?: never;
      method?: never;
    };

type FormProps = {} & onSubmitXorAction &
  PropsWithChildren &
  PropsWithClassName;

export const Form = ({
  children,
  className,
  onSubmit,
  action,
  method,
}: FormProps) => {
  return (
    <form
      onSubmit={onSubmit}
      action={action}
      method={method}
      className={className}
    >
      <Flex direction='col'>{children}</Flex>
    </form>
  );
};
