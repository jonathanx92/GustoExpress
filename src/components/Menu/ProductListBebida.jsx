import React from 'react';
import CardProductBebida from "./CardProductBebida"; 
import ProductItems from "../../products.json";
import { Card, Row, Col } from 'antd';

const ProductListBebida = () => {
    return (
        <div>
            <Card title="Bebida" style={{ marginBottom: 16, backgroundColor: 'grey' }}>
                <Row gutter={16}>
                    {ProductItems.filter(product => product.category === 3).map((product) => (
                        <Col span={8} key={product.id}>
                            <CardProductBebida name={product.name} price={product.price} />
                        </Col>
                    ))}
                </Row>
            </Card>
        </div>
    );
};


export default ProductListBebida;
