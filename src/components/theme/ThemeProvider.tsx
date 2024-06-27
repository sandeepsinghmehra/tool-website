"use client"
import React, { useState, createContext, useMemo, useContext } from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline, Box } from '@mui/material';
import { lightTheme, darkTheme } from './theme';

const ThemeToggleContext:any = createContext({});

export const useThemeToggle:any = () => useContext(ThemeToggleContext);

const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(true);

    const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

    const toggleTheme = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <ThemeToggleContext.Provider value={toggleTheme}>
            <MuiThemeProvider theme={theme} >
                <CssBaseline />
                <Box sx={{ bgcolor: theme.palette.mode === 'light' ? '#fff': "#000", px: {xs: 0, md: 2}}}>
                    {children}
                </Box>
            </MuiThemeProvider>
        </ThemeToggleContext.Provider>
    );
};

export default ThemeProvider;
