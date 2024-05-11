import React from "react";
import searchIconWhite from "../images/search-white.svg";
import searchIconDark from "../images/search-dark.svg";

function Search(props) {

    // If the mode is light, then set the dark search icon, else set white search icon.
    let searchImg = props.mode === "light" ? searchIconDark : searchIconWhite;

    // THis function calls the searchCountries function in Home component to search the country based on the user prompt.
    const searchCountry = (e) => {
        props.onSearch(e.target.value);
    }

    // This function calls the filterRegion function in Home component to filter the countries based on the user selected region.
    const filterCountryCards = (e) => {
        props.filterRegion(e.target.value)
    }

    return (
        // Returning search (both search box and options).
        <>
        <div id="search" className="flex">
            <label htmlFor="country" className={`flex ${props.mode}-label`}>
                <img src={searchImg} alt="Search for a country" height={15} className={`${props.mode}-searchImg`}/>
                <input type="text" name="country" id="country" placeholder="Search for a country..." onChange={searchCountry} />
            </label>
            <label htmlFor="region" className={`flex ${props.mode}-label`}>
                <select name="region" id="region" onChange={filterCountryCards}>
                    <option value="Find" className={`${props.mode}-label`}>Find by Region</option>
                    <option value="Africa" className={`${props.mode}-label`}>Africa</option>
                    <option value="Americas" className={`${props.mode}-label`}>America</option>
                    <option value="Asia" className={`${props.mode}-label`}>Asia</option>
                    <option value="Europe" className={`${props.mode}-label`}>Europe</option>
                    <option value="Oceania" className={`${props.mode}-label`}>Oceanic</option>
                </select>
            </label>
        </div>
        </>
    )
}

export default Search;