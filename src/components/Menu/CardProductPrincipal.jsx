import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

const CardProductPrincipal = (props) => (
  <Card type="inner" title={props.name} style={{ marginBottom: 16, width: 300 }}>
      <p>{props.description}</p>
      <p>{props.price}</p>
  </Card>
);

CardProductPrincipal.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};


export default CardProductPrincipal;


