import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F0F2F5;
        --red: #E62E4D;
        --blue: #5429CC;
        -green: #33CC95;
        --shape: #FFFFFF;
        --titles: #363F5F;
        --texts: #969CB3;
        --

    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html { 
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    //REM = 1rem = 16px (tamanho da fonte)

    body{
        background: var (--background);
        -webkit-font-smoothing: antialiased;
    }
    button {
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`