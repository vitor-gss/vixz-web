import './App.css';
import { Initial } from './components/initial/initial';
import { About } from './components/about/about';
import { Features } from './components/features/features';
import { OurTeam } from './components/ourteam/ourTeam';
import { Contacts } from './components/contacts/contacts';
import { DowEnd } from './components/dowend/dowEnd';
import { Finish } from './components/finish/finish';

function App() {
  return (
    <div className="App">
      <Initial/> {/* Do*/}
      <About/> {/* Fazendo*/}
      <Features/> {/* Fazendo*/}
      <OurTeam/> {/* Do*/}
      <Contacts/> {/* Do*/}
      <DowEnd/> {/* Do*/}
      <Finish/> {/* Do*/}
    </div>
  );
}

export default App;
