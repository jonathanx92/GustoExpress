import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'antd';
import { useCart } from '../Context/CartContext';
import './menu_products.css';

const CardProductPostre = ({ id, name, image, description, price, quantity }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { id, name, image, description, price, quantity }
    });
  };

  return (
    <Card type="inner" title={name} id={id} className="card-product">
      <div className="image-container">
        <img className="product-image" src={image} alt={name} />
        <p className="product-description">{description}</p>
      </div>
      <div className="product-info">
        <div className="product-price">{price}€</div>
        <Button className="add-to-cart-button" onClick={handleAddToCart}>Añadir al carrito</Button>
      </div>
    </Card>
  );
};

CardProductPostre.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number,
};

export default CardProductPostre;
