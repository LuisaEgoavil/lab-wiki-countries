import React, { Component } from 'react'
//import axios from 'axios'
//import {Route, Switch} from 'react-router-dom'
import './App.css';
import {Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import  CountryDetails from './components/CountryDetails'

class App extends Component {

  render() {

    return (
      <div>
        <Navbar />
        <CountriesList />
        <div className="column">
          <Route path='country/:countryId' component={CountryDetails}/>
        </div>
      </div>
    
    )
  }
}

export default App