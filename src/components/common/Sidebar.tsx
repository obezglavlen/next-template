'use client';

import { LeftIcon } from '@/icons/feather/LeftIcon';
import { MoonIcon } from '@/icons/feather/MoonIcon';
import { RightIcon } from '@/icons/feather/RightIcon';
import { SunIcon } from '@/icons/feather/SunIcon';
import { useThemeContext } from '@/providers/ThemeProvider';
import { PropsWithClassName } from '@/types/idnex';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { twMerge } from 'tailwind-merge';

type HeaderProps = {} & PropsWithClassName;

export const Sidebar = ({ className }: HeaderProps) => {
  const { isDarkTheme, switchTheme } = useThemeContext();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const toggleOpen = () => {
    setIsOpen((i) => !i);
  };

  return (
    <aside
      className={twMerge(
        `
        h-full
        w-[16rem]
        bg-slate-600
        flex
        flex-col
        rounded-r-md
        p-2
        relative
        `,
        className
      )}
    >
      <button
        type='button'
        className={twMerge(
          `
          h-10
          w-10
          absolute
          right-[-10%]
          rounded-full
          bg-gray-900
          grid
          place-items-center
          overflow-hidden
          `
        )}
        onClick={toggleOpen}
      >
        {isOpen ? (
          <LeftIcon
            className={twMerge(
              `
              text-green-600
              mr-0.5
              `
            )}
            width={32}
            height={32}
          />
        ) : (
          <RightIcon
            className={twMerge(
              `
              text-green-600
              ml-0.5
              `
            )}
            width={32}
            height={32}
          />
        )}
      </button>
      <div
        className={twMerge(
          `
        h-8
        w-8
        relative
        cursor-pointer
        `
        )}
      >
        {isDarkTheme ? (
          <MoonIcon
            height={32}
            width={32}
            className='text-slate-50'
            strokeWidth={1}
          ></MoonIcon>
        ) : (
          <SunIcon
            height={32}
            width={32}
            className='text-slate-50'
            strokeWidth={1}
          >
            das
          </SunIcon>
        )}
        <input
          type='checkbox'
          checked={isDarkTheme}
          id='theme-switch'
          onChange={() => {
            toast('Theme changed', {theme: isDarkTheme ? 'dark' : 'light'});
            switchTheme();
          }}
          className={twMerge(
            `
              opacity-0
              w-full
              h-full
              absolute
              top-0
              left-0
              `
          )}
        />
      </div>
    </aside>
  );
};
