import React, { useContext } from "react";
import { Button, Drawer, List, Avatar } from 'antd';
import { ShoppingCartOutlined, LoadingOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useCart } from '../Context/CartContext';
import { useLocation, useNavigate } from "react-router-dom"; 
import { AuthContext } from '../Context/AuthContext'; 
import './CartDrawer.css';

const CartDrawer = () => {
    const { cart, dispatch } = useCart();
    const { user } = useContext(AuthContext); 
    const [visible, setVisible] = React.useState(false);
    const location = useLocation();
    const navigate = useNavigate(); 
    const allowedRoutes = ['/home', '/', '/entrantes', '/principal', '/postres', '/bebidas'];

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const removeFromCart = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    };

    const incrementQuantity = (id) => {
        dispatch({ type: 'INCREMENT_QUANTITY', payload: { id } });
    };

    const decrementQuantity = (id, quantity) => {
        if (quantity === 1) {
            removeFromCart(id);
        } else {
            dispatch({ type: 'DECREMENT_QUANTITY', payload: { id } });
        }
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    const continueShopping = () => {
        if (user) {
            navigate('/pago'); 
        } else {
            alert("Debes entrar o registrate antes de continuar con el pago");
            navigate('/login'); 
        }
    };

    const isAllowedRoute = allowedRoutes.includes(location.pathname);

    return (
        <>
            {isAllowedRoute && (
                <div className="cart-button-container">
                    <Button type='primary' onClick={showDrawer} className="cart-button">
                        <ShoppingCartOutlined />
                        <span className="cart-count">{cart.length}</span>
                    </Button>
                </div>
            )}
            <Drawer
                title="CARRITO DE COMPRA"
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                {cart.length === 0 ? (
                    <div className="InboxOutlined">
                        <p><LoadingOutlined /></p>
                        <p>No Hay Productos En La Cesta</p>
                    </div>
                ) : (
                    <List
                        dataSource={cart}
                        renderItem={(item) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.image} />}
                                    title={item.name}
                                    description={`Precio: ${item.price} €`}
                                />
                                <div className="quantity-controls">
                                    <Button onClick={() => decrementQuantity(item.id, item.quantity)} icon={<MinusOutlined />} />
                                    <span className="quantity">{item.quantity}</span>
                                    <Button onClick={() => incrementQuantity(item.id)} icon={<PlusOutlined />} />
                                </div>
                                <Button onClick={() => removeFromCart(item.id)}>Eliminar</Button>
                            </List.Item>
                        )}
                    />
                )}
                {cart.length > 0 && (
                    <div className="payment-button-container">
                        <Button className="payment-button" onClick={continueShopping}>
                            Continuar el pago {getTotalPrice()}€
                        </Button>
                    </div>
                )}
            </Drawer>
        </>
    );
};

export default CartDrawer;
