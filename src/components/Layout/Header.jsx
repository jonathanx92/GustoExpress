import React, { useContext } from 'react';
import { Layout, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom'; 
import logo from './gustoexpress.jpeg';
import '../../App.css';
import CartDrawer from '../Cart/CartDrawer';
import { AuthContext } from '../Context/AuthContext';
import { signOut, getAuth } from 'firebase/auth';
import { useCart } from '../Context/CartContext';
import FirebaseApp from '../Firebase/FirebaseConfig';

const { Header } = Layout;

const AppHeader = () => {
  const { user } = useContext(AuthContext);
  const { dispatch } = useCart();
  const navigate = useNavigate(); 

  const handleSignOut = async () => {
    try {
      const auth = getAuth(FirebaseApp); 
      await signOut(auth);
      dispatch({ type: 'CLEAR_CART' });
      navigate('/'); 
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <Header className='custom-header'>
      <div>
        <Link to="/home">
          <img src={logo} alt="logo" style={{borderRadius:"2vh", marginLeft:'3vh', height:'7vh', width:'7vh' }}/>
        </Link>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%' }}>
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
            <div style={{ fontSize: '18px', marginRight: '10px' }}>
              {user.displayName || user.name}
            </div>
            <Button type="primary" onClick={handleSignOut}>Salir</Button>
          </div>
        ) : (
          <Link to="/login" style={{fontSize:'20px'}}>Login</Link>
        )}
        <div style={{ fontSize: '24px', marginLeft: '20px' }}>
          <CartDrawer/>
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
