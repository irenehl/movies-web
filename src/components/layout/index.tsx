import { Spinner } from '@components/common';
import { useIsFetching, useIsMutating } from '@tanstack/react-query';
import React, { FC, PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';

const Layout: FC<PropsWithChildren> = ({ children }) => {
    const isFetching = useIsFetching();
    const isMutating = useIsMutating();

    return (
        <main className="relative max-w-screen-md min-h-screen h-screen p-10 mx-auto flex flex-col
        md:p-12
        lg:px-0
        xl:max-w-screen-lg
        "
        >
            <Toaster />
            { (isFetching > 0 || isMutating > 0) ? <Spinner /> : null }
            { children }
        </main>
    );
};

export default Layout;
