import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routesgustoexpress } from './components/Config/Routesgusto';
import Layout from './components/Layout/Index';
import { CartProvider } from './components/Context/CartContext';

function App() {
  return (
      <CartProvider>
        <Layout>
          <BrowserRouter>
            <Routes>
              {routesgustoexpress.map((route) => (
                <Route key={route} {...route} />
              ))}
            </Routes>
          </BrowserRouter>
        </Layout>
      </CartProvider>
  );
}

export default App;
