import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const SearchBar = () => {
  return (
    <Input
      placeholder='Search jobs, role and more...'
      prefix={<SearchOutlined />}
      className='h-full !w-80'
      size='large'
    />
  );
};

export default SearchBar;
