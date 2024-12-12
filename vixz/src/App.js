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

      <Switch>
        <Route path="/" components={Initial} exact />
        <Route path="/about" components={About} />
        <Route path="/features" components={Features} />
        <Route component={Error} />
      </Switch>
    </main>
  );
}

export default App;
