import React, { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ThreeDotLoader from './ThreeDotLoader.jsx';
const Error = lazy(() => import('./Error.jsx'));
const CountryDetail = lazy(() => import('./CountryDetail.jsx'));

export default function GetCountryDetail() {

    // State for country detail which will be fetched from API.
    const [countryDetail, setCountryDetail] = useState(null);

    // State for error when any error occured during fetching.
    const [error, setError] = useState(null);

    // Getting navigate function.
    const navigate = useNavigate();

    // Getting country name from URL.
    const { countryName } = useParams();

    // This function fetches country detail.
    const fetchCountryDetail = useCallback(() => {
        // Controller for the API.
        const controller = new AbortController();

        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`, { signal: controller.signal })
        .then(response => response.json())
        .then(data => {
            setCountryDetail(data);
            setError(false);
        })
        .catch(error => {
            console.log('error:', error);
            setError(true);
        });

        // If the component unmounts, abort the fetch API request.
        return () => {
            if (controller) {
                controller.abort();
            }
        };
    }, [countryName]);

    // Scroll to top when this components mounts and fetch country details.
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        return fetchCountryDetail();
    }, []);
    
    // Returning country detail.
    return (
        <>
        <button 
            onClick={() => {navigate(-1)}} 
            className="flex flex-row items-center justify-center gap-2 py-1 px-6 mt-12 ml-7 mr-4 mb-5 shadow-light-box-shadow rounded-md"
        >
            <span className="font-serif text-2xl -rotate-[135deg]">&#8599;</span>Back
        </button>

        {
            error || countryDetail ? 
                <Suspense>
                    {
                        error ? <Error errorName={error.name} errorMessage={error.message} status={error.status ? error.status : ''} /> : <CountryDetail countryDetail={countryDetail} />
                    }
                </Suspense>
             : <ThreeDotLoader />
        }
        </>
    );
};
