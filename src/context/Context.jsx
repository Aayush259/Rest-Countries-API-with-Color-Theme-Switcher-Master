import React from 'react';

// Create a context.
const Context = React.createContext();

// Context Provider component.
const ContextProvider = ({ children, value }) => {
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};

export { Context, ContextProvider };