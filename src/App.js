import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom";
import NavBar from './components/Navbar.js';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import React from 'react';
import countriesdata from './countries.json';

class App extends React.Component {
  state = {
    countries: ""
  }

  componentDidMount = () => {
    this.setState({
      countries: countriesdata
    })
  }

  render(){
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={CountriesList}/>
          <Route path='/:countryId' render={(props) => <CountryDetails {...props} data={this.state.countries} />}/>
        </Switch>
      </div>
    );
  }
}

export default App;
