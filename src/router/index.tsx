import React from 'react';
import Login from '@pages/login';
import { createBrowserRouter } from 'react-router-dom';

const history = createBrowserRouter([
    {
        path: '*',
        element: <Login />,
    },
]);

export default history;
