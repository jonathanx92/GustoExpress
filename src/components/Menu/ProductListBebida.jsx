import React from 'react';
import CardProductBebida from "./CardProductBebida"; 
import ProductItems from "../../products.json";
import { Card, Row, Col } from 'antd';
import { useCart } from '../Context/CartContext';

const ProductListBebida = () => {
    const {dispatch} = useCart([]);
    
    const addToCart = (product) => {
        dispatch({type: 'ADD_TO_CART', payload: product});
      };
    return (
        <div id="bebida">
            <Card title="Bebida"  style={{ marginBottom: 16, backgroundColor: 'grey', textAlign:'center'}}>
                <Row gutter={16}>
                    {ProductItems.filter(product => product.category === 3).map((product) => (
                        <Col span={8} key={product.id}>
                            <CardProductBebida id={product.id} name={product.name} image={product.image} description={product.description} price={product.price} quantity={product.quantity} onAddToCart={addToCart}  />
                        </Col>
                    ))}
                </Row>
            </Card>
        </div>
    );
};


export default ProductListBebida;
