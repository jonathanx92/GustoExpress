import React from 'react';
import '../../App.css';
import ProductListEntrante from '../Menu/ProductListEntrante';
import ProductListPrincipal from '../Menu/ProductListPrincipal';
import ProductListBebida from '../Menu/ProductListBebida';
import ProductListPostre from '../Menu/ProductListPostre';
import ButtonGroup from './ButtonGroup';


const Home = () => {
    return (
        <div className='main-home'>
        <ButtonGroup/>
        <ProductListEntrante />
        <ProductListPrincipal />
        <ProductListBebida />
        <ProductListPostre />
        </div>
    );
};

export default Home;