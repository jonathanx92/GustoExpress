import React, { useState } from 'react';
import CardProductBebida from "./CardProductBebida"; 
import ProductItems from "../../products.json";
import { Card, Row, Col } from 'antd';

const ProductListBebida = () => {
    const [cart, setCart] = useState([]);
    
    const addToCart = (product) => {
        setCart([...cart, product]);
      };
    return (
        <div>
            <Card title="Bebida" style={{ marginBottom: 16, backgroundColor: 'grey'}}>
                <Row gutter={16}>
                    {ProductItems.filter(product => product.category === 3).map((product) => (
                        <Col span={8} key={product.id}>
                            <CardProductBebida key={product.id} name={product.name} image={product.image} description={product.description} price={product.price} quantity={product.quantity} onAddToCart={addToCart}  />
                        </Col>
                    ))}
                </Row>
            </Card>
        </div>
    );
};


export default ProductListBebida;
