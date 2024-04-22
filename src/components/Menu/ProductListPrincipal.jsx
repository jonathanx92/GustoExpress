import React,{ useState } from 'react';
import CardProductPrincipal from "./CardProductPrincipal"; 
import ProductItems from "../../products.json";
import { Card, Row, Col } from 'antd';


const ProductListPrincipal = () => {
    const [cart, setCart] = useState([]);
    
    const addToCart = (product) => {
        setCart([...cart, product]);
      };
    return (
        <div>
            <Card title="Principal" style={{ marginBottom: 16, backgroundColor: 'grey' }}>
                <Row gutter={16}>
                    {ProductItems.filter(product => product.category === 1).map((product) => (
                        <Col span={8} key={product.id}>
                            <CardProductPrincipal name={product.name} description={product.description} price={product.price} onAddToCart={addToCart}  />
                        </Col>
                    ))}
                </Row>
            </Card>
        </div>
    );
};


export default ProductListPrincipal;
