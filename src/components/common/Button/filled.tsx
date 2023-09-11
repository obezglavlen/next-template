import { twMerge } from 'tailwind-merge';

import type { ButtonProps } from '@/components/common/Button';
import { BaseButton } from '@/components/common/Button/base';

export const FilledButton = (props: ButtonProps) => {
  return (
    <BaseButton
      {...props}
      className={twMerge(
        'bg-opacity-100 active:bg-opacity-100',
        'hover:bg-red-400',
        'ring-0'
      )}
    />
  );
};
