import logo from './logo.svg';
import './App.css';
import { About } from './components/about/about';
import { Features } from './components/features/features';
import { OurTeam } from './components/ourteam/ourTeam';
import { Contacts } from './components/contacts/contacts';

function App() {
  return (
    <div className="App">
      <OurTeam/>
      <About/>
      <Features/>
      <Contacts/>
    </div>
  );
}

export default App;
