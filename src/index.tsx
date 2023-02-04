import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ValueState } from './context/InputContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ValueState>
   <BrowserRouter>
    <App />
   </BrowserRouter>
  </ValueState>
);


