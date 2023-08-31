import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      Nested layout
      <div style={{ color: 'darkred' }}>{children}</div>
    </div>
  );
};

export default Layout;
