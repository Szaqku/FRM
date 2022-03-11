import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        layout: {
            mobile: string,
            desktop: string
        }
        colors: {
            primary: {
                default: string,
                darker: string,
                grayishBlue: string
            },
            neutral: {
                default: string
            }
        },
        typography: {
            fontSize: string,
            fontFamily: string,
            fontWeight: {
                default: string,
                bold: string
            }
        }
    }
}


