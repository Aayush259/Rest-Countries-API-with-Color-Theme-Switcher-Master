import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Context.jsx';
import CountryCard from './CountryCard.jsx';
import Search from './Search.jsx';
import InfiniteScroll from 'react-infinite-scroll-component';
import ThreeDotLoader from './ThreeDotLoader.jsx';

export default function Home() {

    // Context for theme and countryDaa.
    const {theme, countryData } = useContext(Context);

    // State for the country data that to be displayed on screen.
    const [displayData, setDisplayData] = useState([]);

    // State for checking that is there more countryData present in countryData than displayData?
    const [hasMoreCountryData, setHasMoreCountryData] = useState(true);
    
    // Updating displayData when countryData gets changed.
    useEffect(() => {
        countryData ? setDisplayData(countryData.slice(0, 25)) : setDisplayData([]);
    }, [countryData]);

    // This function sets more data in displayData when user reach at the end of the visible data screen.
    const getMoreCountryData = () => {
        // If countryData same in displayData and countryData then set hasMoreCountryData to false.
        if (displayData.length >= countryData.length) {
            setHasMoreCountryData(false);
            return;
        };

        // Update displayCountryData.
        setTimeout(() => {
            setDisplayData(countryData.slice(0, displayData.length + 25));
        }, 2000);
    };

    return (
        <>
        <Search theme={theme} />
            <InfiniteScroll
                dataLength={displayData.length}
                next={getMoreCountryData}
                hasMore={hasMoreCountryData}
                loader={<ThreeDotLoader theme={theme} />}
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
                    {displayData ? displayData.map((country) => {
                        return <CountryCard key={country.name.common} countryName={country.name.common} countryCapital={country['capital']} countryRegion={country['region']} countryPopulation={country['population']} countryFlag={country['flags']['svg']} countryFlagAlt={country['flags']['alt']} theme={theme} />
                    }) : <ThreeDotLoader theme={theme} />}
                </div>
            </InfiniteScroll>
        </>
    );
};