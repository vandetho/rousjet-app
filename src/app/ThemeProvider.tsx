'use client';

import React from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { ThemeProviderProps as NextThemeProviderProps } from 'next-themes/dist/types';

interface ThemeProviderProps extends NextThemeProviderProps {
}

const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({ children, ...props }) => (
    <NextThemeProvider {...props}>{children}</NextThemeProvider>
);

export default ThemeProvider;
