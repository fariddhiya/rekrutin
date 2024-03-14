'use client';

import Image from 'next/image';
import { menu } from '../../../../common/dummy/menu';
import { RekrutinIco } from '../../../../common/assets/images';
import { Button } from 'antd';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export const NavigationBar = () => {
  const pathname = usePathname();

  console.log(pathname);
  const [dataMenu, setDataMenu] = useState(menu);

  const handleMenuButton = (menu: string): void => {
    // setDataMenu(
    //   dataMenu.map((item) =>
    //     item.menu === menu
    //       ? { ...item, isActive: true }
    //       : { ...item, isActive: false }
    //   )
    // );
  };

  return (
    <div className='relative flex h-full w-96 flex-col items-center border-0 border-r border-solid border-blue-900'>
      <div className='my-5 mt-10 flex  items-center'>
        <Image
          src={RekrutinIco}
          alt={`Image Login`}
          width={55}
          height={55}
          className='mr-4'
        />
        <h1 className='text-[#7693F5]'>Rekrutin</h1>
      </div>

      <div className='flex w-full flex-col items-center  '>
        {dataMenu.map((value, key) => {
          return (
            <Button
              className={`mt-5 flex h-14 w-2/3 items-center p-5 ${value.isActive ? `bg-[#6786ec]` : `bg-white`}`}
              onClick={() => handleMenuButton(value.menu)}
              key={key}
              href={`${value.menu.toLowerCase()}`}
            >
              <Image
                src={value.icon}
                alt={`Image Login`}
                width={23}
                height={23}
                className={`mr-4 ${value.isActive ? `fill-white` : ''}`}
              />
              <p>{value.menu}</p>
            </Button>
          );
        })}
      </div>
    </div>
  );
};
