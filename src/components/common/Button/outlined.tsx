import { twMerge } from 'tailwind-merge';

import type { ButtonProps } from '@/components/common/Button';
import { BaseButton } from '@/components/common/Button/base';

export const OutlinedButton = (props: ButtonProps) => {
  return (
    <BaseButton
      {...props}
      className={twMerge(
        'bg-transparent',
        'ring-2',
        'ring-inset',
        'ring-accent-light-sea-green-300 dark:ring-accent-light-sea-green',
        'active:!ring-accent-light-sea-green dark:active:!ring-accent-light-sea-green-300',
        'hover:!ring-accent-light-sea-green-400'
      )}
    />
  );
};
