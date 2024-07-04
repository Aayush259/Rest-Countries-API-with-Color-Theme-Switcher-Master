import React from 'react';
import '../styles/threeDotLoaderStyles.css';
import { useCountryDataContext } from '../context/Context';

export default function ThreeDotLoader() {

    // Getting theme from context.
    const { theme } = useCountryDataContext();

    return (
        <div className={`threeDotLoaderContainer flex ${theme}`}>
            <div className='circle'></div>
            <div className='circle'></div>
            <div className='circle'></div>
        </div>
    );
};