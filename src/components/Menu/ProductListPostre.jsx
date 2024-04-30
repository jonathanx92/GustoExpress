import React from 'react';
import CardProductPostre from "./CardProductPostre"; 
import ProductItems from "../../products.json";
import { Card, Row, Col } from 'antd';
import { useCart } from '../Context/CartContext';

const ProductListPostre = () => {
    const {dispatch} = useCart([]);
    
    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product});
      };
    return (
        <div>
            <Card title="Postre" style={{ marginBottom: 16, backgroundColor: 'grey' }}>
                <Row gutter={16}>
                    {ProductItems.filter(product => product.category === 4).map((product) => (
                        <Col span={8} key={product.id}>
                            <CardProductPostre id={product.id} name={product.name} image={product.image} description={product.description} price={product.price} quantity={product.quantity} onAddToCart={addToCart}  />
                        </Col>
                    ))}
                </Row>
            </Card>
        </div>
    );
};


export default ProductListPostre;
