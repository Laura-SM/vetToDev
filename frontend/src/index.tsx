import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header';
import Resume from './components/Resume';
import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Resume />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
