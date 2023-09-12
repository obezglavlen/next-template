import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      transparent: 'transparent',
      black: 'black',
      white: 'white',
      primary: {
        DEFAULT: '#eae0cc',
        100: '#3e3219',
        200: '#7d6433',
        300: '#b79550',
        400: '#d1bb8e',
        500: '#eae0cc',
        600: '#eee6d6',
        700: '#f3ede1',
        800: '#f7f3eb',
        900: '#fbf9f5',
      },
      secondary: {
        DEFAULT: '#2c1127',
        100: '#090308',
        200: '#120710',
        300: '#1a0a17',
        400: '#230e1f',
        500: '#2c1127',
        600: '#6d2a61',
        700: '#ad439a',
        800: '#cd7ebe',
        900: '#e6bedf',
      },
      accent: {
        'light-sea-green': {
          DEFAULT: '#22aaa1',
          100: '#072220',
          200: '#0d4440',
          300: '#146661',
          400: '#1b8881',
          500: '#22aaa1',
          600: '#33d7cc',
          700: '#66e1d9',
          800: '#99ebe5',
          900: '#ccf5f2',
        },
        'lavender-floral': {
          DEFAULT: '#bd96ee',
          100: '#240b43',
          200: '#481685',
          300: '#6c21c8',
          400: '#9453e3',
          500: '#bd96ee',
          600: '#cbabf1',
          700: '#d8c0f5',
          800: '#e5d5f8',
          900: '#f2eafc',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
