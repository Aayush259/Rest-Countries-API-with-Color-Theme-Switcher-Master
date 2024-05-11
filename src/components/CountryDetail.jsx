import React from "react";

function CountryDetail(props) {

    // Splitting the borderCountries into an array.
    let borderCountriesArray = props.borderCountries.toString().split(",");

    // This function sets the home state.
    const goBack = () => {
        props.goBack("home");
    }

    // Returning country detail.
    return (
        <>
        <button id="backBtn" className={`flex ${props.mode}-backBtn`} onClick={goBack}><span className="backArrow">&#8599;</span>Back</button>
        <div id="countryDetail" className="flex">
            <div id="countryFlag">
                <img src={props.countryFlag} alt={props.countryFlagAlt} />
            </div>
            <div id="details">
                <p className="countryName bold-800">{props.countryName}</p>
                <div className="otherDetails flex" style={{alignItems:"flex-start"}}>
                    <div style={{width:"50%"}}>
                        <p className="nativeName"><span className="bold-600">Native Name: </span>{props.countryNativeName}</p>
                        <p className="population"><span className="bold-600">Population: </span>{props.countryPopulation.toLocaleString()}</p>
                        <p className="region"><span className="bold-600">Region: </span>{props.countryRegion}</p>
                        <p className="subRegion"><span className="bold-600">Sub Region: </span>{props.countrySubRegion}</p>
                        <p className="capital"><span className="bold-600">Capital: </span>{props.countryCapital}</p>
                    </div>
                    <div style={{width:"50%"}}>
                        <p className="topLevelDomain"><span className="bold-600">Top Level Domain: </span>{props.countryTopLevelDomain}</p>
                        <p className="currencies"><span className="bold-600">Currencies: </span>{props.countryCurrencies}</p>
                        <p className="languages"><span className="bold-600">Languages: </span>{props.countryLanguages}</p>
                    </div>
                </div>
                <p className="borderCountries flex" style={{flexWrap: 'wrap', justifyContent: 'flex-start', gap: '8px'}}>
                    <span className="bold-600">Border Countries: </span>
                    {borderCountriesArray.map(borderCountry => {
                        return (
                            <span className={`borderCountry ${props.mode}-backBtn`} key={borderCountry}>{borderCountry}</span>
                        )
                    })}
                </p>
            </div>
        </div>
        </>
    )
}

export default CountryDetail;
