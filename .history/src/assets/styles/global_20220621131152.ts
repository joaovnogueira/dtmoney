import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f8f2f5;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html { 
        @media (max-width: 1080px) {
            font-size
        }
    }

    body{
        background: var (--background);
        -webkit-font-smoothing: antialiased;
    }

`