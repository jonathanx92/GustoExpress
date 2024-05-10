
import React from 'react';
import Home from '../Main/Home';
import FormLogin from '../Login/index';
import FormSignup from '../Signup/index';
import ProductListEntrante from '../Menu/ProductListEntrante';
import ProductListPrincipal from '../Menu/ProductListPrincipal';
import ProductListBebida from '../Menu/ProductListBebida';
import ProductListPostre from '../Menu/ProductListPostre';
import LegalNotice from '../Pages/LegalNotice';
import FormContact from '../Pages/formContact'
import HomeLogin from '../Login/HomeLogin';


export const routesgustoexpress = [
  { path: '/', element: <Home /> },
  { path: '/login', element: <FormLogin /> },
  { path: '/signup', element: <FormSignup /> },
  { path: '/entrantes', element: <ProductListEntrante /> },
  { path: '/principal', element: <ProductListPrincipal /> },
  { path: '/bebidas', element: <ProductListBebida /> },
  { path: '/postres', element: <ProductListPostre /> },
  { path: '/avisolegal', element: <LegalNotice/> },
  { path: '/contacto', element: <FormContact/> },
  { path: '/homelogin', element: <HomeLogin /> },
];


