import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import ScrollToTopButton from './components/ScrollToTopButton';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <ScrollToTopButton />
    <Resume />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
