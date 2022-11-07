import React from 'react';
import Login from '@pages/login';
import { createBrowserRouter } from 'react-router-dom';
import Home from '@pages/home';
import Auth from '@components/hoc/Auth';

const history = createBrowserRouter([
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/home',
        element: (
            <Auth>
                <Home />
            </Auth>
        ),
    },
]);

export default history;
