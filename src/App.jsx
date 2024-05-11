import React from "react";
import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Home from "./components/Home";
import './styles/style.css';

function App() {

  // Initializing the app theme with light.
  let [theme, setTheme] = useState("light");

  // This functions toggle theme betwween light and dark.
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  }

  // When the theme is changes, reflect it to the body' background by adding a class of theme + "-body".
  useEffect(() => {
    document.body.className = theme + '-body';
  }, [theme]);

  // Returning complete app.
  return (
    <>
    <div className={`app-${theme}`}>
      <Nav mode={theme} changeTheme={toggleTheme} />
      <Home mode={theme} />
    </div>
    </>
  )
}

export default App
