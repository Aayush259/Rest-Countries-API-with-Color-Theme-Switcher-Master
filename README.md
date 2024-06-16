# Where in the World?

## Overview

**"Where in the World"** is a web application built using Vite and React that allows users to explore information about countries around the world. This app features dynamic theming, infinite scrolling, and advanced filtering capabilities.

![Where in the World Home page](/src/images/s-1.png)

## Table of Contents

1. [Features](#features)
2. [Usage](#usage)
3. [Technologies Used](#technologies-used)
4. [Components](#components)
5. [State Management](#state-management)
6. [Routing](#routing)
    - [Routes](#routes)
7. [Infinite Scroll](#infinite-scroll)
8. [Installation](#installation)
9. [Contributing](#contributing)

## Features

- Light and Dark mode themes.
- Search and filter countries by region and keyword.
- View detailed information about each country.
- Infinite scrolling for seamless data loading.

## Usage

- Toggle between light and dark modes using the button in the navigation bar.
- Use the search bar to find countries by name.
- Use the dropdown menu to filter countries by region.
- Click on a country card to view detailed information about the country.
- Scroll down to load more countries dynamically.

![India](/src/images/s-2.png)

## Technologies Used:

- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation front-end tool for faster builds.
- **React Router DOM**: For handling client-side routing.
- **Context API**: For state management.
- **Fetch API**: For making network requests.
- **Infinite Scroll**: For loading data dynamically as you scroll.
- **REST Countries API**: For fetching country data.

## Components:

- **App.jsx**: The main component that sets up the theme, fetches country data, and provides the context to other components.
- **Home.jsx**: Displays a list of countries with infinite scroll.
- **FilteredCountry.jsx**: Displays countries filtered by region and/or keyword.
- **CountryDetail.jsx**: Shows detailed information about a selected country.
- **CountryCard.jsx**: Represents a single country in a card format.
- **Nav.jsx**: The navigation bar with theme toggle and app title.
- **Search.jsx**: Contains the search and filter inputs.
- **ThreeDotLoader.jsx**: A loading component.
- **Error.jsx**: Displays error messages when API requests fail.

## State Management

State management in this app is handled using **React's Context API**. The ContextProvider component wraps the main application and provides state variables and functions to manage themes, country data, search input, and filter options.

## Routing

Routing is handled using **react-router-dom**. The app has several routes defined in main.jsx using the *createBrowserRouter* and *createRoutesFromElements* methods.

### Routes

- **/Where-in-the-world/**: Home page displaying all countries.
- **/Where-in-the-world/filter/:region**: Displays countries filtered by region.
- **/Where-in-the-world/filter/:region/keyword(s)/:keyword**: Displays countries filtered by region and keyword.
- **/Where-in-the-world/country/:countryName**: Displays detailed information about a specific country.

## Infinite Scroll

Infinite scrolling is implemented using the **react-infinite-scroll-component** library in the *Home.jsx* component. This allows users to load more countries as they scroll down the page.

## Installation

1. Clone the repository `git clone https://github.com/Aayush259/Where-in-the-world.git`.
2. Install the dependencies using `npm install`.
3. Start the application using `npm run dev`.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


Thank you for using Where in the World. We hope this app helps you learn more about the countries around the globe. If you have any questions or feedback, feel free to open an issue or contribute to the project.
