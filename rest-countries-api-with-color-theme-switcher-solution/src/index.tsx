import React, {createContext, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle, DefaultTheme, ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "./theme/Theme";
import App from "./App";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import {store} from "./redux/store";
import {Provider} from 'react-redux'

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${props => props.theme.colors.background};
        font-size: ${props => props.theme.typography.homePageItemsFontSize};
        font-family: ${props => props.theme.typography.fontFamily};
        font-weight: ${props => props.theme.typography.fontWeight.regular};
        color: ${props => props.theme.colors.text};
        margin: 0;
        padding: 0;
    }
`

interface ThemeContextType {
    theme: DefaultTheme,
    text: string,
    icon: string | JSX.Element,
    changeTheme: () => void
}


export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeContextProvider = (props: { children: JSX.Element[] }) => {

    const [themeContext, setThemeContext] = useState<ThemeContextType | undefined>(undefined);

    const lightThemeContext = {
        theme: lightTheme,
        text: 'Dark Mode',
        icon: <FontAwesomeIcon icon={faMoon}/>,
        changeTheme: () => {}
    }

    const darkThemeContext = {
        theme: darkTheme,
        text: 'Light Mode',
        icon: <FontAwesomeIcon icon={faSun}/>,
        changeTheme: () => {}
    }

    lightThemeContext.changeTheme = () => setThemeContext(darkThemeContext)
    darkThemeContext.changeTheme = () => setThemeContext(lightThemeContext);

    useEffect(() => {
        setThemeContext(lightThemeContext);
    }, [])

    return (
        <ThemeContext.Provider value={themeContext}>
            <ThemeProvider theme={themeContext?.theme || lightThemeContext.theme}>
                {props.children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store} >
            <ThemeContextProvider>
                <GlobalStyles/>
                <App/>
            </ThemeContextProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

