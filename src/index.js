import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import BillContext from './context/BillContext';

ReactDOM.render(
  <BrowserRouter>
    <BillContext>
      <App />
    </BillContext>
  </BrowserRouter>,
  document.getElementById('root'),
);
