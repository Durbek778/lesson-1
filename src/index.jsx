import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cart from './cart';
import reportWebVitals from './reportWebVitals';
import home1 from './images/home-image-1.jpg'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{display:"flex",justifyContent:"space-evenly"}}><Cart home={home1} />
    <Cart home={home1} />
    <Cart home={home1} /></div>
    
   
  </React.StrictMode>
);


reportWebVitals();
