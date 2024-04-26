import React from 'react';
import PropTypes from 'prop-types';
import {AddToCartIcon} from '../Cart/Icons.jsx'
import { Card, Button } from 'antd';

const CardProductEntrante = ({ id, name, image, description, price, quantity, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart({ id, name,image, description, price, quantity 
  });
};

return (
  <Card type="inner" title={name} key={id} style={{ marginBottom: 16, width: 300 }}>
    <div>
      <img style={{width : '200px', height: '200px', textAling: "center"}} src={image} alt={name} />
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

CardProductEntrante.propTypes = {
  id:PropTypes.number,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number,
  onAddToCart: PropTypes.func.isRequired
};

export default CardProductEntrante;
