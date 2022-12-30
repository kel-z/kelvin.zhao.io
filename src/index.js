import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Landing from './components/Landing';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Landing />
    <About />
    <Experience />
    <Projects />
    <Footer />
  </React.StrictMode>
);


