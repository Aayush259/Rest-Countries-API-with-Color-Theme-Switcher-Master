import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../context/Context.jsx';
import CountryCard from './CountryCard.jsx';
import Search from './Search.jsx';

export default function RegionFilteredCountry() {

    // Getting countryData from Context.
    const { theme, countryData } = useContext(Context);

    // Loader
    const loader = (
        <div id="loaderContainer" className="flex">
            <div id="loader"></div>
        </div>
    );

    let returnValue;

    if (countryData) {
        const copyCountryData = countryData;

        // Getting region from URL.
        const { region } = useParams();
    
        const filteredCountries = copyCountryData.filter((country) => country['region'] === region);

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