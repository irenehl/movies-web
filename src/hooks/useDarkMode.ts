import { useEffect, useState } from 'react';

const MODE = {
    LIGHT: 'retro',
    DARK: 'dark',
};

const setDataTheme = (theme: string) => {
    document.querySelector('html')?.setAttribute('data-theme', theme);
    localStorage.setItem('data-theme', theme);
};

const useDarkMode = () => {
    const [mode, setMode] = useState<string>(localStorage.getItem('data-theme') ?? MODE.LIGHT);

    const toggleMode = () => {
        setMode(mode === 'retro' ? MODE.DARK : MODE.LIGHT);
    };

    useEffect(() => {
        const current = localStorage.getItem('data-theme') ?? MODE.LIGHT;
        setDataTheme(current);
    }, []);

    useEffect(() => {
        setDataTheme(mode ?? 'a');
    }, [mode]);

    return { mode, toggleMode };
};

export default useDarkMode;
