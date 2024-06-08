import React from 'react';
import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { ContextProvider } from "./context/Context.jsx";
import './styles/style.css';
import Nav from './components/Nav';

export default function App() {

  // Initializing the app theme with light.
  const [theme, setTheme] = useState('light');

  // Initializing countryData state to null.
  const [countryData, setCountryData] = useState(null);

  // Getting region parameter from URL.
  const { region, keyword } = useParams();

  // State for region option value in Search.jsx. If region parameter is present then set it to its value, else set it to empty string.
  const [optionValue, setOptionValue] = useState(region ? region : '');

  // State for input value (keywords) in Search.jsx. If keyword parameter is present then set it to its value, else set it to empty string.
  const [inputValue, setInputValue] = useState(keyword ? keyword : '');

  // This functions toggle theme betwween light and dark.
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
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
      <ContextProvider value={{ theme, toggleTheme, countryData, setCountryData, optionValue, setOptionValue, inputValue, setInputValue }}>
        <Nav />
        <Outlet />
      </ContextProvider>
    </div>
    </>
  );
};