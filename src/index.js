import React from 'react';
import ReactDOM from 'react-dom/client';
import{CartProvider} from 'react-use-cart';

//import '@fortawesome/free-solid-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import {BrowserRouter} from 'react-router-dom';
import { AuthenticationProvider} from './Components/context/Authentication';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
    <AuthenticationProvider>
    <App />
    </AuthenticationProvider>
    </CartProvider>
    
  </React.StrictMode>
);


