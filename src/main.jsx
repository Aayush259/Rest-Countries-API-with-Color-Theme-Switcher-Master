import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/Home.jsx';
import CountryDetail from './components/CountryDetail.jsx';
import FilteredCountry from './components/FilteredCountry.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='filter/' element={<Home />} />
      <Route path='filter/:region' element={<FilteredCountry />} />
      <Route path='keyword(s)/:keyword' element={<FilteredCountry />} />
      <Route path='filter/:region/keyword(s)/:keyword' element={<FilteredCountry />} />
      <Route path='country/:countryName' element={<CountryDetail />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
