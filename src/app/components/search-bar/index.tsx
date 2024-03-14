import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const SearchBar = () => {
  return (
    <div>
      <Input
        placeholder='Search jobs, role and more...'
        prefix={<SearchOutlined />}
        className='h-12 w-96'
        size='large'
      />
    </div>
  );
};

export default SearchBar;
