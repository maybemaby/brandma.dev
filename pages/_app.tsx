import type { AppProps } from "next/app";
import { useContext, useEffect, useRef } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "../theme";
import {
  DarkModeProvider,
  DarkModeContext,
} from "../components/DarkModeProvider";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  * {
  box-sizing: border-box;
}

  div#__next {
    height: 100%;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}

export default MyApp;
