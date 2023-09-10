'use client';

// @ts-ignore
import { useLocalStorage, useMediaQuery } from '@uidotdev/usehooks';
import {
  PropsWithChildren,
  createContext,
  useContext,
  useLayoutEffect,
} from 'react';

const themeContext = createContext<{
  isDarkTheme: boolean;
  switchTheme: () => void;
} | null>(null);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const deviceWantDark = useMediaQuery('(prefers-color-scheme: dark)');
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage<boolean>(
    'dark-theme',
    deviceWantDark
  );

  const switchTheme = () => {
    setIsDarkTheme((t: boolean) => !t);
  };

  useLayoutEffect(() => {
    isDarkTheme
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [isDarkTheme]);

  return (
    <themeContext.Provider value={{ isDarkTheme, switchTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(themeContext);
  if (!context) {
    throw new Error('themeContext can be used only within ThemeProvider');
  }
  return context;
};
