import { injectGlobal } from "@emotion/css";

injectGlobal`
  html, body {
    overscroll-behavior-y: none;
  }
  
  body {
    font-family: "Test Söhne Breit", sans-serif;
    color: #000;
 
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }
`;
