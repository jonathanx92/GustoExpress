
import React from 'react';
import Home from '../Main/Home';
import LoginSignupForm from '../Login/index';
import ProductListEntrante from '../Menu/ProductListEntrante';
import ProductListPrincipal from '../Menu/ProductListPrincipal';
import ProductListBebida from '../Menu/ProductListBebida';
import ProductListPostre from '../Menu/ProductListPostre';
import LegalNotice from '../Pages/LegalNotice';
import FormContact from '../Pages/formContact';
import AppStripe from '../Stripe/index';

export const routesgustoexpress = [
  { path: '/', element: <Home /> },
  { path: '/home', element: <Home /> },
  { path: '/login', element: <LoginSignupForm /> },
  { path: '/entrantes', element: <ProductListEntrante /> },
  { path: '/principal', element: <ProductListPrincipal /> },
  { path: '/bebidas', element: <ProductListBebida /> },
  { path: '/postres', element: <ProductListPostre /> },
  { path: '/avisolegal', element: <LegalNotice/> },
  { path: '/contacto', element: <FormContact/> },
  { path: '/pago', element: <AppStripe/> },
];


