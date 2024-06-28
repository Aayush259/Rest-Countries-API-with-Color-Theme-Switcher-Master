import React, { useContext } from 'react';
import '../styles/threeDotLoaderStyles.css';
import { Context } from '../context/Context';

export default function ThreeDotLoader() {

    const { theme } = useContext(Context);

    return (
        <div className={`threeDotLoaderContainer flex ${theme}`}>
            <div className='circle'></div>
            <div className='circle'></div>
            <div className='circle'></div>
        </div>
    );
};