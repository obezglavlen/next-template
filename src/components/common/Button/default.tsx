import { twMerge } from 'tailwind-merge';

import type { ButtonProps } from '@/components/common/Button';
import { BaseButton } from '@/components/common/Button/base';

export const DefaultButton = ({className, ...other}: ButtonProps) => {
  return (
    <BaseButton
      className={twMerge(
        'bg-accent-light-sea-green dark:bg-accent-light-sea-green-300',
        'active:!bg-accent-light-sea-green-300 dark:active:!bg-accent-light-sea-green',
        'hover:!bg-accent-light-sea-green-400',
        className
      )}
      {...other}
    />
  );
};
