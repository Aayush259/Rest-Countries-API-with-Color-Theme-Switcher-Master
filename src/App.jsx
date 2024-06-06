import React from "react";
import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import './styles/style.css';
import { Outlet } from "react-router-dom";
import { ContextProvider } from "./context/Context.jsx";

function App() {

  // Initializing the app theme with light.
  let [theme, setTheme] = useState("light");

  // Initializing countryData state to null.
  let [countryData, setCountryData] = useState(null);

  // This functions toggle theme betwween light and dark.
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  }

  // When the theme is changes, reflect it to the body' background by adding a class of theme + "-body".
  useEffect(() => {
    document.body.className = theme + '-body';
  }, [theme]);

  // Fetching countryData from restcountries API and setting it to countryData state.
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population')
    .then(response => response.json())
    .then(data => setCountryData(data))
    .catch(error => console.log('error:', error))
  }, []);

  // Returning complete app.
  return (
    <>
    <div className={`app-${theme}`}>
      <ContextProvider value={{theme, toggleTheme, countryData, setCountryData}}>
        <Nav />
        <Outlet />
      </ContextProvider>
    </div>
    </>
  )
}

export default App
