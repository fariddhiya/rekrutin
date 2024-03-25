import SearchBar from '../search-bar';
import { Button } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import UserDropdown from './user-dropdown';

const Header = () => {
  return (
    <div className='w-full'>
      <div className='my-8 mb-12 mr-12 flex h-14 items-center justify-between'>
        <SearchBar />
        <div className='flex h-full items-center justify-center'>
          <Button type='link' className='mr-6 !h-full rounded-full'>
            <BellOutlined style={{ fontSize: '24px' }} />
          </Button>
          <div className='h-16 '>
            <UserDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
