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
    }
}

export default Home;