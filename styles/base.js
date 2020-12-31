import { createGlobalStyle } from "styled-components"
import { theme } from "./theme"

export const GlobalStyle = createGlobalStyle`
 html {
        box-sizing: border-box;
        font-size: 10px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body{
        background:${props => theme.colors.grey};
        padding: 0;
        margin: 0;
        font-size: 1.6rem;
        font-family: ${props => theme.fonts.body};
        color: ${props => theme.colors.white};
    }

    h1, h2, h3,h4,h5,h6{
        margin: 0;
    }

    h1{
        font-size: ${props => theme.fontSizes.banner};
        line-height: 40px;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    ul{
        margin: 0;
        padding: 0;
        li{
            list-style-type: none;
            font-weight: 400;
        }
    }

    .btn{
        border: 0;
        color: white;
        border-radius: 50px;
        font-weight:600;
        cursor: pointer;
        background: ${props => theme.colors.btnGrey};
        color: ${props => theme.colors.white};

        &:hover{
            background: rgba(255,255,255, 0.15);
        }

        &--sm{
            height: 38px;
            width: 150px;
            font-size: 1.5rem;
        }
        &--lg{
            height: 48px;
            width: 200px;
            font-size: 1.5rem;
        }
        
        &--submit{
            background: ${props => theme.colors.blue};
            color: ${props => theme.colors.white};
            &:hover{
                background: ${props => theme.colors.white};
                color: ${props => theme.colors.black};
            }
        }
    }

`