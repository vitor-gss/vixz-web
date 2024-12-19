import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PaginaInicial from './components/paginaInicial/PaginaInicial'
import Login from './components/login/Login'

function App() {
  return (
    <Routes>
      <Route path='/' element={<PaginaInicial/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  );
}

export default App;
