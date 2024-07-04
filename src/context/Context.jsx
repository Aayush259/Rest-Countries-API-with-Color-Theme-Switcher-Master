import React, { createContext, useContext } from 'react';

// Create a context.
const CountryDataContext = createContext();

// Context Provider component.
const CountryDataContextProvider = ({ children, value }) => {
    return (
        <CountryDataContext.Provider value={value}>
            {children}
        </CountryDataContext.Provider>
    );
};

// Custom hook for CountryDataContext.
const useCountryDataContext = () => useContext(CountryDataContext);

export { useCountryDataContext, CountryDataContextProvider };