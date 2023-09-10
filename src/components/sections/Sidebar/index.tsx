'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import { twMerge } from 'tailwind-merge';

import { Flex } from '@/components/common/Flex';

import { useThemeContext } from '@/providers/ThemeProvider';

import type { PropsWithClassName } from '@/types';

import { LeftIcon } from '@/icons/feather/LeftIcon';
import { MoonIcon } from '@/icons/feather/MoonIcon';
import { RightIcon } from '@/icons/feather/RightIcon';
import { SunIcon } from '@/icons/feather/SunIcon';

type HeaderProps = {} & PropsWithClassName;

export const Sidebar = ({ className }: HeaderProps) => {
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
        'bg-slate-600',
        'w-[4rem]',
        'rounded-r-md',
        'p-2',
        'h-full',
        'relative',
        'transition-all',
        isOpen && 'w-[16rem]',
        className
      )}
    >
      <button
        type='button'
        className={twMerge(
          'h-10',
          'w-10',
          'absolute',
          '-right-6',
          'rounded-full',
          'bg-gray-900',
          'grid',
          'place-items-center',
          'overflow-hidden'
        )}
        onClick={toggleOpen}
      >
        {isOpen ? (
          <LeftIcon
            className={twMerge('text-green-600', 'mr-0.5')}
            width={32}
            height={32}
          />
        ) : (
          <RightIcon
            className={twMerge('text-green-600', 'ml-0.5')}
            width={32}
            height={32}
          />
        )}
      </button>
      <div className={twMerge('h-8', 'w-8', 'relative', 'cursor-pointer')}>
        {isDarkTheme ? (
          <MoonIcon
            height={32}
            width={32}
            className='text-slate-50'
            strokeWidth={1}
          />
        ) : (
          <SunIcon
            height={32}
            width={32}
            className='text-slate-50'
            strokeWidth={1}
          />
        )}
        <input
          type='checkbox'
          checked={isDarkTheme}
          id='theme-switch'
          onChange={() => {
            toast('Theme changed', { theme: isDarkTheme ? 'dark' : 'light' });
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
