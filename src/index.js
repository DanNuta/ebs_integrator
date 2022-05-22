import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProductsContent from "./context/productsContext"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductsContent>
    <App />
  </ProductsContent>
  
);


