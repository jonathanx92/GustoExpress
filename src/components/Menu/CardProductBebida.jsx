import React from 'react';
import PropTypes from 'prop-types';
import { AddToCartIcon } from '../Cart/Icons';
import { Card, Button } from 'antd';
import { useCart } from '../Context/CartContext';

const CardProductBebida = ({ id, name, image, description, price, quantity }) =>{
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch ({
      type: 'ADD_TO_CART',
      payload: {id, name, image, description, price, quantity}
    });
  }
  
return(
  <Card type='inner' title={name} id={id} style={{marginBottom:16, width:300}}>
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
  id:PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number,
  onAddToCart: PropTypes.func.isRequired,
}

export default CardProductBebida;