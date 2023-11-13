// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    .bg{
        height: 100vh;
        width:100%;
        border-bottom: 1px solid white;
    }
    .parallelogram {
        width: 50px;
        height: 50px;
        transform: skew(-10deg);
    }
    .triangle-top-left {
        width: 0;
        height: 0;
        border-top: 50px solid #333;
        border-right: 50px solid transparent;
    }
    .triangle-top-right {
        width: 0;
        height: 0;
        border-top: 50px solid #333;
        border-left: 50px solid transparent;
    }
    /* Add any other global styles you need */
`;

export default GlobalStyle;
