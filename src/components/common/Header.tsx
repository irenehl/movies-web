import React, { FC } from 'react';
import { HeaderProps } from './props';

const Header: FC<HeaderProps> = ({ title, subtitle }) => (
    <header>
        <h1 className="font-bold text-2xl">{title}</h1>
        <h2 className="font-medium text-lg">{subtitle}</h2>
    </header>
);

export default Header;
