import React from 'react';
import PropTypes from 'prop-types';
import {AddToCartIcon} from '../Cart/Icons.jsx'
import { Card, Button } from 'antd';

const CardProductPrincipal = ({ key, name, image, description, price, quantity, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart({ key, name,image, description, price, quantity 
  });
};

return (
  <Card type="inner" title={name} key={key} style={{ marginBottom: 16, width: 300 }}>
    <div>
      <img style={{width : '225px', height: '150px', textAling: "center"}} src={image} alt={name} />
      <p>{description}</p>
    </div>
    <div style={{float: "left"}}>
      {price}€
    </div>
    <div style={{float: "right"}}>
      <Button onClick={handleAddToCart}><AddToCartIcon/></Button>
    </div>
  </Card>
);
};

CardProductPrincipal.propTypes = {
  key:PropTypes.number,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number,
  onAddToCart: PropTypes.func.isRequired
};

export default CardProductPrincipal;
