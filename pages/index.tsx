import type { NextPage } from "next";
import { useContext, useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkModeContext } from "../components/DarkModeProvider";
import { DarkModeToggle } from "../components/DarkModeToggle";
import { lightTheme, darkTheme } from "../theme";

const Div = styled.div`
  background: ${(props) => props.theme.bg.primary};
  height: 100%;
  transition: all 200ms linear;
`;

const PortfolioHeader = styled.header`
  height: 100px;
  color: ${(props) => props.theme.font.color};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  @media screen and (min-width: 768px) {
    padding: 0 1.5rem 0 3rem;
  }
`;

const HeaderIcon = styled.h1`
  margin: 0;
  font-size: ${(props) => props.theme.fontSizes[3]};
  padding: 5px 10px;
  color: black;
  background: ${(props) => props.theme.bg.gradient};
  backdrop-filter: blur(2px);
`;

const Home: NextPage = () => {
  const darkMode = useContext(DarkModeContext);

  const toggleDark = () => {
    if (darkMode) darkMode.setDarkOn(!darkMode.darkOn);
  };

  return (
    <ThemeProvider theme={darkMode?.darkOn ? darkTheme : lightTheme}>
      <Div>
        <PortfolioHeader>
          <HeaderIcon>brandma.dev</HeaderIcon>
          <DarkModeToggle onClick={toggleDark} />
        </PortfolioHeader>
      </Div>
    </ThemeProvider>
  );
};

export default Home;
