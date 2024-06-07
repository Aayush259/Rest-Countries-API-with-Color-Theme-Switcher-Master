import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../context/Context.jsx';
import CountryCard from './CountryCard.jsx';
import Search from './Search.jsx';

export default function RegionFilteredCountry() {

    // Getting countryData from Context.
    const { theme, countryData, loader } = useContext(Context);

    // Value to be returned.
    let returnValue = null;

    // Getting region from URL.
    const { region } = useParams();

    // If countryData is present in context, then display cards by filtering them according to regions. Else display loader.
    if (countryData) {
        // Copy of countryData.
        const copyCountryData = countryData;

        // Filtering countries on the basis of region.
        const filteredCountries = copyCountryData.filter((country) => country['region'] === region);

        // Updating returnValue.
        returnValue = (
            <div id="countryCardContainer">
                {filteredCountries ? filteredCountries.map((country) => {
                    return <CountryCard key={country.name.common} countryName={country.name.common} countryCapital={country["capital"]} countryRegion={country["region"]} countryPopulation={country["population"]} countryFlag={country["flags"]["svg"]} countryFlagAlt={country["flags"]["alt"]} theme={theme} />
                }) : loader}
            </div>
        );
    } else {
        returnValue = loader;
    }

    return (
        <>
        <Search theme={theme} />
        {returnValue}
        </>
    )
};