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

    // This cardToScroll state will keep track of the card which is clicked and its detail is shown so that while navigating back, user can continue from where the card is clicked.
    let [cardToScroll, setCardToScroll] = useState(null);

    // Initializing search state with an object of two properties: keyword (the user-prompt) and the region (from the dropdown).
    let [search, setSearch] = useState({
        keyword: '',
        region: ''
    });

    // This function updates the current state.
    const updateCurrentState = (state) => {
        setCurrentState(state);
    }

    useEffect(() => {
        if (currentState === 'home' && cardToScroll) {
            const targetElement = document.getElementById(cardToScroll);
            targetElement.scrollIntoView({ behavior: 'smooth'});
        }
    }, [currentState]);

    // This function sets the keyword property of the search property to display the filtered countries based on user prompt for countries.
    const searchCountries = (keyword) => {
        setSearch({
            ...search,
            keyword: keyword,
        });
        updateCurrentState("search");
    }

    // This function sets the region property of the search state to diaplay the filtered countries based on region.
    const filterRegion = (region) => {
        setSearch({
            ...search,
            region: region,
        });
        updateCurrentState("search");
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
                <div id="loader"></div>
            </div>
            </>
        )
    }
    
    // Updating the view based on currentState.
    if (currentState === "home") {
        // Returning home screen.
        return (
            <>
            <Search onSearch={searchCountries} filterRegion={filterRegion} mode={props.mode} />
            <div id="countryCardContainer">
                {countryData.map((country) => {
                    return <CountryCard key={country.name.common} countryName={country.name.common} countryCapital={country["capital"]} countryRegion={country["region"]} countryPopulation={country["population"]} countryFlag={country["flags"]["svg"]} countryFlagAlt={country["flags"]["alt"]} displayCountryDetail={updateCurrentState} mode={props.mode} setCardToScroll={setCardToScroll} />
                })}
            </div>
            </>
        )
    } else if (currentState === "search") {
        // Declaring two variables for filtering countries first based on region and then based on user-prompt, if any.
        let filteredCountriesBasedOnRegion;
        let arrayOfFilteredCountryDetail;

        // If the search region is empty string or "Find" then filtered countries based on region will be the original country data (all countries). Otherwise, filter the countries based on the region.
        if (search.region === "" || search.region === "Find") {
            filteredCountriesBasedOnRegion = countryData;
        } else {
            filteredCountriesBasedOnRegion = countryData.filter(country => country["region"] === search.region)
        }

        // If user has not provided any prompt, the filtered countries will be equl to filtered countries based on region. Otherwise, filter the countries based on the user-prompt and selected region.
        if (search.keyword === "") {
            arrayOfFilteredCountryDetail = filteredCountriesBasedOnRegion;
        } else {
            // Storing filtered country details for country cards based on user search's keyword.
            arrayOfFilteredCountryDetail = filteredCountriesBasedOnRegion.filter(country => country.name.common.toLowerCase().startsWith(search.keyword.toLowerCase()));
        }

        // Returning home screen with search filters.
        return (
            <>
            <Search onSearch={searchCountries} filterRegion={filterRegion} mode={props.mode} />
            <div id="countryCardContainer">
                {arrayOfFilteredCountryDetail.map((country) => {
                    return <CountryCard key={country.name.common} countryName={country.name.common} countryCapital={country["capital"]} countryRegion={country["region"]} countryPopulation={country["population"]} countryFlag={country["flags"]["svg"]} countryFlagAlt={country["flags"]["alt"]} displayCountryDetail={updateCurrentState} mode={props.mode} setCardToScroll={setCardToScroll} />
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
            <CountryDetail countryName={countryName} countryPopulation={countryPopulation} countryNativeName={countryNativeName} countryLanguages={countryLanguages} countryRegion={countryRegion} countryCapital={countryCapital} countrySubRegion={countrySubRegion} countryTopLevelDomain={countryTopLevelDomain} countryCurrencies={countryCurrencies} borderCountries={borderCountries} countryFlag={countryFlag} countryFlagAlt={countryFlagAlt} goBack={updateCurrentState} mode={props.mode} />
        )
    }
}

export default Home;