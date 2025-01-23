import React from 'react'

import { Initial } from './components/initial/Initial';
import { About } from './components/about/About';
import { Features } from './components/features/Features';
import { OurTeam } from './components/ourteam/OurTeam';
import { Contacts } from './components/contacts/Contacts';
import { DowEnd } from './components/dowend/DowEnd';
import { Finish } from './components/finish/Finish';

const PaginaInicial = () => {
  return (
      <div className="App">
          <Initial /> {/* Do*/}
          <About /> {/* Fazendo*/}
          <Features /> {/* Fazendo*/}
          <OurTeam /> {/* Do*/}
          <Contacts /> {/* Do*/}
          <DowEnd /> {/* Do*/}
          <Finish /> {/* Do*/}
      </div>
  )
}

export default PaginaInicial
