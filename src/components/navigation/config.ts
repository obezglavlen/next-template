export type Route = {
  label: string;
  href: string;
};

export const navigationConfig: Route[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Login',
    href: '/auth/login',
  },
];
