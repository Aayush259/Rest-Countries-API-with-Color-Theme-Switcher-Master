import React from "react";

function CountryCard(props) {

    // Returning Card.
    return (
        <>
        <div className={`card ${props.mode}-card`} id={props.countryName}>
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