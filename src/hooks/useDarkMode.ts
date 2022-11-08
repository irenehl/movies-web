import { useEffect, useState } from 'react';

const MODE = {
    LIGHT: 'retro',
    DARK: 'dark',
};

const setDataTheme = (theme: string) => document.querySelector('html')?.setAttribute('data-theme', theme);

const useDarkMode = () => {
    const [mode, setMode] = useState<string>('retro');

    const toggleMode = () => {
        setMode(mode === 'retro' ? MODE.DARK : MODE.LIGHT);
    };

    useEffect(() => {
        setDataTheme(MODE.LIGHT);
    }, []);

    useEffect(() => {
        setDataTheme(mode);
    }, [mode]);

    return { mode, toggleMode };
};

export default useDarkMode;
