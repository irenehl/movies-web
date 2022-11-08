import Header from '@components/common/Header';
import Layout from '@components/layout';
import { MovieDetails } from '@components/movie';
import ConfigurationContextProvider from '@ctx/config';
import React, { FC } from 'react';

const Details: FC = () => (
    <Layout>
        <ConfigurationContextProvider>
            <Header title="Movie Details" subtitle="Take a look about this amazing movie" />
            <MovieDetails />
        </ConfigurationContextProvider>
    </Layout>
);

export default Details;
