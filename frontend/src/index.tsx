import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Route
} from 'react-router-dom';
import Header from './components/Header';
import ScrollToTopButton from './components/ScrollToTopButton';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route
        path="/how-to-configure-your-domain"
        component={() => {
          window.location.href = 'https://blog.vettodev.com/how-to-configure-your-domain';
          return null;
        }}
      />
      <Route
        path="/how-to-configure-your-own-email"
        component={() => {
          window.location.href = 'https://blog.vettodev.com/how-to-configure-your-own-email';
          return null;
        }}
      />
      <Route
        path="/how-to-create-a-secure-website"
        component={() => {
          window.location.href = 'https://blog.vettodev.com/how-to-create-a-secure-website';
          return null;
        }}
      />
      <Header />
      <ScrollToTopButton />
      <Resume />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
