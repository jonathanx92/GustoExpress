import React from 'react';
import { Layout } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import logo from './gustoexpress.jpeg';
import '../../App.css';

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className='custom-header'>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%' }}>
        <a href="./login">Login</a>
        <div style={{ fontSize: '24px', marginLeft: '20px' }}>
          <a href="./shopping-cart"><ShoppingCartOutlined /></a>
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
