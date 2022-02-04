import React from 'react';
import {Link} from 'react-router-dom';
import countriesData from '../countries.json';

const CountriesList = () => {
    return (
        <>List of countries:
            <div className="countries-list">
                {countriesData.map(countryObj => {
                    return (
                        <>
                            <div key={countryObj.cca2}></div>
                            <Link to={`/${countryObj.cca2}`}>{countryObj.name.common}</Link>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default CountriesList;