import React from 'react';
import PropTypes from 'prop-types';
import {  Layout } from 'antd';
import AppFooter from './Footer'; 
import AppHeader from './Header';

const { Content } = Layout;

const AppLayout = ({ children }) =>{
  return (
    <Layout style={{ minHeight: '100vh', backgroundColor:'#FFFFFD'}}>
      <AppHeader/>
      <Content>
      {children}
      </Content>
      <AppFooter />
    </Layout>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
