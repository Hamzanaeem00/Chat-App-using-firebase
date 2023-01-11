import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { ReactFromModule } from 'mymodule'
// console.log(React === ReactFromModule) // true :)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
