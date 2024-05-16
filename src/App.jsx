import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Index';
import { CartProvider } from './components/Context/CartContext';
import { AuthProvider } from './components/Context/AuthContext';
import { routesgustoexpress } from './components/Config/Routesgusto';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Layout>
            <Routes>
              {routesgustoexpress.map((route) => (
                <Route key={route.path} {...route} />
              ))}
            </Routes>
          </Layout>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
