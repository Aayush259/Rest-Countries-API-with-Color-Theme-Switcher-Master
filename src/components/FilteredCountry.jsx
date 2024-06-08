import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../context/Context.jsx';
import CountryCard from './CountryCard.jsx';
import Search from './Search.jsx';

export default function FilteredCountry() {

    // Getting countryData from Context.
    const { theme, countryData, loader } = useContext(Context);

    // Value to be returned.
    let returnValue = loader;

    // Getting region from URL.
    const { region, keyword } = useParams();

    // If countryData is present in context, then display cards by filtering them according to regions. Else display loader.
    if (countryData) {
        // Copy of countryData.
        const copyCountryData = countryData;

        let filteredCountries;

        if (region && keyword) {

            // Filtering countries on the basis of region.
            filteredCountries = copyCountryData.filter((country) => country['region'] === region);

            // Filtering countries on the basis of keyword.
            filteredCountries = filteredCountries.filter((country) => country.name.common.toLowerCase().startsWith(keyword.toLowerCase()));
    
            // Updating returnValue.
            returnValue = (
                <div id='countryCardContainer'>
                    {filteredCountries ? filteredCountries.map((country) => {
                        return <CountryCard key={country.name.common} countryName={country.name.common} countryCapital={country['capital']} countryRegion={country['region']} countryPopulation={country['population']} countryFlag={country['flags']['svg']} countryFlagAlt={country['flags']['alt']} theme={theme} />
                    }) : loader}
                </div>
            );
        }
        else if (region) {

            // Filtering countries on the basis of region.
            filteredCountries = copyCountryData.filter((country) => country['region'] === region);

            // Updating returnValue.
            returnValue = (
                <div id='countryCardContainer'>
                    {filteredCountries ? filteredCountries.map((country) => {
                        return <CountryCard key={country.name.common} countryName={country.name.common} countryCapital={country['capital']} countryRegion={country['region']} countryPopulation={country['population']} countryFlag={country['flags']['svg']} countryFlagAlt={country['flags']['alt']} theme={theme} />
                    }) : loader}
                </div>
            );
        }
        else if (keyword) {

            // Filtering countries on the basis of keyword.
            filteredCountries = copyCountryData.filter((country) => country.name.common.toLowerCase().startsWith(keyword.toLowerCase()));

            // Updating returnValue.
            returnValue = (
                <div id='countryCardContainer'>
                    {filteredCountries ? filteredCountries.map((country) => {
                        return <CountryCard key={country.name.common} countryName={country.name.common} countryCapital={country['capital']} countryRegion={country['region']} countryPopulation={country['population']} countryFlag={country['flags']['svg']} countryFlagAlt={country['flags']['alt']} theme={theme} />
                    }) : loader}
                </div>
            );
        }

    };

    return (
        <>
        <Search theme={theme} />
        {returnValue}
        </>
    );
};