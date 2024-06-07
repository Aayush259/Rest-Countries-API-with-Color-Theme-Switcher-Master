import React, { useContext } from 'react';
import { Context } from '../context/Context.jsx';
import CountryCard from './CountryCard.jsx';
import Search from './Search.jsx';

export default function Home() {

    // Context for theme and countryDaa.
    const {theme, countryData, loader} = useContext(Context);

    return (
        <>
        <Search theme={theme} />
        <div id="countryCardContainer">
            {countryData ? countryData.map((country) => {
                return <CountryCard key={country.name.common} countryName={country.name.common} countryCapital={country["capital"]} countryRegion={country["region"]} countryPopulation={country["population"]} countryFlag={country["flags"]["svg"]} countryFlagAlt={country["flags"]["alt"]} theme={theme} />
            }) : loader}
        </div>
        </>
    );
};