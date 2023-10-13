import { default as NLink } from 'next/link';
import { PropsWithChildren } from 'react';

type LinkProps = {
  href: string;
} & PropsWithChildren;

export const Link = ({ href, children, ...other }: LinkProps) => {
  return (
    <NLink href={href} {...other}>
      {children}
    </NLink>
  );
};
