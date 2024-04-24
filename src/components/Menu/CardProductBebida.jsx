import React from 'react';
import PropTypes from 'prop-types';
import { AddToCartIcon } from '../Cart/Icons';
import { Card, Button } from 'antd';

const CardProductBebida = ({ key, name, image, description, price, quantity, onAddToCart }) =>{
  const handleAddToCart = () => {
    onAddToCart({key, name, image, description, price, quantity
    });
  };
  
return(
  <Card type='inner' title={name} key={key} style={{marginBottom:16, width:300}}>
  <div>
    <img style={{width:'200px', height:'200px', textAlign:'center'}} src={image} alt={name} />
    <p>{description}</p>
  </div>
  <div style={{float:'left'}}>{price} €</div>
  <div style={{float:'right'}}>
    <Button onClick={handleAddToCart}><AddToCartIcon/></Button>
  </div>
  </Card>
);
};

CardProductBebida.propTypes = {
  key:PropTypes.number,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number,
  onAddToCart: PropTypes.func.isRequired,
}

export default CardProductBebida;