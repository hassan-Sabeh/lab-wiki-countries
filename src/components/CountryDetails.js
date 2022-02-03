import React from 'react';
import countriesData from '../countries.json';


const CountryDetails = (props) => {
    console.log("details mounted")
    const countryId = props.match.params.countryId;
    const country = countriesData.map(countryObj => {
        if (countryObj.cca2 === countryId) return countryObj
    })
    return (
        <>
            {country.name}
        </>
    ); 
}

export default CountryDetails;