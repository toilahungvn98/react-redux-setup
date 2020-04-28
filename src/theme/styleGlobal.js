import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *:focus {
        outline :none;
    }
    ul li {
        list-style: none;
    }
    a {
        text-decoration: none;
    }
    html {
        --border-color: rgba(176, 190, 197, 0.5);
        --shadow-color: rgba(0, 0, 0, 0.2);
        --shadow-color-dark: rgba(0, 0, 0, 0.25);
        --font-weight-regular : 400;
        --font-weight-medium : 500;
        --font-weight-bold : 700;
        --color-dark : ${ ({ theme }) => theme.colors.dark };
        font-size: 62.5%; /* = 10px , 1rem = 10px   */
        @media ${props => props.theme.mediaQueries.largest} {
            font-size: 57.5%;
        }
        @media ${props => props.theme.mediaQueries.large} {
            font-size: 55%;
        }
    }

    body {
        font-family : 'Montserrat', sans-serif;
        font-weight : 400;
        line-height: 1.6;
    }

`;