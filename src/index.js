// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambié la importación
import './index.css';
import App from './App';

// Crea un 'root' para la aplicación en lugar de usar render
const root = ReactDOM.createRoot(document.getElementById('root')); 

// Usa 'root.render' en lugar de 'ReactDOM.render'
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
