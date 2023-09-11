import { twMerge } from 'tailwind-merge';

import type { ButtonProps } from '@/components/common/Button';
import { BaseButton } from '@/components/common/Button/base';

export const OutlinedButton = (props: ButtonProps) => {
  return (
    <BaseButton
      {...props}
      className={twMerge('bg-transparent', 'active:ring-pink-300')}
    />
  );
};
