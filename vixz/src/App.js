import './App.css';
import React from 'react';
<<<<<<< HEAD
import { ReactDOM } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Switch } from 'react-router-dom';
=======
import { Routes, Route } from 'react-router-dom';
>>>>>>> b3bdd61648367f9acdf60e7fd8466f1548bc783c

import PaginaInicial from './components/paginaInicial/PaginaInicial'
import Login from './components/login/Login'

function App() {
  return (
<<<<<<< HEAD
    <main>
      <div className="App">
          <Initial /> {/* Do*/}
          <About /> {/* Fazendo*/}
          <Features /> {/* Fazendo*/}
          <OurTeam /> {/* Do*/}
          <Contacts /> {/* Do*/}
          <DowEnd /> {/* Do*/}
          <Finish /> {/* Do*/}
      </div>

      <>
    <Navbar>
      
        <Route path="/" components={Initial} exact />
        <Route path="/about" components={About} />
        <Route path="/features" components={Features} />
        <Route path="/ourteam" components={OurTeam} />
        <Route path="/contacts" components={Contacts} />
        <Route path="/dowend" components={DowEnd} />
        <Route component={Error} />
      
    </Navbar>
  </>
    </main>
=======
    <Routes>
      <Route path='/' element={<PaginaInicial/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
>>>>>>> b3bdd61648367f9acdf60e7fd8466f1548bc783c
  );
}

export default App;
