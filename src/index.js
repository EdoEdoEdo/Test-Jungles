import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Global } from './styles/global';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();