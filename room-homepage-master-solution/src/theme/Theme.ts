import {DefaultTheme} from "styled-components";

export const theme : DefaultTheme = {
    layout: {
        mobile: "375px",
        desktop: "1440px"
    },
    colors: {
        primary: {
            darkGray: `hsl(0, 0%, 63%)`,
            black: `hsl(0, 0%, 0%)`,
            white: `hsl(0, 0%, 100%)`,
            veryDarkGray: `hsl(0, 0%, 27%)`
        }
    },
    typography: {
        fontSize: "12px",
        fontFamily: 'Spartan, sans-serif',
        fontWeight: {
            regular: '500',
            bold: '600',
            bolder: '700'
        }
    }
}
