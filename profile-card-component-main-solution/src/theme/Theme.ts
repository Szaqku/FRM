import {DefaultTheme} from "styled-components";

export const theme : DefaultTheme = {
    layout: {
        mobile: '375px',
        desktop: '1440px'
    },
    colors: {
        primary: {
            default: `hsl(185, 75%, 39%)`,
            darker: `hsl(229, 23%, 23%)`,
            grayishBlue: `hsl(227, 10%, 46%)`
        },
        neutral: {
            default: `hsl(0, 0%, 59%)`
        }
    },
    typography: {
        fontSize: '18px',
        fontFamily: 'Kumbh Sans, sans-serif',
        fontWeight: {
            default: '400',
            bold: '700'
        }
    }
}
