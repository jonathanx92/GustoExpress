import React, { useState } from 'react';
import CardProductEntrante from "./CardProductEntrante"; 
import ProductItems from "../../products.json";
import { Card, Row, Col } from 'antd';

const ProductListEntrante = () => {
    const [cart, setCart] = useState([]);
    
    const addToCart = (product) => {
        setCart([...cart, product]);
      };
    return (
        <div>
            <Card title="Entrante" style={{ marginBottom: 16, backgroundColor: 'grey' }}>
                <Row gutter={16}>
                    {ProductItems.filter(product => product.category === 1).map((product) => (
                        <Col span={8} key={product.id}>
                            <CardProductEntrante name={product.name} description={product.description} price={product.price} onAddToCart={addToCart}  />
                        </Col>
                    ))}
                </Row>
            </Card>
        </div>
    );
};


export default ProductListEntrante;
