import React from 'react';
import '../styles/threeDotLoaderStyles.css';

export default function ThreeDotLoader({ theme }) {

    return (
        <div className={`threeDotLoaderContainer flex ${theme}`}>
            <div className='circle'></div>
            <div className='circle'></div>
            <div className='circle'></div>
        </div>
    );
};