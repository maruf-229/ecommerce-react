import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Common from "./common/Common";
import axios from "axios";


axios.defaults.baseURL='http://localhost:8000/api';

axios.defaults.headers.common['Authorization']='Bearer '+ localStorage.getItem('token')

ReactDOM.render(
  <React.StrictMode>
    <Common />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
