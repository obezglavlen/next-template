'use client';

import { LeftIcon } from '@/icons/feather/LeftIcon';
import { RightIcon } from '@/icons/feather/RightIcon';
import { useThemeContext } from '@/providers/ThemeProvider';
import { WithClassName } from '@/types/idnex';
import Image from 'next/image';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

type HeaderProps = {} & WithClassName;

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
        rounded-md
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
      <div>
        <div
          className={twMerge(
            `
            bg-[url("/icons/feather/sun_icon.svg")]
            dark:bg-[url("/icons/feather/moon_icon.svg")]
            bg-cover
            bg-no-repeat
            bg-center
            h-8
            w-8
            ml-auto
            `
          )}
        >
          <input
            type='checkbox'
            checked={isDarkTheme}
            id='theme-switch'
            onChange={() => {
              switchTheme();
            }}
            className={twMerge(
              `
              opacity-0
              w-full
              h-full
              `
            )}
          />
        </div>
      </div>
    </aside>
  );
};
