import Header from '@components/common/Header';
import Layout from '@components/layout';
import ConfigurationContextProvider from '@ctx/config';
import React, { FC } from 'react';
import Lottie from 'react-lottie';
import animationData from '@assets/lottie/404.json';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    renderSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
};

const NotFound: FC = () => (
    <Layout>
        <ConfigurationContextProvider>
            <Header title="Page not found" subtitle="" />
            <div className="w-full h-full flex justify-center items-center">
                <Lottie options={defaultOptions} height={300} />
            </div>
        </ConfigurationContextProvider>
    </Layout>
);

export default NotFound;
