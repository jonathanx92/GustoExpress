import React from 'react';
import { useCart } from '../Context/CartContext.jsx';
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
    <Card type="inner" title={name} id={id} style={{ marginBottom: '2vh', width: '40vh', height:'50vh'}}>
      <div>
        <img style={{ width : '33vh', height: '23vh', marginBottom:'1vh'}} src={image} alt={name} />
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
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CardProductPrincipal;
