import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routesgustoexpress } from './components/Config/Routesgusto';
import Layout from './components/Layout/Index'; 

function App() {
  return (
    <Layout>
      <BrowserRouter>
          <Routes>
            {routesgustoexpress.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Routes>
      </BrowserRouter>
    </Layout> 
  );
}

export default App;
