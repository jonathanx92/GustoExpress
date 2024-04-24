import React, { useState } from 'react';
import CardProductPostre from "./CardProductPostre"; 
import ProductItems from "../../products.json";
import { Card, Row, Col } from 'antd';

const ProductListPostre = () => {
    const [cart, setCart] = useState([]);
    
    const addToCart = (product) => {
        setCart([...cart, product]);
      };
    return (
        <div>
            <Card title="Postre" style={{ marginBottom: 16, backgroundColor: 'grey' }}>
                <Row gutter={16}>
                    {ProductItems.filter(product => product.category === 4).map((product) => (
                        <Col span={8} key={product.id}>
                            <CardProductPostre key={product.id} name={product.name} image={product.image} description={product.description} price={product.price} quantity={product.quantity} onAddToCart={addToCart}  />
                        </Col>
                    ))}
                </Row>
            </Card>
        </div>
    );
};


export default ProductListPostre;
