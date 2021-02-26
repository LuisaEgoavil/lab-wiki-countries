import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import axios from 'axios'
import CountryDetails from './CountryDetails'


class CountriesList extends Component {

    state = {
        countries: []
      }
    
      componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
          .then((response)=> {
              this.setState({
                countries: response.data,
               
              })
              //console.log(response.data)
          })
          .catch(()=> {
            console.log('Error while getting the countries')
          })
      }


    render() {

        const {countries} = this.state      

        return (

                <div className="columns">
                <div className="column">

                {
                    countries.map((country, lupita)=> {
                        return <div key={lupita}>
                            <Link to={`/countries/${country.cca3}`}>{country.name} {country.name}</Link>
                        </div>
                    })
                }
            

            <div>
                <CountryDetails />
            </div>
            </div>
            </div>
        )
    }
}

export default CountriesList