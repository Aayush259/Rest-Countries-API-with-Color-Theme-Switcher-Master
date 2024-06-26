import React, { lazy, Suspense, useContext, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Context } from '../context/Context.jsx';
import { FilteredCountriesContextProvider } from '../context/FilteredCountriesContext.jsx';
import ThreeDotLoader from './ThreeDotLoader.jsx';
const Search = lazy(() => import('./Search.jsx'));
const FilteredCountryCards = lazy(() => import('./FilteredCountryCards.jsx'));

export default function Home() {

    // Context for theme and countryDaa.
    const {theme, countryData, error } = useContext(Context);

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

        const updatedDisplayCountriesData = displayData.slice(0, displayData.length + 25);
        
        // If countryData same in updatedDisplayCountriesData and displayData then set hasMoreCountryData to false.
        if (updatedDisplayCountriesData.length >= displayData.length) {
            setHasMoreCountryData(false);
            return;
        };

        // Update displayCountryData.
        setTimeout(() => {
            setDisplayData(updatedDisplayCountriesData);
        }, 2000);
    };

    return (
        <Suspense fallback={<ThreeDotLoader />}>
            <FilteredCountriesContextProvider value={{ displayData, setDisplayData }}>
                <Search />
                {error ||
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
                        <Suspense fallback={<ThreeDotLoader />}>
                                <FilteredCountryCards />
                        </Suspense>
                    </InfiniteScroll>
                }
            </FilteredCountriesContextProvider>
        </Suspense>
    );
};