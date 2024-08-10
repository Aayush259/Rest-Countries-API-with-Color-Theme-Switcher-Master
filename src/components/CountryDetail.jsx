import React from 'react';
import { useCountryDataContext } from '../context/Context.jsx';

export default function CountryDetail({ countryDetail }) {

    // Getting theme from context.
    const { theme } = useCountryDataContext();

    const countryName = countryDetail[0]['name']['common'];
    const countryFlag = countryDetail[0]['flags']['svg'];
    const countryFlagAlt = countryDetail[0]['flags']['alt'];
    const countryLanguages = Object.values(countryDetail[0]['languages']).join(", ");
    const countryNativeName = countryDetail[0].name['nativeName'][Object.keys(countryDetail[0]['languages'])[0]]['common'];
    const countryPopulation = countryDetail[0]['population'];
    const countryRegion = countryDetail[0]['region'];
    const countrySubRegion = countryDetail[0]['subregion'];
    const countryCapital = countryDetail[0]['capital'];
    const countryTopLevelDomain = countryDetail[0]['tld'];
    const countryCurrencies = countryDetail[0]['currencies'][Object.keys(countryDetail[0]['currencies'])[0]]['name'];

    // If there are no borderCountries, the set borderCountries to "No Border Countries".
    let borderCountries;
    try {
        borderCountries = countryDetail[0]['borders'].join(', ');
    } catch {
        borderCountries = 'No Border Countries';
    }

    // Splitting the borderCountries into an array.
    let borderCountriesArray = borderCountries.toString().split(',');

    return (
        <div
            className="flex flex-col gap-8 lg:flex-row justify-between items-center p-8 text-lg"
        >
            <div
                className="w-full lg:w-1/2 mx-auto"
            >
                <img
                    src={countryFlag}
                    alt={countryFlagAlt}
                    className="max-h-80 w-[97%] max-w-[615px] mx-auto"
                />
            </div>

            <div className="lg:w-1/2">
                <p
                    className="font-bold text-2xl sm:text-3xl w-full"
                >
                    {countryName}
                </p>

                <div className="flex flex-col md:flex-row gap-8 items-start">

                    <div className="w-full lg:w-1/2">
                        <p className="mt-3">
                            <span className="font-semibold">
                                Native Name:
                            </span> {countryNativeName}
                        </p>

                        <p className="mt-3">
                            <span className="font-semibold">
                                Population:
                            </span> {countryPopulation.toLocaleString()}
                        </p>

                        <p className="mt-3">
                            <span className="font-semibold">
                                Region:
                            </span> {countryRegion}
                        </p>

                        <p className="mt-3">
                            <span className="font-semibold">
                                Sub Region:
                            </span> {countrySubRegion}
                        </p>

                        <p className="mt-3">
                            <span className="font-semibold">
                                Capital:
                            </span> {countryCapital}
                        </p>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <p className="mt-3">
                            <span className="font-semibold">
                                Top Level Domain:
                            </span> {countryTopLevelDomain}
                        </p>

                        <p className="mt-3">
                            <span className="font-semibold">
                                Currencies:
                            </span> {countryCurrencies}
                        </p>

                        <p className="mt-3">
                            <span className="font-semibold">
                                Languages:
                            </span> {countryLanguages}
                        </p>
                    </div>
                </div>

                <p className="mt-3 flex justify-start flex-wrap gap-2">

                    <span className="font-semibold">
                        Border Countries:
                    </span> {borderCountriesArray.map(borderCountry => (
                        <span
                            className="flex justify-center items-center py-[2px] px-4 rounded min-w-[12%] text-center mx-1 text-sm sm:text-lg shadow-light-box-shadow"
                            key={borderCountry}
                        >
                            {borderCountry}
                        </span>
                    )
                    )}
                </p>
            </div>
        </div>
    );
};
