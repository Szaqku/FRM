import {DefaultTheme} from "styled-components";

const commonTheme : Partial<DefaultTheme> = {
    layout: {
        mobile: '375px',
        desktop: '1440px',
        break1: '520px'
    },
    typography: {
        homePageItemsFontSize: '14px',
        detailPageFontSize: '18px',
        fontFamily: 'Nunito Sans, sans-serif',
        fontWeight: {
            light: '300',
            regular: '600',
            bold: '800'
        }
    },
    globalLeftRightSpacing: `
        padding-left: 30px;
        padding-right: 30px;
        @media (min-width: 520px) {
            padding-left: 80px;
            padding-right: 60px;
        }
    `
}

const withDefault = (partial: Partial<DefaultTheme>) : DefaultTheme => {
    return <DefaultTheme>{...commonTheme, ...partial}
}

export const darkTheme : DefaultTheme = withDefault({
    colors: {
        elements: `hsl(209, 23%, 22%)`,
        background: `hsl(207, 26%, 17%)`,
        text: `hsl(0, 0%, 100%)`,
        inputMode: `hsl(207, 26%, 17%)`,
        shadowColor: `rgb(66 68 90)`
    }
});

export const lightTheme : DefaultTheme = withDefault({
    colors: {
        elements: `hsl(0, 0%, 100%)`,
        background: `hsl(0, 0%, 98%)`,
        text: `hsl(200, 15%, 8%)`,
        inputMode: `hsl(0, 0%, 52%)`,
        shadowColor: 'rgb(223 223 223)'
    }
});
