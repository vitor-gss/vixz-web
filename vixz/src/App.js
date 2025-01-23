import './App.css';
import React from 'react';
import { ReactDOM } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Switch } from 'react-router-dom';

import { Initial } from './components/initial/initial';
import { About } from './components/about/about';
import { Features } from './components/features/features';
import { OurTeam } from './components/ourteam/ourTeam';
import { Contacts } from './components/contacts/contacts';
import { DowEnd } from './components/dowend/dowEnd';
import { Finish } from './components/finish/finish';

function App() {
  return (
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
  );
}

export default App;
