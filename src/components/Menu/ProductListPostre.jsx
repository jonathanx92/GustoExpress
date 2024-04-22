import React from 'react';
import CardProductPostres from "./CardProductPostre"; 
import ProductItems from "../../products.json";
import { Card, Row, Col } from 'antd';

const ProductListPostre = () => {
    return (
        <div>
            <Card title="Postre" style={{ marginBottom: 16, backgroundColor: 'grey' }}>
                <Row gutter={16}>
                    {ProductItems.filter(product => product.category === 3).map((product) => (
                        <Col span={8} key={product.id}>
                            <CardProductPostres name={product.name} description={product.description} price={product.price} />
                        </Col>
                    ))}
                </Row>
            </Card>
        </div>
    );
};


export default ProductListPostre;
