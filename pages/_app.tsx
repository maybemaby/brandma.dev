import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { DarkModeProvider } from "../components/DarkModeProvider";

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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <DarkModeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}

export default MyApp;
