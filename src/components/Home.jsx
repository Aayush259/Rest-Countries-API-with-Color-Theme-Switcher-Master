import React from "react";
import { useState, useEffect } from "react";
import Search from "./Search";
import CountryCard from "./CountryCard";
import CountryDetail from "./CountryDetail";

function Home(props) {

    // Initializing home state.
    let [currentState, setCurrentState] = useState("home");
    
    // Initializing countryData state to null.
    let [countryData, setCountryData] = useState(null);

    // This function updates the current state.
    const updateCurrentState = (state) => {
        setCurrentState(state);
    }

    // Fetching countryData from restcountries API and setting it to countryData state.
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => setCountryData(data))
        .catch(error => console.log('error:', error))
    }, [])

    // Displaying loader while retrieving countryData from API.
    if (countryData === null) {
        // Returning loader.
        return (
            <>
            <div id="loaderContainer" className="flex">
                <div id="loader">Loading...</div>
            </div>
            </>
        )
    }
    
    // Updating the view based on currentState.
    if (currentState === "home") {
        // Returning home screen.
        return (
            <>
            <div id="countryCardContainer">
                {countryData.map((country) => {
                    return <CountryCard key={country.name.common} countryName={country.name.common} countryCapital={country["capital"]} countryRegion={country["region"]} countryPopulation={country["population"]} countryFlag={country["flags"]["svg"]} countryFlagAlt={country["flags"]["alt"]} displayCountryDetail={updateCurrentState} mode={props.mode} />
                })}
            </div>
            </>
        )
    } else {

        // Declaring different variables for country info.
        const countryName = currentState;
        const countryDetail = countryData.find(country => country.name.common === countryName);
        const countryFlag = countryDetail["flags"]["svg"];
        const countryFlagAlt = countryDetail["flags"]["alt"];
        const countryLanguages = Object.values(countryDetail["languages"]).join(", ");
        const countryNativeName = countryDetail.name["nativeName"][Object.keys(countryDetail["languages"])[0]]["common"];
        const countryPopulation = countryDetail["population"];
        const countryRegion = countryDetail["region"];
        const countrySubRegion = countryDetail["subregion"];
        const countryCapital = countryDetail["capital"];
        const countryTopLevelDomain = countryDetail["tld"];
        const countryCurrencies = countryDetail["currencies"][Object.keys(countryDetail["currencies"])[0]]["name"];

        // If there are no borderCountries, the set borderCountries to "No Border Countries".
        let borderCountries;
        try {
            borderCountries = countryDetail["borders"].join(", ");
        } catch {
            borderCountries = "No Border Countries";
        }

        // Returning country detail.
        return (
            <CountryDetail countryName={countryName} countryPopulation={countryPopulation} countryNativeName={countryNativeName} countryLanguages={countryLanguages} countryRegion={countryRegion} countryCapital={countryCapital} countrySubRegion={countrySubRegion} countryTopLevelDomain={countryTopLevelDomain} countryCurrencies={countryCurrencies} borderCountries={borderCountries} countryFlag={countryFlag} countryFlagAlt={countryFlagAlt} mode={props.mode} />
        )
    }
}

export default Home;