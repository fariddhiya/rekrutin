'use client';

import { Menu, MenuProps } from 'antd';
import { useState } from 'react';
import { AvatarIco } from '../../common/assets/images';
import Image from 'next/image';

type MenuItem = Required<MenuProps>['items'][number];
type OnClick = Required<MenuProps>['onClick'];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem(
    'Selamat datang',
    'sub1',
    <Image src={AvatarIco} alt={``} width={45} />,
    [getItem('Logout', 'logout')]
  ),
];

export default function UserDropdown() {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const logoutHandler: MenuProps['onClick'] = (e: Parameters<OnClick>[0]) => {
    // hre
  };

  const handleClickMenu = () => setShowDropdown(!showDropdown);

  return (
    <Menu
      className='!h-auto !w-auto !py-1'
      onClick={logoutHandler}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode='inline'
      items={items}
    />
  );
}
