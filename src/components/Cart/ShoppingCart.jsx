import React, { useState, useEffect } from 'react';
import { Divider, Space } from 'antd';
import productsData from '../../categories.json';
import CardProductEntrante from '../Menu/CardProductEntrante';

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={{ padding: '20px' }}>
      <Divider orientation="left">Productos</Divider>
      <Space wrap>
        {products.map(product => (
          <CardProductEntrante
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            onAddToCart={addToCart} 
          />
        ))}
      </Space>

      <Divider orientation="left">Carrito</Divider>
      <Space direction="vertical">
        {cart.map(item => (
          <div key={item.name} style={{ padding: '10px', border: '1px solid #ccc' }}>
            <p>{item.name}</p>
            <p>Precio: ${item.price}</p>
          </div>
        ))}
      </Space>

      <Divider />
      <div style={{ textAlign: 'right' }}>
        Total: ${total.toFixed(2)}
      </div>
    </div>
  );
};

export default ShoppingCart;
