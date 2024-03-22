import AntdStyledComponentsRegistry from '../antd-styled';
import Header from '../header';
import { NavigationBar } from '../navigation-bar';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  const initialNav = 'dashboard';

  return (
    <AntdStyledComponentsRegistry>
      <main className='flex h-screen w-full !bg-white'>
        <NavigationBar />
        <div className='w-full bg-white'>
          <Header />
          <div>{children}</div>
        </div>
      </main>
    </AntdStyledComponentsRegistry>
  );
};

export default Layout;
