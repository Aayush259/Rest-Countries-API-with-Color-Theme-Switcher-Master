import React from 'react';

// Create context for filtered countries.
const FilteredCountries = React.createContext();

// Context provider.
const FilteredCountriesContextProvider = ({ children, value }) => {
    return (
        <FilteredCountries.Provider value={value}>
            {children}
        </FilteredCountries.Provider>
    );
};

export { FilteredCountries, FilteredCountriesContextProvider };