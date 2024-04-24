import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

const CardProductBebida = (props) => (
  <Card type="inner" title={props.name} style={{ marginBottom: 16, width: 300 }}>
      <p>{props.price}</p>
  </Card>
);

CardProductBebida.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CardProductBebida;
