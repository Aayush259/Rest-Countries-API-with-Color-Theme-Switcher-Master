import React from 'react';
import { useCountryDataContext } from '../context/Context.jsx';
import darkModeDisabledImg from '../images/dark-mode-disabled.svg';
import darkModeEnabledImg from '../images/dark-mode-enabled.svg';

export default function Nav() {

    const { theme, toggleTheme } = useCountryDataContext();

    // If the theme is "light" then set imgURL to darkModeDisabledImg, else set it to darkModeEnabledImg.
    let imgURL = theme === 'light' ? darkModeDisabledImg : darkModeEnabledImg;

    // Returning Nav bar.
    return (
        <>
            <header
                className="flex py-4 px-3 sm:px-14 justify-between items-center text-Very-Dark-Blue-Light-Mode-Text bg-white dark:bg-Dark-Blue-Dark-Mode-Elements dark:text-White-Dark-Mode-Text-Light-Mode-Elements shadow-light-box-shadow dark:shadow-dark-box-shadow"
            >

                <h1
                    className="text-lg sm:text-2xl font-bold tracking-wide"
                >
                    Where in the world?
                </h1>

                <button
                    className="flex items-center justify-center gap-1 sm:gap-2 font-semibold text-sm p-2"
                    onClick={toggleTheme}
                >
                    <img
                        src={imgURL}
                        alt="Change Theme"
                        className="h-7 w-3 -rotate-[25deg]"
                    />
                    Dark Mode
                </button>
            </header>
        </>
    );
};
