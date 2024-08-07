import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import searchIconWhite from '../images/search-white.svg';
import searchIconDark from '../images/search-dark.svg';
import { useCountryDataContext } from '../context/Context.jsx';

export default function Search() {

    // Getting theme, optionValue, inputValue state and there setter function from context.
    const { theme, optionValue, setOptionValue, inputValue, setInputValue } = useCountryDataContext();

    // If the mode is light, then set the dark search icon, else set white search icon.
    let searchImg = theme === 'light' ? searchIconDark : searchIconWhite;

    // Navigate function to control navigation when input value or select value changes.
    const navigate = useNavigate();

    // Getting option and input element reference.
    const optionRef = useRef();
    const inputRef = useRef();

    // This function handles navigation based on the value of option and input when option value is changed.
    const handleOptionNavigation = () => {

        // Getting option value from its reference.
        const currentOption = optionRef.current.value;
        setOptionValue(currentOption);

        // Change route according the currentOption.
        navigate(`/Where-in-the-world/filter/${currentOption}`);
    };

    // This function handles the change of input value.
    const handleInputChange = () => {

        // Getting current input value from its reference.
        const currentInput = inputRef.current.value;
        setInputValue(currentInput);
    };

    // Function which returns object for options with its name and value.
    const getOptions = (value, name) => ({ value, name });

    // Array of all otpions.
    const options = [
        getOptions('', 'Find by Region'),
        getOptions('Africa', 'Africa'),
        getOptions('Americas', 'America'),
        getOptions('Asia', 'Asia'),
        getOptions('Europe', 'Europe'),
        getOptions('Oceania', 'Oceanic'),
        getOptions('All', 'All'),
    ];

    return (
        <>
            <div
                className="flex flex-wrap w-full gap-8 mt-6 py-4 px-10 items-center justify-between text-Very-Dark-Blue-Light-Mode-Text"
            >
                <label
                    htmlFor="country"
                    className="flex items-center h-12 pl-6 gap-1 min-w-[34vw] max-w-[97vw] shadow-light-box-shadow dark:shadow-dark-box-shadow dark:bg-Dark-Blue-Dark-Mode-Elements rounded"
                >
                    <img
                        src={searchImg}
                        alt="Search for a country"
                        className="h-4"
                    />
                    <input
                        type="text"
                        name="country"
                        id="country"
                        className="bg-transparent h-full p-4 flex-grow max-w-[90%] dark:text-White-Dark-Mode-Text-Light-Mode-Elements"
                        placeholder="Search for a country..."
                        autoComplete="on"
                        value={inputValue}
                        ref={inputRef}
                        onChange={handleInputChange}
                    />
                </label>
                <label
                    htmlFor="region"
                    className="flex items-center pr-4 pl-2 shadow-light-box-shadow dark:shadow-dark-box-shadow dark:bg-Dark-Blue-Dark-Mode-Elements rounded cursor-pointer"
                >
                    <select
                        name="region"
                        id="region"
                        autoComplete="off"
                        className="bg-transparent h-12 cursor-pointer pr-1 dark:text-White-Dark-Mode-Text-Light-Mode-Elements"
                        value={optionValue}
                        ref={optionRef}
                        onChange={handleOptionNavigation}
                    >
                        {
                            options.map(option => (
                                <option
                                    key={option['name']}
                                    value={option['value']}
                                    className="dark:bg-Dark-Blue-Dark-Mode-Elements rounded"
                                >
                                    {option['name']}
                                </option>
                            ))
                        }
                    </select>
                </label>
            </div>
        </>
    );
};
