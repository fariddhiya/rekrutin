import Header from '../header';
import { NavigationBar } from '../navigation-bar';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='flex h-screen bg-slate-100'>
      <NavigationBar />
      <Header />
      <main>{children}</main>
    </main>
  );
};

export default Layout;
