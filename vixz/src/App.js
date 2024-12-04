import './App.css';
import { About } from './components/about/about';
import { Features } from './components/features/features';
import {Navbar} from './components/navbar/navbar'

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <About/>
      <Features/>
    </div>
  );
}

export default App;
