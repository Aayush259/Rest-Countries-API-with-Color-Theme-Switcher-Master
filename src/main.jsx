import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App.jsx';
const Home = lazy(() => import('./components/Home.jsx'));
const CountryDetail = lazy(() => import('./components/CountryDetail.jsx'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/Where-in-the-world/' element={<App />}>
      <Route path='/Where-in-the-world/' element={<Home />} />
      <Route path='/Where-in-the-world/filter/' element={<Home />} />
      <Route path='/Where-in-the-world/filter/:region' element={<Home />} />
      <Route path='/Where-in-the-world/country/:countryName' element={<CountryDetail />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
