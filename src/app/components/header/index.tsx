import Image from 'next/image';
import SearchBar from '../search-bar';
import { AvatarIco } from '../../../../common/assets/images';
import { Button } from 'antd';
import { BellOutlined } from '@ant-design/icons';

const Header = () => {
  return (
    <div className='m-10 flex h-16 w-full items-center justify-between'>
      <SearchBar />

      <div className='flex items-center justify-center'>
        <Button type='link' className='mr-6 rounded-full'>
          <BellOutlined style={{ fontSize: '24px' }} />
        </Button>

        <Button
          type='link'
          className='flex items-center justify-center rounded-full !bg-none !fill-none'
        >
          <Image src={AvatarIco} alt={``} width={45} height={45} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
