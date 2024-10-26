import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App1 from './Component/App1';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.json';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './Component/CollectCart/CartDetails';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <CartProvider>
     <App1 />
   </CartProvider>
   </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
