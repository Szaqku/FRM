import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        layout: {
            mobile: string,
            desktop: string,
            break1: string
        }
        colors: {
            elements: string,
            background: string,
            text: string,
            inputMode: string,
            shadowColor: string
        },
        typography: {
            homePageItemsFontSize: string,
            detailPageFontSize: string,
            fontFamily: string,
            fontWeight: {
                light: string,
                regular: string,
                bold: string
            }
        },
        globalLeftRightSpacing: string
    }
}


