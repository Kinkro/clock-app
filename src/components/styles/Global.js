import { createGlobalStyle } from "styled-components";
import daytime from "../../assets/desktop/bg-image-daytime.jpg";
import nighttime from "../../assets/desktop/bg-image-nighttime.jpg";

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding:0;
        margin:0;
        
    }

    p{
        margin:0;
    }

    body{
        ${"" /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.40)); */}
        background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), 
        url(${({ currentTime }) =>
          currentTime >= 18 || currentTime < 5 ? nighttime : daytime});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 100vh;
    }

`;

export default GlobalStyles;
