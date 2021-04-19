
import { NavLink, Switch } from 'react-router-dom';
import './App.css';
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
        <Route path="/contacts" component={Contackts} />
        <Route path="/catologs" component={Catolog}/>
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
