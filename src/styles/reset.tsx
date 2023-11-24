import { injectGlobal } from "@emotion/css";

injectGlobal`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding:0;
 
  }

  html, body, #root {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;

    &:focus {
      outline: none;
    }
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root {
    isolation: isolate;
  }
`;