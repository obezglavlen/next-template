import { ComponentPropsWithoutRef, ElementType } from 'react';

export type PropsWithClassName = {
  className?: string;
};

export type PropsWithAs<E extends ElementType> = {
  as?: E;
} & ComponentPropsWithoutRef<E>;
