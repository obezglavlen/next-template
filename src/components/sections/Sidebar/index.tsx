'use client';

import { useIntl } from '@/intl/use-intl';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { twMerge } from 'tailwind-merge';

import { Flex } from '@/components/common/Flex';
import { SvgIcon } from '@/components/common/SvgIcon';

import { useThemeContext } from '@/providers/ThemeProvider';

import type { PropsWithClassName } from '@/types';

import { LeftIcon } from '@/icons/feather/LeftIcon';
import { MoonIcon } from '@/icons/feather/MoonIcon';
import { RightIcon } from '@/icons/feather/RightIcon';
import { SunIcon } from '@/icons/feather/SunIcon';

type HeaderProps = {} & PropsWithClassName;

export const Sidebar = ({ className }: HeaderProps) => {
  const t = useIntl();
  const { isDarkTheme, switchTheme } = useThemeContext();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const toggleOpen = () => {
    setIsOpen((i) => !i);
  };

  return (
    <Flex
      as='aside'
      direction='col'
      className={twMerge(
        'bg-primary dark:bg-secondary',
        'w-[4rem]',
        isOpen && 'w-[16rem]',
        'h-full',
        'rounded-r-md',
        'p-2',
        'transition-all',
        'sticky',
        'left-0 top-0',
        className
      )}
    >
      <button
        type='button'
        className={twMerge(
          'h-10',
          'w-10',
          'absolute',
          '-right-4',
          'rounded-full',
          'from-primary-400 to-primary',
          'dark:from-secondary-600 dark:to-secondary',
          'bg-gradient-to-l',
          // 'bg-primary-400 dark:bg-secondary-600',
          'text-secondary',
          'grid',
          'place-items-center',
          'overflow-hidden'
        )}
        onClick={toggleOpen}
      >
        {isOpen ? (
          <SvgIcon className={twMerge('mr-0.5')} width={32} height={32}>
            <LeftIcon />
          </SvgIcon>
        ) : (
          <SvgIcon
            className={twMerge('text-green-600', 'ml-0.5')}
            width={32}
            height={32}
          >
            <RightIcon />
          </SvgIcon>
        )}
      </button>
      <div
        className={twMerge(
          'h-8',
          'w-8',
          'relative',
          'cursor-pointer',
          'text-secondary dark:text-primary',
          'mt-auto ml-auto',
          !isOpen && 'mr-auto'
        )}
      >
        {isDarkTheme ? (
          <SvgIcon height={32} width={32} strokeWidth={1}>
            <MoonIcon />
          </SvgIcon>
        ) : (
          <SvgIcon height={32} width={32} strokeWidth={1}>
            <SunIcon />
          </SvgIcon>
        )}
        <input
          type='checkbox'
          checked={isDarkTheme}
          id='theme-switch'
          onChange={() => {
            toast(t('notifications.colorTheme') || '');
            switchTheme();
          }}
          className={twMerge(
            'opacity-0',
            'w-full',
            'h-full',
            'absolute',
            'top-0',
            'left-0'
          )}
        />
      </div>
    </Flex>
  );
};
