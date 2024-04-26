import React from 'react';
import { Layout } from 'antd';
import logo from './gustoexpress.jpeg';
import '../../App.css';
import CartDrawer from '../Cart/CartDrawer';

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
          <CartDrawer/>
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
