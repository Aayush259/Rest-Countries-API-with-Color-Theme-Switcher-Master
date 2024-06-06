import React from "react";
import searchIconWhite from "../images/search-white.svg";
import searchIconDark from "../images/search-dark.svg";

function Search({ theme }) {

    // If the mode is light, then set the dark search icon, else set white search icon.
    let searchImg = theme === "light" ? searchIconDark : searchIconWhite;

    return (
        // Returning search (both search box and options).
        <>
        <div id="search" className="flex">
            <label htmlFor="country" className={`flex ${theme}-label`}>
                <img src={searchImg} alt="Search for a country" height={15} className={`${theme}-searchImg`}/>
                <input 
                    type="text" 
                    name="country" 
                    id="country" 
                    placeholder="Search for a country..." 
                    autoComplete="on" />
            </label>
            <label htmlFor="region" className={`flex ${theme}-label`}>
                <select 
                    name="region" 
                    id="region" 
                    autoComplete="off">
                        <option value="Find" className={`${theme}-label`}>Find by Region</option>
                        <option value="Africa" className={`${theme}-label`}>Africa</option>
                        <option value="Americas" className={`${theme}-label`}>America</option>
                        <option value="Asia" className={`${theme}-label`}>Asia</option>
                        <option value="Europe" className={`${theme}-label`}>Europe</option>
                        <option value="Oceania" className={`${theme}-label`}>Oceanic</option>
                </select>
            </label>
        </div>
        </>
    )
}

export default Search;