import React, { Component } from 'react'
//import {Route} from 'react-router-dom'
import axios from 'axios'

class CountryDetails extends Component {

    state = {
        country: {}
    }

    getCountry = () => {
        let countryid = this.props.match.params.countryId
        axios.get(`https://restcountries.eu/rest/v2/name/${countryid}`)
            .then((response)=> {
                let country = {
                    countryid: countryid,
                    capital: response.data.capital,
                    area: response.data.area,
                    borders: response.data.borders
                }
            this.setState({
                country: country
            })
            })
    }

    componentDidMount(){
        this.getCountry()
    }

    componentDidUpdate(){
        let countryid = this.props.match.params.countryId
        if(this.state.country.countryid !== countryid){
            this.getCountry()
        }
    }




    render() {

        //destructure
        const {country: {name, capital, area, borders}} = this.state
        return (
            <div className="column">
                <h1>{name}</h1>
                <p>Capital {capital}</p>
                <p>Area {area} km</p>
                <p>Borders</p>
                <ul>
                    <li>{borders}</li>
                </ul>
                {/* <Route path='country/:countryId' component={CountryDetails}/> */}
            </div>
        )
    }
}

export default CountryDetails