import React, { lazy, Suspense, useContext, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Context } from '../context/Context.jsx';
import { useParams } from 'react-router-dom';
import ThreeDotLoader from './ThreeDotLoader.jsx';
const CountryCard = lazy(() => import('./CountryCard.jsx'));

export default function FilteredCountryCards() {

    // Getting countryData and inputValue of search bar from context.
    const { countryData, inputValue } = useContext(Context);

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
        setVisibleCountryData(countriesToDisplay.slice(0, 20));
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
            setVisibleCountryData(prevVisibleCountryData => countriesToDisplay.slice(0, prevVisibleCountryData.length + 20));
        }, 2000);
    };

    // When region changes, update countriesToDisplay state by filtering the countries according to region.
    useEffect(() => {

        // If countryData is not present, then do nothing.
        if (!countryData) return;

        // Making setHasMoreCountryData state to true to enable infinite scrolling.
        setHasMoreCountryData(true);

        // Filter countries according to region.
        region && region !== 'All' ? setCountriesToDisplay(countryData.filter((country) => country['region'] === region)) : setCountriesToDisplay(countryData);

        // Filter countries according to inputValue.
        inputValue && inputValue !== ' ' ? setCountriesToDisplay(prevCountriesToDisplay => prevCountriesToDisplay.filter((country) => country.name.common.toLowerCase().startsWith(inputValue.toLowerCase()))) : null;

    }, [inputValue, region, countryData]);

    return (
        <InfiniteScroll
            dataLength={visibleCountryData.length}
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
                <Suspense fallback={''}>
                    {visibleCountryData ? visibleCountryData.map((country) => {
                        return <CountryCard key={country.name.common} countryName={country.name.common} countryCapital={country['capital']} countryRegion={country['region']} countryPopulation={country['population']} countryFlag={country['flags']['svg']} countryFlagAlt={country['flags']['alt']} />
                    }) : null}
                </Suspense>
            </div>
        </InfiniteScroll>
    );
};
