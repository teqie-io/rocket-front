import { Link} from 'react-router-dom';

import { Menu } from 'antd';

const DropdownMenu = () => (
  <Menu>
    <Menu.Item key="0"  className='menu'>
    <Link to="/login">Logout</Link>
    </Menu.Item>
  
    <Menu.Item key="1">
      <a href="https://www.aliyun.com">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="2">3rd menu item</Menu.Item>
  </Menu>
);

export default DropdownMenu;
