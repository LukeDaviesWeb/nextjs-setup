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

    
    .massive{
        font-size: ${props => theme.fontSizes.massive};
    }
    .banner{
        font-size: ${props => theme.fontSizes.banner};
        line-height: 40px;
    }

    h1, .h1{
        font-size: ${props => theme.fontSizes.h1};
    }
    h2, .h2{
        font-size: ${props => theme.fontSizes.h2};
    }
    h3, .h3{
        font-size: ${props => theme.fontSizes.h3};
    }

    p{
        font-size: ${props => theme.fontSizes.body};
    }

    .border-split{
        padding-top: 30px;
        margin-top: 20px;
        border-top: 1px solid ${props => theme.colors.btnGrey};
    }

    .mt-5{
        margin-top: 5px;
    }
    .mt-40{
        margin-top: 40px;
    }


    .lead, span.lead{
        font-size: ${props => theme.fontSizes.lead};
        line-height: 2.2rem;
    }

    span.highlight{
        background: rgba(42,93,250, 0.8);
        padding: 0 10px;
        transform: skew(-1deg);
        display: inline-block;
        position: relative;

        &:before{
            content:'';
            position: absolute;
            height: 100%;
            width: 100%;
            transform: scaleX(1);
            transform-origin: right;
            left: 0;
            background: ${props => theme.colors.blockGrey};
            transition: transform .3s ease-out 2s;
            will-change: transform;
        }

        &.active{
            &:before{
                transform: scaleX(0);
            }
        }
    }
    .small{
        font-size: ${props => theme.fontSizes.small};
    }

    .label{
        font-size: ${props => theme.fontSizes.label};
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    a.text-link{
        
            color: ${props => theme.colors.blue};
        
    }

    ul{
        margin: 0;
        padding: 0;
        li{
            list-style-type: none;
            font-weight: 400;
        }
    }

    ul.bullet-list{
        li{
            padding-bottom: 10px;
            position: relative;
            padding-left: 19px;
            &:before{
                content:'';
                background: ${props => theme.colors.blue};
                height: 10px;
                width: 10px;
                border-radius: 50%;
                display: block;
                position: absolute;
                left: 0;
                top: 5px;
            }
        }
    }

    .mt-lg{
        margin-top: 150px;
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

        &:focus{
            outline: none;
        }
    }

`