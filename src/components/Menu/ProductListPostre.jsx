import React from 'react';
import CardProductPostre from "./CardProductPostre"; 
import ProductItems from "../../products.json";
import { Card, Row, Col } from 'antd';
import { useCart } from '../Context/CartContext';
import './menu_products.css';

const ProductListPostre = () => {
    const { dispatch } = useCart([]);
    
    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    return (
        <div id="postres" className="product-list">
            <Card title="Postre" className="product-list">
                <Row gutter={[16,16]}>
                    {ProductItems.filter(product => product.category === 4).map((product) => (
                        <Col xs={24} sm={12} md={8} lg={8} xl={8} key={product.id} className="product-col">
                            <CardProductPostre 
                                id={product.id} 
                                name={product.name} 
                                image={product.image} 
                                description={product.description} 
                                price={product.price} 
                                quantity={product.quantity} 
                                onAddToCart={addToCart}  
                            />
                        </Col>
                    ))}
                </Row>
            </Card>
        </div>
    );
};

export default ProductListPostre;
