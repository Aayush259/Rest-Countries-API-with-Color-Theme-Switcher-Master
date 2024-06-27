import React, { lazy, Suspense, useContext } from 'react';
import { Context } from '../context/Context.jsx';
import ThreeDotLoader from './ThreeDotLoader.jsx';
const Search = lazy(() => import('./Search.jsx'));
const FilteredCountryCards = lazy(() => import('./FilteredCountryCards.jsx'));

export default function Home() {

    // Context error state from context.
    const { error } = useContext(Context);

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