export type Route = {
  label: string;
  href: string;
};

export const navigationRoutes: Route[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Login',
    href: '/auth/login',
  },
];
