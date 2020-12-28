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

`