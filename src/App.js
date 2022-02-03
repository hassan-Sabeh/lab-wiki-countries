import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom";
import NavBar from './components/Navbar.js';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' component={CountriesList}/>
        <Route path='/:countryId' component={CountryDetails}/>
      </Switch>
    </div>
  );
}

export default App;
