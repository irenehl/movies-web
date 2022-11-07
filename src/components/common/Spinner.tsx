import React, { FC } from 'react';
import Lottie from 'react-lottie';
import animationData from '@assets/lottie/panda.json';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    renderSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
};

const Spinner: FC = () => (
    <div className="w-screen h-screen fixed left-0 top-0 z-50 bg-black bg-opacity-50 center-row-xy">
        <Lottie options={defaultOptions} height={200} />
    </div>
);

export default Spinner;
