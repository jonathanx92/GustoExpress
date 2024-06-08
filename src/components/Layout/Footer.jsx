import React from 'react';
import { Layout } from 'antd';
import '../../App.css'
import { InstagramOutlined, FacebookOutlined, TikTokOutlined } from '@ant-design/icons';


const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer className='custom-footer'>
      <div className='footer-content'>
        <div className='footer-section'>
        <a href='./avisolegal'>Acerca de Nosotros</a>
        </div>
        <div className='footer-section'>
        <h2>Síguenos en:</h2>
            <div className='social-icons'>
              <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'><InstagramOutlined /></a>
              <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'><FacebookOutlined /></a>
              <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer'><TikTokOutlined /></a>
            </div>
        </div>
        <div className='footer-section'>
        <a href='./contacto'>Contactanos</a><br /><br />
        <a href='https://billing.stripe.com/p/login/test_14keUYgZufkT5NKeUU'>Acceso Portal Clientes</a>
        </div>
        
      </div>
      <p>J.Desing©{new Date().getFullYear()} Todos los derechos reservados.</p>

    </Footer>
  );
};

export default AppFooter;
