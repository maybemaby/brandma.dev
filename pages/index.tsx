import type { NextPage } from "next";
import { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiDjango,
  SiJavascript,
  SiCsharp,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import { DarkModeContext } from "../components/DarkModeProvider";
import { Landing } from "../components/Landing/Landing";
import { Topnav } from "../components/Topnav/Topnav";
import { DarkModeToggle } from "../components/DarkModeToggle";
import { ProjectSection, Project } from "../components/ProjectSection";
import { SideBar } from "../components/SideBar/SideBar";
import { TechSection } from "../components/TechSection";
import { IconBadge } from "../components/IconBadge";
import { lightTheme, darkTheme } from "../theme";
import { projects } from "../data";

const Div = styled.div`
  background: ${(props) => props.theme.bg.primary};
  height: 100%;
  transition: all 200ms linear;
`;

const PortfolioHeader = styled.header`
  height: 100px;
  color: ${(props) => props.theme.font.color};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 15px;
  @media screen and (min-width: 768px) {
    padding: 0 1.5rem 0 3rem;
  }
`;

const HeaderIcon = styled.div`
  margin: 0;
  font-size: ${(props) => props.theme.fontSizes[3]};
  font-weight: 600;
  padding: 5px 10px;
  color: black;
  background: ${(props) => props.theme.bg.gradient};
  backdrop-filter: blur(2px);
`;

const Main = styled.main`
  margin: 20px 10px 0 10px;
  display: flex;
  flex-direction: column;
`;

const Home: NextPage = () => {
  const darkMode = useContext(DarkModeContext);

  const toggleDark = () => {
    if (darkMode) darkMode.setDarkOn(!darkMode.darkOn);
  };

  const links = [
    {
      name: "Home",
      path: "/",
    },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
  ];

  return (
    <ThemeProvider theme={darkMode?.darkOn ? darkTheme : lightTheme}>
      <Div>
        <SideBar links={links} />
        <PortfolioHeader>
          <HeaderIcon>brandma.dev</HeaderIcon>
          <Topnav />
          <DarkModeToggle onClick={toggleDark} />
        </PortfolioHeader>
        <Landing />
        <Main>
          <TechSection
            badges={[
              <IconBadge
                label={"Django"}
                bgColor={"#0f8a25"}
                color={"#e6e9ed"}
                Icon={SiDjango}
                key={1}
              />,
              <IconBadge
                label={"Python"}
                Icon={FaPython}
                color={"#d45d38"}
                key={6}
              />,
              <IconBadge
                label={"React"}
                Icon={FaReact}
                bgColor={"#3475c9"}
                color={"#e6e9ed"}
                key={2}
              />,
              <IconBadge
                label={"Next.js"}
                Icon={SiNextdotjs}
                bgColor={"#e6e9ed"}
                color={"#000000"}
                key={9}
              />,
              <IconBadge
                label={"HTML5"}
                Icon={FaHtml5}
                bgColor={"#d19917"}
                key={3}
              />,
              <IconBadge
                label={"CSS3"}
                Icon={FaCss3}
                bgColor={"#4578f0"}
                key={4}
              />,
              <IconBadge
                label={"Javascript/ES6"}
                Icon={SiJavascript}
                bgColor={"#dfcb16"}
                key={5}
              />,
              <IconBadge
                label={"Typescript"}
                Icon={SiTypescript}
                bgColor={"#167edf"}
                key={10}
              />,
              <IconBadge
                label={"Node.js"}
                Icon={FaNodeJs}
                bgColor={"#42b163"}
                color={"#070707"}
                key={8}
              />,
              <IconBadge
                label={"C#"}
                Icon={SiCsharp}
                bgColor={"#7d2fe2"}
                color={"#e6e9ed"}
                key={7}
              />,
              <IconBadge
                label={"Docker"}
                Icon={FaDocker}
                bgColor={"#3480eb"}
                key={11}
              />,
              <IconBadge
                label="Git"
                Icon={FaGitAlt}
                bgColor="#eb6534"
                key={12}
              />,
              <IconBadge
                label="Github"
                Icon={FaGithub}
                bgColor={"#e6e9ed"}
                color={"#000000"}
                key={13}
              />,
            ]}
          />
          <ProjectSection projects={projects}></ProjectSection>
        </Main>
      </Div>
    </ThemeProvider>
  );
};

export default Home;
