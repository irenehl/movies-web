import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { FC, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import history from '@router/index';
import { themeChange } from 'theme-change';

const queryClient = new QueryClient();

const App: FC = () => {
    

    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={history} />
        </QueryClientProvider>
    );
};

export default App;
