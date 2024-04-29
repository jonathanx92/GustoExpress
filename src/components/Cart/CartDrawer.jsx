import React, { useState } from "react";
import { useCart } from '../Context/CartContext.jsx';
import { Drawer, Button, List, Avatar } from 'antd';
import { ShoppingCartOutlined, LoadingOutlined, MinusOutlined, PlusOutlined  } from '@ant-design/icons';
import './CartDrawer.css';

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

    const incrementQuantity = (id) => {
        dispatch({ type: 'INCREMENT_QUANTITY', payload: {id} })
    };

    const decrementQuantity = (id) =>{
        dispatch({type: 'DECREMENT_QUANTITY', payload : {id}})
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
                        renderItem={(item) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.image} />}
                                    title={item.name}
                                    description={`Precio: ${item.price} €`}
                                />
                                <div className="quantity-controls">
                                    <Button onClick={() =>decrementQuantity(item.id)} icon={<MinusOutlined/>}/>
                                    <span className="quantity">{item.quantity}</span>
                                    <Button onClick={() =>incrementQuantity(item.id)} icon={<PlusOutlined/>}/>
                                </div>
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
