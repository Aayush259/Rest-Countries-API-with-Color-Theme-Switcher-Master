import React, { useContext, useRef } from 'react';
import searchIconWhite from '../images/search-white.svg';
import searchIconDark from '../images/search-dark.svg';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/Context.jsx';

export default function Search() {

    // Getting theme, optionValue, inputValue state and there setter function from context.
    const { theme, optionValue, setOptionValue, inputValue, setInputValue } = useContext(Context);

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

    return (
        // Returning search (both search box and options).
        <>
        <div id='search' className='flex'>
            <label htmlFor='country' className={`flex ${theme}-label`}>
                <img src={searchImg} alt='Search for a country' height={15} className={`${theme}-searchImg`}/>
                <input 
                    type='text' 
                    name='country' 
                    id='country' 
                    placeholder='Search for a country...' 
                    autoComplete='on'
                    value={inputValue}
                    ref={inputRef}
                    onChange={handleInputChange}
                    autoFocus
                />
            </label>
            <label htmlFor='region' className={`flex ${theme}-label`}>
                <select 
                    name='region' 
                    id='region' 
                    autoComplete='off'
                    value={optionValue}
                    ref={optionRef}
                    onChange={handleOptionNavigation}
                >
                        <option 
                            value='' 
                            className={`${theme}-label`}
                        >
                            Find by Region
                        </option>

                        <option 
                            value='Africa' 
                            className={`${theme}-label`}
                        >
                            Africa    
                        </option>

                        <option 
                            value='Americas'
                            className={`${theme}-label`}
                        >
                            America    
                        </option>

                        <option 
                            value='Asia' 
                            className={`${theme}-label`}
                        >
                            Asia    
                        </option>

                        <option 
                            value='Europe' 
                            className={`${theme}-label`}
                        >
                            Europe    
                        </option>

                        <option 
                            value='Oceania' 
                            className={`${theme}-label`}
                        >
                            Oceanic    
                        </option>

                        <option 
                            value='All' 
                            className={`${theme}-label`}
                        >
                            All    
                        </option>
                </select>
            </label>
        </div>
        </>
    );
};
