import React from "react";

function CountryCard(props) {

    // This function handles the click on the card and displays the detail information about the country by calling displayCountryDetail function in Home component.
    const handleCountryClick = () => {
        props.displayCountryDetail(props.countryName);
    }

    // Returning Card.
    return (
        <>
        <div className={`card ${props.mode}-card`} id={props.countryName} onClick={handleCountryClick}>
            <img src={props.countryFlag} alt={props.countryFlagAlt} width={200} />
            <div className="countryDetails">
                <p className="countryName bold-800">{props.countryName}</p>
                <p className="population"><span className="bold-600">Population: </span>{props.countryPopulation.toLocaleString()}</p>
                <p className="region"><span className="bold-600">Region: </span>{props.countryRegion}</p>
                <p className="capital"><span className="bold-600">Capital: </span>{props.countryCapital}</p>
            </div>
        </div>
        </>
    )
}

export default CountryCard;