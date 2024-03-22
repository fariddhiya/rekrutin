'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import NavbarCard from './navbar-card';
import { RekrutinIco } from '../../../common/assets/images';
import { menu } from '../../../common/dummy/menu';
import { usePathname } from 'next/navigation';

export const NavigationBar = () => {
  const pathname = usePathname();

  const [dataMenu, setDataMenu] = useState(menu);
  // const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <div className='relative mr-10 flex h-full w-96 flex-col items-center'>
      <div className='my-5 mt-10 flex items-center'>
        <Image
          src={RekrutinIco}
          alt='Image Login'
          width={55}
          height={55}
          className='mr-4'
        />
        <h1 className='text-[#7693F5]'>Rekrutin</h1>
      </div>

      <div className='flex w-full flex-col items-center'>
        {dataMenu.map((value, key) => (
          <NavbarCard
            key={key}
            slug={value.slug}
            menu={value.menu}
            icon={value.icon}
            pathname={pathname}
          />
        ))}
      </div>
    </div>
  );
};
