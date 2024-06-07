import React from 'react';

export default function ThreeDotLoader({ theme }) {

    return (
        <div className={`loaderContainer flex ${theme}`}>
            <div className='circle'></div>
            <div className='circle'></div>
            <div className='circle'></div>
        </div>
    );
};