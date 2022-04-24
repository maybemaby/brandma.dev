import type { NextPage } from "next";
import { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkModeContext } from "../components/DarkModeProvider";
import { lightTheme, darkTheme } from "../theme";

const Div = styled.div`
  background: ${(props) => props.theme.bg.primary};
  height: 100%;
`;

const PortfolioHeader = styled.header`
  height: 100px;
  color: ${(props) => props.theme.font.color};
  display: flex;
  align-items: center;
  padding: 0 1.5rem 0 3rem;
`;

const DarkModeButton = styled.button`
  position: fixed;
  top: 2.5rem;
  right: 1.5rem;
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
          <h1 style={{ margin: 0 }}>Brandon Ma</h1>
        </PortfolioHeader>
        <DarkModeButton onClick={toggleDark}>Toggle Dark</DarkModeButton>
      </Div>
    </ThemeProvider>
  );
};

export default Home;
