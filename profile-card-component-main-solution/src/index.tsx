import React from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {theme} from "./theme/Theme";
import App from "./App";

export const GlobalStyles = createGlobalStyle`

    body {
        background-color: ${props => props.theme.colors.primary.default};
        font-size: ${props => props.theme.typography.fontSize};
        font-family: ${props => props.theme.typography.fontFamily};
        color: ${props => props.theme.colors.primary.darker};
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    
`

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

