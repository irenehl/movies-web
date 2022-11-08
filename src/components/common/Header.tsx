import useDarkMode from '@hooks/useDarkMode';
import React, { FC } from 'react';
import classNames from 'classnames';
import { AiFillHeart, AiFillHome } from 'react-icons/ai';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
import { HeaderProps } from './props';

const Header: FC<HeaderProps> = ({ title, subtitle }) => {
    const { mode, toggleMode } = useDarkMode();
    const location = useLocation();

    return (
        <div>
            <nav className="w-full py-4 flex justify-end items-center gap-6">
                <button
                    onClick={toggleMode}
                    className="mr-auto"
                    type="button"
                    data-toggle-theme="retro"
                >
                    { mode === 'retro' ? <BsFillMoonFill /> : <BsFillSunFill />}
                </button>
                <a href="/" className={classNames('text-xl center-row-y gap-2', location.pathname === '/' && 'underline')}>
                    Home
                    <AiFillHome />
                </a>
                <a href="/favs" className={classNames('text-xl center-row-y gap-2', location.pathname === '/favs' && 'underline')}>
                    Favorites
                    <AiFillHeart />
                </a>
            </nav>
            <header className="">
                <h1 className="font-bold text-2xl">{title}</h1>
                <h2 className="font-medium text-lg">{subtitle}</h2>
            </header>
        </div>
    );
};

export default Header;
