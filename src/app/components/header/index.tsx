import Image from 'next/image';
import SearchBar from '../search-bar';
import { AvatarIco } from '../../../common/assets/images';
import { Button } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import UserDropdown from './user-dropdown';

const Header = () => {
  return (
    <div className='w-full'>
      <div className='my-8 mb-14 mr-12 flex h-14 items-center justify-between'>
        <SearchBar />
        <div className='flex h-full items-center justify-center'>
          <Button type='link' className='mr-6 !h-full rounded-full'>
            <BellOutlined style={{ fontSize: '24px' }} />
          </Button>

          {/* <Image src={AvatarIco} alt={``} width={45} /> */}
          <div className='h-16 '>
            <UserDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
