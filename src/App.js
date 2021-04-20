
import { NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Catolog from './component/Catolog/Catolog';
import Contakts from './component/Contakts/Contakts';
import Home from './component/Home/Home';
import fon from "./component/Imgs/logo.svg"
function App() {
  const activeLInk = {
    fontWeight: "bold",
  }
  return (
    <div className="App">
      <ul>
        <NavLink to="/"><img src={fon} alt={"Estel"} width="100px" height="100px" /></NavLink>
        <li><NavLink activeStyle={activeLInk} exact to="/home">Home</NavLink></li>
        <li><NavLink activeStyle={activeLInk} to="/about">About</NavLink></li>
        <li><NavLink activeStyle={activeLInk} to="/contact">Contackts</NavLink></li>
        <li><NavLink activeStyle={activeLInk} to="catologs">Catologs</NavLink></li>
      </ul>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/contacts" component={Contakts} />
        <Route path="/catologs" component={Catolog} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
