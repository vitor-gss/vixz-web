import logo from './logo.svg';
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
      <Initial/>
      <OurTeam/>
      <About/>
      <Features/>
      <Contacts/>
      <DowEnd/>
      <Finish/>
    </div>
  );
}

export default App;
