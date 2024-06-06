import React, { useContext } from 'react';
import { Context } from '../context/Context.jsx';
import CountryCard from './CountryCard.jsx';
import Search from './Search.jsx';

export default function Home() {

    // Context for theme and countryDaa.
    const {theme, countryData} = useContext(Context);

    // Loader
    const loader = (
        <div id="loaderContainer" className="flex">
            <div id="loader"></div>
        </div>
    );

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