import s from './styles.module.scss';
import { cn } from '@/css/cn';
import Image from 'next/image';
import { ComponentPropsWithoutRef, useState } from 'react';

import { PropsWithClassName } from '@/types';

type AvatarProps = {
  src?: string;
  initials?: string;
  size?: number;
} & PropsWithClassName &
  Omit<ComponentPropsWithoutRef<'div'>, 'children'>;

export const Avatar = ({
  className,
  src,
  initials,
  size = 32,
  style,
  ...other
}: AvatarProps) => {
  const [err, setErr] = useState(false);
  const [load, setLoad] = useState(false);
  return (
    <div
      className={cn(s.avatar, className)}
      style={{ height: size, width: size, ...style }}
      {...other}
    >
      {src && !err ? (
        <Image
          width={size}
          height={size}
          src={load ? src : '/assets/user-placeholder.jpeg'}
          onError={() => setErr(true)}
          onLoad={() => setLoad(true)}
          alt='Avatar'
        />
      ) : (
        <strong>{initials}</strong>
      )}
    </div>
  );
};
