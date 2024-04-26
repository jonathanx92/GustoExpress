import React from "react";
import { useState } from "react";
import { useCart } from './CartContext.jsx';
import { Drawer, Button, List, Avatar } from 'antd';
import { ShoppingCartOutlined, LoadingOutlined } from '@ant-design/icons';
import './CartDrawer.css'; // Archivo CSS para estilos personalizados

const CartDrawer = () => {
    const { cart, dispatch } = useCart();
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const removeFromCart = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    return (
        <>
            <div className="cart-button-container">
                <Button type='primary' onClick={showDrawer} className="cart-button">
                    <ShoppingCartOutlined />
                    <span className="cart-count">{cart.length}</span>
                </Button>
            </div>
            <Drawer
                title="Carrito de Compra"
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                {cart.length === 0 ? (
                    <div className="InboxOutlined">
                        <p><LoadingOutlined/></p>
                        <p>No Hay Productos En La Cesta</p>
                    </div>
                    
                ) : (
                    <List
                        dataSource={cart}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.image} />}
                                    title={item.name}
                                    description={`Precio: ${item.price} | Cantidad: ${item.quantity}`}
                                />
                                <Button onClick={() => removeFromCart(item.id)}>Eliminar</Button>
                            </List.Item>
                        )}
                    />
                )}
                <Button onClick={clearCart}>Vaciar Carrito</Button>
            </Drawer>
        </>
    );
};

export default CartDrawer;
