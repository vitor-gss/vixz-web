import React, { Components } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import About from './components/about/about';

=======
>>>>>>> b3bdd61648367f9acdf60e7fd8466f1548bc783c

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
<<<<<<< HEAD
    <Routes>
    </Routes>
=======
  <App/>
>>>>>>> b3bdd61648367f9acdf60e7fd8466f1548bc783c
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
