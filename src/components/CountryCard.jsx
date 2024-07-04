import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useCountryDataContext } from '../context/Context.jsx';
import '../styles/countryCard.css';

export default function CountryCard({ countryName, countryFlag, countryFlagAlt, countryPopulation, countryRegion, countryCapital }) {

    // Getting theme from context.
    const { theme } = useCountryDataContext();

    // Returning Card.
    return (
        <>
        <Link 
            className={`card ${theme}-card`} 
            id={countryName}
            to={`/Where-in-the-world/country/${countryName}`}
        >
            <img src={countryFlag} alt={countryFlagAlt} width={200} loading='lazy' />
            <div className='countryDetails'>
                <p className='countryName bold-800'>{countryName}</p>
                <p className='population'><span className='bold-600'>Population: </span>{countryPopulation.toLocaleString()}</p>
                <p className='region'><span className='bold-600'>Region: </span>{countryRegion}</p>
                <p className='capital'><span className='bold-600'>Capital: </span>{countryCapital[0]}</p>
            </div>
        </Link>
        </>
    );
};

CountryCard.propTypes = {
    countryName: PropTypes.string.isRequired,
    countryFlag: PropTypes.string.isRequired,
    countryFlagAlt: PropTypes.string.isRequired,
    countryPopulation: PropTypes.number.isRequired,
    countryRegion: PropTypes.string.isRequired,
    countryCapital: PropTypes.array.isRequired,
};