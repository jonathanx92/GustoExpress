import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'antd';

const CardProductEntrante = ({ key, name, description, price, quantity, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart({ key, name, description, price, quantity 
  });
};

return (
  <Card type="inner" title={name} key={key} style={{ marginBottom: 16, width: 300 }}>
    <p>{description}</p>
    <p>Precio: ${price}</p>
    <Button type="primary" onClick={handleAddToCart}>Añadir al carrito</Button>
  </Card>
);
};

CardProductEntrante.propTypes = {
  key:PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default CardProductEntrante;
