import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../context/Context.jsx";

function CountryDetail() {
    
    // Navigate function to go back when back button is clicked.
    const navigate = useNavigate();

    // Scroll to top when this components mounts.
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    const { theme, countryData } = useContext(Context);
    const { countryName } = useParams();

    // Getting all country details using countryName from the URL.
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

    // Splitting the borderCountries into an array.
    let borderCountriesArray = borderCountries.toString().split(",");

    // Returning country detail.
    return (
        <>
        <button 
            id="backBtn" 
            className={`flex ${theme}-backBtn`}
            onClick={() => navigate(-1)}
        >
            <span className="backArrow">&#8599;</span>Back
        </button>

        <div id="countryDetail" className="flex">
            <div id="countryFlag">
                <img src={countryFlag} alt={countryFlagAlt} />
            </div>

            <div id="details">
                <p className="countryName bold-800">{countryName}</p>

                <div className="otherDetails flex" style={{alignItems:"flex-start"}}>

                    <div style={{width:"50%"}}>
                        <p className="nativeName"><span className="bold-600">Native Name: </span>{countryNativeName}</p>

                        <p className="population"><span className="bold-600">Population: </span>{countryPopulation.toLocaleString()}</p>

                        <p className="region"><span className="bold-600">Region: </span>{countryRegion}</p>

                        <p className="subRegion"><span className="bold-600">Sub Region: </span>{countrySubRegion}</p>

                        <p className="capital"><span className="bold-600">Capital: </span>{countryCapital}</p>
                    </div>

                    <div style={{width:"50%"}}>
                        <p className="topLevelDomain"><span className="bold-600">Top Level Domain: </span>{countryTopLevelDomain}</p>

                        <p className="currencies"><span className="bold-600">Currencies: </span>{countryCurrencies}</p>

                        <p className="languages"><span className="bold-600">Languages: </span>{countryLanguages}</p>
                    </div>
                </div>

                <p className="borderCountries flex" style={{flexWrap: 'wrap', justifyContent: 'flex-start', gap: '8px'}}>
                    <span className="bold-600">Border Countries: </span>
                    {borderCountriesArray.map(borderCountry => {
                        return (
                            <span className={`borderCountry ${theme}-backBtn`} key={borderCountry}>{borderCountry}</span>
                        )
                    })}
                </p>
            </div>
        </div>
        </>
    )
}

export default CountryDetail;
