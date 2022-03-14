import React from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {theme as defaultTheme} from "./theme/Theme";
import App from "./App";

export const GlobalStyles = createGlobalStyle`

    body {
        background-color: ${({ theme }) => theme.colors.primary.white};
        font-size: ${({ theme }) => theme.typography.fontSize};
        font-family: ${({ theme }) => theme.typography.fontFamily};
        color: ${({ theme }) => theme.colors.primary.black};
        margin: 0;
        padding: 0;
    }
    
`

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

