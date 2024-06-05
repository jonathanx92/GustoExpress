import React from 'react';
import CardProductEntrante from "./CardProductEntrante"; 
import ProductItems from "../../products.json";
import { Card, Row, Col } from 'antd';
import { useCart } from '../Context/CartContext';

const ProductListEntrante = () => {
    const { dispatch } = useCart([]);
    
    const addToCart = (product) => {
        dispatch({type: 'ADD_TO_CART', payload: product});
    };

    return (
        <div id="entrante">
            <Card title="ENTRANTES" style={{ marginBottom: 16, backgroundColor: '#EAEAEA', textAlign:'center' }}>
                <Row gutter={[16, 16]}>
                    {ProductItems.filter(product => product.category === 1).map((product) => (
                        <Col xs={24} sm={12} md={8} lg={8} xl={8} key={product.id}>
                            <CardProductEntrante id={product.id} name={product.name} image={product.image} description={product.description} price={product.price} quantity={product.quantity} onAddToCart={addToCart} />
                        </Col>
                    ))}
                </Row>
            </Card>
        </div>
    );
};

export default ProductListEntrante;
