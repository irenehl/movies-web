import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import history from '@router/index';

const queryClient = new QueryClient();

const App: FC = () => (
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={history} />
    </QueryClientProvider>
);

export default App;
