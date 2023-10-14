import s from './styles.module.scss';
import { cn } from '@/css/cn';
import Image from 'next/image';
import { ComponentPropsWithoutRef } from 'react';
import { useBoolean } from 'usehooks-ts';

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
  const { value: err, setTrue: setTrueErr } = useBoolean(false);
  const { value: load, setTrue: setTrueLoad } = useBoolean(false);
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
          onError={() => setTrueErr()}
          onLoad={() => setTrueLoad()}
          alt='Avatar'
        />
      ) : (
        <strong>{initials}</strong>
      )}
    </div>
  );
};
