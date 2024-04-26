import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routesgustoexpress } from './components/Config/Routesgusto';
import Layout from './components/Layout/Index';
import { CartProvider } from './components/Cart/CartContext';

function App() {
  return (
    <CartProvider>
    <Layout>
      <BrowserRouter>
          <Routes>
            {routesgustoexpress.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Routes>
      </BrowserRouter>
    </Layout> 
    </CartProvider>
  );
}

export default App;
