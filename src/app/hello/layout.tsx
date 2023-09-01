import { FC, PropsWithChildren } from 'react';

export const metadata = {
  title: 'Posts',
};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      Nested layout
      <div style={{ color: 'darkred' }}>{children}</div>
    </div>
  );
};

export default Layout;
