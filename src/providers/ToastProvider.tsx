'use client';

import { ToastContainer } from 'react-toastify';

import { useThemeContext } from '@/providers/ThemeProvider';

export const ToastProvider = () => {
  const { isDarkTheme } = useThemeContext();
  return (
    <ToastContainer
      position='top-right'
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={isDarkTheme ? 'dark' : 'light'}
    />
  );
};
