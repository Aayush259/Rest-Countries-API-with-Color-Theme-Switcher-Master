import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useCountryDataContext } from '../context/Context.jsx';

export default function CountryCard({ countryName, countryFlag, countryFlagAlt, countryPopulation, countryRegion, countryCapital }) {

    // Getting theme from context.
    const { theme } = useCountryDataContext();

    // Returning Card.
    return (
        <>
            <Link
                id={countryName}
                to={`/Where-in-the-world/country/${countryName}`}
                className="w-60 max-w-[96vw] mx-auto pb-5 rounded-lg overflow-hidden text-Very-Dark-Blue-Dark-Mode-Background bg-Very-Light-Gray-Light-Mode-Background shadow-light-box-shadow dark:bg-Dark-Blue-Dark-Mode-Elements dark:text-Very-Light-Gray-Light-Mode-Background dark:shadow-dark-box-shadow"
            >

                <img
                    src={countryFlag}
                    alt={countryFlagAlt}
                    loading="lazy"
                    className="max-h-64 min-h-28"
                />

                <div
                    className="p-4 text-sm sm:text-lg"
                >
                    <p
                        className="font-bold mt-1 mb-2 text-lg sm:text-xl"
                    >
                        {countryName}
                    </p>

                    <p
                        className="mt-1"
                    >
                        <span className="font-bold sm:font-semibold">
                            Population:
                        </span> {countryPopulation.toLocaleString()}
                    </p>

                    <p className="mt-1">
                        <span className="font-bold sm:font-semibold">
                            Region:
                        </span> {countryRegion}
                    </p>

                    <p className="mt-1">
                        <span className="font-bold sm:font-semibold">
                            Capital:
                        </span> {countryCapital[0]}
                    </p>
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