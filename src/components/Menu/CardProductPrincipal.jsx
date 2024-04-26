import React from 'react';
import { useCart } from '../Cart/CartContext.jsx';
import PropTypes from 'prop-types';
import { AddToCartIcon } from '../Cart/Icons.jsx';
import { Card, Button } from 'antd';

const CardProductPrincipal = ({ id, name, image, description, price, quantity }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { id, name, image, description, price, quantity }
    });
  }

  return (
    <Card type="inner" title={name} key={id} style={{ marginBottom: 16, width: 300 }}>
      <div>
        <img style={{ width: '225px', height: '150px', textAlign: "center" }} src={image} alt={name} />
        <p>{description}</p>
      </div>
      <div style={{ float: "left" }}>
        {price}€
      </div>
      <div style={{ float: "right" }}>
        <Button onClick={handleAddToCart}><AddToCartIcon /></Button>
      </div>
    </Card>
  );
};

CardProductPrincipal.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CardProductPrincipal;
