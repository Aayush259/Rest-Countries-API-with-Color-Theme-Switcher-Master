import React from 'react';
import PropTypes from 'prop-types';

export default function Error({ errorName, errorMessage, status }) {

    return (
        <div
            className="flex flex-col gap-2 w-full min-h-[40vh] text-center text-xl"
        >
            <p
                className="text-3xl font-semibold text-sky-600"
            >
                {status}:( {errorName}
            </p>

            <p
                className="text-3xl font-semibold text-red-600"
            >
                {errorMessage}
            </p>

            <p>Something went wrong 😕.</p>

            <p>Server is slow. Try refreshing the page</p>
        </div>
    );
};


Error.propTypes = {
    errorName: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
    status: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};