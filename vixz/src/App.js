import logo from './logo.svg';
import './App.css';
import { About } from './components/main/about';
import { Features } from './components/main/features';
import { OurTeam } from './components/main/ourTeam';
import { Contacts } from './components/main/contacts';

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
