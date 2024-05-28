import React from 'react';
import { useCart } from '../Context/CartContext.jsx';
import PropTypes from 'prop-types';
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
    <Card type="inner" title={name} id={id} style={{ marginBottom: '2vh', width: '40vh', height:'52vh', backgroundColor:'#FFFFFF '}}>
      <div>
        <img style={{ width : '33vh', height: '23vh', marginBottom:'1vh'}} src={image} alt={name} />
        <p>{description}</p>
      </div>
      <div style={{ float: "left" }}>
        {price}€
      </div>
      <div style={{ float: "right" }}>
        <Button style={{ backgroundColor:'#007bff', color:'#FFFFFF'}} onClick={handleAddToCart}>Añadir al carrito</Button>
      </div>
    </Card>
  );
};

CardProductPrincipal.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CardProductPrincipal;
