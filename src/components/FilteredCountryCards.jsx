import React, { useContext } from 'react';
import CountryCard from './CountryCard.jsx';
import { FilteredCountries } from '../context/FilteredCountriesContext.jsx';

export default function FilteredCountryCards() {

    // Getting countries data from FilteredCountries context.
    const { displayData } = useContext(FilteredCountries);

    return (
        <div id='countryCardContainer'>
            {displayData ? displayData.map((country) => {
                return <CountryCard key={country.name.common} countryName={country.name.common} countryCapital={country['capital']} countryRegion={country['region']} countryPopulation={country['population']} countryFlag={country['flags']['svg']} countryFlagAlt={country['flags']['alt']} />
            }) : null}
        </div>
    );
};
