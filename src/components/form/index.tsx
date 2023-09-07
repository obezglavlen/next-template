'use client';

import { CSSProperties, FC, HTMLInputTypeAttribute, PropsWithChildren } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './styles.module.scss';

export interface FormField {
  label: string;
  name: string;
  type: HTMLInputTypeAttribute;
}

interface FormProps extends PropsWithChildren {
  onSubmit: (data: any) => void;
  defaultValues?: any;
  zodSchema: z.Schema;
  items?: FormField[];
}

export const Form: FC<FormProps> = (props) => {
  const { zodSchema, onSubmit, items, children, defaultValues } = props;
  const { register, handleSubmit, formState } = useForm<
    z.infer<typeof zodSchema>
  >({
    defaultValues,
    resolver: zodResolver(zodSchema),
    mode: 'onBlur',
  });

  console.log(formState.touchedFields);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={[styles.container, styles.form].join(' ')}
    >
      {items?.map((item) => (
        <div
          key={item.name}
          className={styles.fieldContainer}
          style={{ '--col': 4 } as CSSProperties}
        >
          <div className={styles.field}>
            <label htmlFor={item.name}>{item.label}</label>
            <input type={item.type} {...register(item.name)} />
          </div>
          {(formState.errors[item.name] ||
            !formState.touchedFields[item.name]) && (
            <p>{formState.errors[item.name]?.message?.toString()}</p>
          )}
        </div>
      ))}
      <div className={styles.childrens}>
      {children}
      </div>
    </form>
  );
};
