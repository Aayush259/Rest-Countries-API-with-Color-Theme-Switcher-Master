import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../context/Context.jsx";

function CountryDetail() {
    
    // Navigate function to go back when back button is clicked.
    const navigate = useNavigate();

    const [countryDetail, setCountryDetail] = useState(null);

    // Scroll to top when this components mounts.
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    // Getting theme and countryData from context.
    const { theme } = useContext(Context);

    // Getting country name from URL.
    const { countryName } = useParams();

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
        .then(response => response.json())
        .then(data => setCountryDetail(data))
        .catch(error => console.log('error:', error))
    }, []);

    // Return value (loader) when data is in fetching process.
    let toReturn = (
        <div className={`loaderContainer flex ${theme}`}>
            <div className='circle'></div>
            <div className='circle'></div>
            <div className='circle'></div>
        </div>
    );

    if (countryDetail) {
        console.log(countryDetail);
        const countryFlag = countryDetail[0]["flags"]["svg"];
        const countryFlagAlt = countryDetail[0]["flags"]["alt"];
        const countryLanguages = Object.values(countryDetail[0]["languages"]).join(", ");
        const countryNativeName = countryDetail[0].name["nativeName"][Object.keys(countryDetail[0]["languages"])[0]]["common"];
        const countryPopulation = countryDetail[0]["population"];
        const countryRegion = countryDetail[0]["region"];
        const countrySubRegion = countryDetail[0]["subregion"];
        const countryCapital = countryDetail[0]["capital"];
        const countryTopLevelDomain = countryDetail[0]["tld"];
        const countryCurrencies = countryDetail[0]["currencies"][Object.keys(countryDetail[0]["currencies"])[0]]["name"];
        
        // If there are no borderCountries, the set borderCountries to "No Border Countries".
        let borderCountries;
        try {
            borderCountries = countryDetail[0]["borders"].join(", ");
        } catch {
            borderCountries = "No Border Countries";
        }
    
        // Splitting the borderCountries into an array.
        let borderCountriesArray = borderCountries.toString().split(",");

        // Return value (country detail) when data is fetched.
        toReturn = (
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
        );
    }
    
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

        {toReturn}
        </>
    )
}

export default CountryDetail;
