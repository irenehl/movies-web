import authStorage from '@services/storage/auth.storage';
import React, { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

const Auth: FC<PropsWithChildren> = ({ children }) => {
    if (authStorage.getAuth() === undefined) return <Navigate to="/login" replace />;

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            { children }
        </>
    );
};

export default Auth;
