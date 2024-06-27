import React from 'react';
import '../styles/error.css';

export default function Error({ errorName, errorMessage, status }) {

    return (
        <div className='error flex'>
            <p className='errorName'>{status}:( {errorName}</p>
            <p className='errorMsg'>{errorMessage}</p>
            <p>Something went wrong 😕.</p>
            <p>Server is slow. Try refreshing the page</p>
        </div>
    );
};