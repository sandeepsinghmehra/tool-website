"use client"
import React, { useState, createContext, useMemo, useContext } from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme';

const ThemeToggleContext:any = createContext({});

export const useThemeToggle:any = () => useContext(ThemeToggleContext);

const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

    const toggleTheme = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <ThemeToggleContext.Provider value={toggleTheme}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ThemeToggleContext.Provider>
    );
};

export default ThemeProvider;
