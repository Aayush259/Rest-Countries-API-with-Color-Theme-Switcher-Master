import React from "react";
import { Link } from "react-router-dom";

function CountryCard(props) {

    // Destructuring props.
    const { theme, countryName, countryFlag, countryFlagAlt, countryPopulation, countryRegion, countryCapital } = props;

    // Returning Card.
    return (
        <>
        <Link 
            className={`card ${theme}-card`} 
            id={countryName}
            to={`country/${countryName}`}
        >
            <img src={countryFlag} alt={countryFlagAlt} width={200} />
            <div className="countryDetails">
                <p className="countryName bold-800">{countryName}</p>
                <p className="population"><span className="bold-600">Population: </span>{countryPopulation.toLocaleString()}</p>
                <p className="region"><span className="bold-600">Region: </span>{countryRegion}</p>
                <p className="capital"><span className="bold-600">Capital: </span>{countryCapital}</p>
            </div>
        </Link>
        </>
    )
}

export default CountryCard;