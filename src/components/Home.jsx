import React, { lazy, Suspense } from 'react';
import { useCountryDataContext } from '../context/Context.jsx';
import ThreeDotLoader from './ThreeDotLoader.jsx';
const Search = lazy(() => import('./Search.jsx'));
const FilteredCountryCards = lazy(() => import('./FilteredCountryCards.jsx'));

export default function Home() {

    // Context error state from context.
    const { error } = useCountryDataContext();

    return (
        <Suspense fallback={<ThreeDotLoader />}>
                <Search />
                {error ||
                        <Suspense fallback={<ThreeDotLoader />}>
                                <FilteredCountryCards />
                        </Suspense>
                }
        </Suspense>
    );
};