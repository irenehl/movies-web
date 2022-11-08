import React, { FC, useState } from 'react';
import emptyImage from '@assets/lottie/empty.json';
import Lottie from 'react-lottie';
import { ImageProps } from './props';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: emptyImage,
    renderSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
};

const EmptyImage: FC = () => (
    <div className="w-full h-full bg-[#f3f3f3]">
        <Lottie options={defaultOptions} />
    </div>
);

const Image: FC<ImageProps> = ({ src, alt }) => {
    const [isError, setIsError] = useState(false);

    return isError ? <EmptyImage /> : <img className="w-full h-full object-cover" onError={() => setIsError(true)} src={src} alt={alt} />;
};

export default Image;
