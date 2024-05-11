import React from "react";
import darkModeDisabledImg from "../images/dark-mode-disabled.svg"
import darkModeEnabledImg from "../images/dark-mode-enabled.svg"

function Nav(props) {

    // If the mode is "light" then set imgURL to darkModeDisabledImg, else set it to darkModeEnabledImg.
    let imgURL = props.mode === "light" ? darkModeDisabledImg : darkModeEnabledImg;

    // Returning Nav bar.
    return (
        <>
        <header id="header" className={`flex ${props.mode}-header`}>
            <h1>Where in the world?</h1>
            <button id="mode" className="flex" onClick={props.changeTheme}>
                <img src={imgURL} alt="Change Theme" id="themeImg" />
                Dark Mode
            </button>
        </header>
        </>
    )
}

export default Nav;