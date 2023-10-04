'use client';

import { Theme } from '@radix-ui/themes';
import { PropsWithChildren, createContext, useContext } from 'react';
import { Toaster } from 'sonner';
import { useLocalStorage } from 'usehooks-ts';

type Theme = 'light' | 'dark';
type ThemeChangeHandler = (_: Theme) => void;

const defaultValue = {
  theme: 'dark' as Theme,
  setTheme: ((_: Theme) => {}) as ThemeChangeHandler,
};

const themeContext = createContext(defaultValue);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', defaultValue.theme);

  return (
    <themeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <Theme appearance={theme} accentColor='amber'>
        {children}
        <Toaster closeButton theme={theme} richColors />
      </Theme>
    </themeContext.Provider>
  );
};

export const ThemeConsumer = themeContext.Consumer;

export const useThemeContext = () => useContext(themeContext);
