import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Landing from './components/Landing';
import About from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Landing />
    <About />
  </React.StrictMode>
);


