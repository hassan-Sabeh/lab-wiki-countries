import React from 'react';



const CountryDetails = (props) => {
    const countryId = props.match.params.countryId;
    const countriesData = props.data;
    const country = countriesData.filter(countryObj => {
        if (countryObj.cca2 === countryId) {
            return countryObj;
        }
    })
    return (
        <>
            <h1>{country[0].name.official}</h1>
        </>
    ); 
}

export default CountryDetails;