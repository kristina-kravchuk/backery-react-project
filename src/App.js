import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link

} from "react-router-dom";
import { Accordion } from './Accordion/Accordion';
import './App.css';
import { Home } from './Home';
import { About } from './About';
import { Menu } from "./Menu";


function App() {
  return (
    <Router>
      <nav>
      <Link to="/home" className="link">Home</Link>
        <Link to="/about" className="link">About</Link>
        <Link to="/menu" className="link">Menu</Link>
        <Link to="/accordion"className="link">FAQ</Link>
      </nav>

      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home/*" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/accordion" element={<Accordion/>}/>
      </Routes>
    </Router>
  );
}

export default App;
