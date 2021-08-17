import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Resume />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
