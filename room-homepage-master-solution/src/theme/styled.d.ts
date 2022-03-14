import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        layout: {
            mobile: string,
            desktop: string
        },
        colors: {
            primary: {
                darkGray: string,
                black: string,
                white: string,
                veryDarkGray: string
            }
        },
        typography: {
            fontSize: string,
            fontFamily: string,
            fontWeight: {
                regular: string,
                bold: string,
                bolder: string
            }
        }
    }
}


