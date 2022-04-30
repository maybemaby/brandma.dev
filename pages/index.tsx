import type { NextPage } from "next";
import { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { FaReact, FaHtml5, FaCss3, FaPython, FaNodeJs } from "react-icons/fa";
import {
  SiDjango,
  SiJavascript,
  SiCsharp,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import { DarkModeContext } from "../components/DarkModeProvider";
import { DarkModeToggle } from "../components/DarkModeToggle";
import { ProjectSection, Project } from "../components/ProjectSection";
import { SideBar } from "../components/SideBar/SideBar";
import { TechSection } from "../components/TechSection";
import { IconBadge } from "../components/IconBadge";
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

  const projects: Project[] = [
    {
      description: `Express API server that could power a home dashboard between roommates.
      Roommates can add to the message board, create events, and assign tasks. 
      Features JWT auth, logging with Winston, and Prisma with a relational database. 
      `,
      title: "Homeboard API",
      technologies: ["Express.js", "Typescript", "Passportjs", "Prisma"],
      repo: "https://github.com/maybemaby/homeboard-api",
    },
    {
      description: `Personal developer portfolio made from scratch. Dark mode and theming
      created using React Context and styled-components. Statically generated with Next.js.
      `,
      title: "Personal Portfolio",
      technologies: ["Next.js", "Typescript", "styled-components"],
      repo: "https://github.com/maybemaby/brandma.dev",
      liveUrl: "https://brandma.dev/",
      morePath: "/projects/portfolio",
    },
  ];

  return (
    <ThemeProvider theme={darkMode?.darkOn ? darkTheme : lightTheme}>
      <Div>
        <SideBar links={links} />
        <PortfolioHeader>
          <HeaderIcon>brandma.dev</HeaderIcon>
          <DarkModeToggle onClick={toggleDark} />
        </PortfolioHeader>
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
            ]}
          />
          <ProjectSection projects={projects}></ProjectSection>
        </Main>
      </Div>
    </ThemeProvider>
  );
};

export default Home;
