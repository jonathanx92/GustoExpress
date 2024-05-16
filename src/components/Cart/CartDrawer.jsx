import React from "react";
import { Button, Drawer, List, Avatar } from 'antd';
import { ShoppingCartOutlined, LoadingOutlined, MinusOutlined, PlusOutlined  } from '@ant-design/icons';
import { useCart } from '../Context/CartContext';
import { useLocation } from "react-router-dom";
import './CartDrawer.css'

const CartDrawer = () => {
    const { cart, dispatch } = useCart();
    const [visible, setVisible] = React.useState(false);
    const location = useLocation(); // Obtener la ubicación actual
    const allowedRoutes = ['/home', '/', '/entrantes', '/principal', '/postres', '/bebidas', '/']; // Rutas permitidas para mostrar el botón del carrito

    // Función para mostrar el cajón del carrito
    const showDrawer = () => {
        setVisible(true);
    };

    // Función para cerrar el cajón del carrito
    const onClose = () => {
        setVisible(false);
    };

    // Función para eliminar un producto del carrito
    const removeFromCart = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    };

    // Función para incrementar la cantidad de un producto en el carrito
    const incrementQuantity = (id) => {
        dispatch({ type: 'INCREMENT_QUANTITY', payload: {id} })
    };

    // Función para decrementar la cantidad de un producto en el carrito
    const decrementQuantity = (id, quantity) =>{
        if (quantity === 1){
            removeFromCart(id);
        } else { 
            dispatch({type: 'DECREMENT_QUANTITY', payload : {id}})
        }
    };

    // Función para obtener el precio total del carrito
    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    // Función para continuar con el proceso de pago
    const continueShopping = () => {
        // Método de pago stripe
    };

    // Verificar si la ubicación actual está permitida para mostrar el botón del carrito
    const isAllowedRoute = allowedRoutes.includes(location.pathname);

    return (
        <>
            {/* Mostrar el botón del carrito solo en las rutas permitidas */}
            {isAllowedRoute && (
                <div className="cart-button-container">
                    <Button type='primary' onClick={showDrawer} className="cart-button">
                        <ShoppingCartOutlined />
                        <span className="cart-count">{cart.length}</span>
                    </Button>
                </div>
            )}
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
                                    <Button onClick={() =>decrementQuantity(item.id, item.quantity)} icon={<MinusOutlined/>}/>
                                        <span className="quantity">{item.quantity}</span>
                                    <Button onClick={() =>incrementQuantity(item.id)} icon={<PlusOutlined/>}/>
                                </div>
                                <Button onClick={() => removeFromCart(item.id)}>Eliminar</Button>
                            </List.Item>
                        )}
                    />
                )}
                { cart.length > 0 && (
                    <div className="payment-button-container">
                        <Button className="payment-button" onClick={continueShopping} >Continuar con la compra {getTotalPrice()}€</Button>
                    </div>
                )}
            </Drawer>
        </>
    );
};

export default CartDrawer;
