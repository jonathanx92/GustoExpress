/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routesgustoexpress } from './components/Config/Routesgusto';
import Layout from './components/Layout/Index';
import { CartProvider } from './components/Context/CartContext';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import FirebaseApp from './components/Firebase/FirebaseConfig'; 

function App() {
  const auth = getAuth(FirebaseApp);

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
