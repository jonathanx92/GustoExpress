import React from 'react';
import { Input } from "antd";
const { Search } = Input;
import '../../App.css';
import ProductListEntrante from '../Menu/ProductListEntrante';
import ProductListPrincipal from '../Menu/ProductListPrincipal';
import ProductListBebida from '../Menu/ProductListBebida';
import ProductListPostre from '../Menu/ProductListPostre';


const Home = () => {
    return (
        <div className='main-home'>
        <Search className='barrabusqueda' placeholder="¿Qué te apetece hoy? " enterButton="Buscar" size="large"  />
        <ProductListEntrante />
        <ProductListPrincipal />
        <ProductListBebida />
        <ProductListPostre />
        </div>
    );
};

export default Home;