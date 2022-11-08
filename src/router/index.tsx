import React from 'react';
import Login from '@pages/login';
import Home from '@pages/home';
import Favs from '@pages/favs';
import { createBrowserRouter } from 'react-router-dom';
import Auth from '@components/hoc/Auth';
import Details from '@pages/details';
import NotFound from '@pages/404';

const history = createBrowserRouter([
    {
        path: '*',
        element: (
            <NotFound />
        ),
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/',
        element: (
            <Auth>
                <Home />
            </Auth>
        ),
    },
    {
        path: '/favs',
        element: (
            <Auth>
                <Favs />
            </Auth>
        ),
    },
    {
        path: '/details/:id',
        element: (
            <Auth>
                <Details />
            </Auth>
        ),
    },
]);

export default history;
