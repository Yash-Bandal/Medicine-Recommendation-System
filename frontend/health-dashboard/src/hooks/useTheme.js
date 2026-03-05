import { useEffect, useState } from 'react';

export const useTheme = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        const root = window.document.documentElement;

        // Temporarily disable transitions
        root.classList.add('disable-transitions');

        // Toggle the theme
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

        // Remove the disable class on next frame
        requestAnimationFrame(() => {
            root.classList.remove('disable-transitions');
        });
    };
    

    return { theme, toggleTheme };
};
