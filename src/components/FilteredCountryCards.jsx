import React, { useContext, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Context } from '../context/Context.jsx';
import ThreeDotLoader from './ThreeDotLoader.jsx';
import CountryCard from './CountryCard.jsx';
import { useParams } from 'react-router-dom';

export default function FilteredCountryCards() {

    // Getting countryData from context.
    const { countryData } = useContext(Context);

    // Getting region from route param.
    const { region } = useParams();

    // State for complete country data to display.
    const [countriesToDisplay, setCountriesToDisplay] = useState([]);

    // State for checking that is there more countryData present in displayData than visibleCountryData?
    const [hasMoreCountryData, setHasMoreCountryData] = useState(true);

    // State for country data to display.
    const [visibleCountryData, setVisibleCountryData] = useState([]);

    // When countryData changes, update countriesToDisplay state.
    useEffect(() => {
        countryData ? setCountriesToDisplay(countryData) : setCountriesToDisplay([]);
    }, [countryData]);

    // When countriesToDisplay state changes, update visibleCountryData state.
    useEffect(() => {
        setVisibleCountryData(countriesToDisplay.slice(0, 25));
    }, [countriesToDisplay]);

    // This function sets more data in displayData when user reach at the end of the visible data screen.
    const getMoreCountryData = () => {
        // If countryData same in displayData and countryData then set hasMoreCountryData to false.
        if (visibleCountryData.length >= countriesToDisplay.length) {
            setHasMoreCountryData(false);
            return;
        };

        // Update displayCountryData.
        setTimeout(() => {
            setVisibleCountryData(countriesToDisplay.splice(0, visibleCountryData.length + 20));
        }, 1500);
    };

    // When region changes, update countriesToDisplay state by filtering the countries according to region.
    useEffect(() => {

        // Making setHasMoreCountryData state to true to enable infinite scrolling.
        setHasMoreCountryData(true);

        if (countryData) {
            region && region !== 'All' ? setCountriesToDisplay(countryData.filter((country) => country['region'] === region)) : setCountriesToDisplay(countryData);
        }

    }, [region, countryData]);

    return (
        <InfiniteScroll
            dataLength={countriesToDisplay.length}
            next={getMoreCountryData}
            hasMore={hasMoreCountryData}
            loader={<ThreeDotLoader />}
            endMessage={
                <p style={{
                    textAlign: 'center',
                    margin: '1.2rem auto',
                    fontSize: '1rem',
                }}>
                    You have reached at the end 😊.
                </p>
            }
        >
            <div id='countryCardContainer'>
                {visibleCountryData ? visibleCountryData.map((country) => {
                    return <CountryCard key={country.name.common} countryName={country.name.common} countryCapital={country['capital']} countryRegion={country['region']} countryPopulation={country['population']} countryFlag={country['flags']['svg']} countryFlagAlt={country['flags']['alt']} />
                }) : null}
            </div>
        </InfiniteScroll>
    );
};
