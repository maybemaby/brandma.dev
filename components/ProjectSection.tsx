import styled from "styled-components";
import Link from "next/link";
import { FiChevronsRight } from "react-icons/fi";
import { Card } from "../components/Card/Card";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  repo?: string;
  liveUrl?: string;
  morePath?: string;
}

interface ProjectSectionProps {
  projects: Project[];
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 20px;
  gap: 30px;

  @media screen and (min-width: 1024px) {
    margin: 50px 10%;
  }

  @media screen and (min-width: 1920px) {
    margin: 50px 20%;
  }
`;

const Header = styled.div`
  font-weight: 600;
  font-size: 28px;
  color: ${(p) => p.theme.font.color.default};
`;

const ProjectLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
`;

const ProjectFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-self: flex-end;
  width: 100%;
  margin-top: 10px;
`;

const ProjectLink = styled.a`
  text-decoration: none;
  font-weight: 600;
  color: ${(p) => p.theme.color.black};
  font-size: 1.05rem;
  margin-right: 15px;

  &:hover {
    color: #3b77ee;
    cursor: pointer;
  }

  &:last-of-type {
    margin-left: 15px;
  }

  &:first-of-type {
    margin-left: 0px;
  }
`;

const ChevronRight = styled(FiChevronsRight)`
  &:hover {
    color: #3b77ee;
    cursor: pointer;
  }
`;

export const ProjectSection = ({ projects }: ProjectSectionProps) => {
  return (
    <Container id="project-section">
      <Header>Projects</Header>
      {projects.map((project, index) => {
        return (
          <Card
            width={"100%"}
            maxWidth={"800px"}
            height={"fit-content"}
            borderRadius={"10px"}
            key={index}
          >
            <ProjectLayout>
              <div style={{ fontSize: "1.1rem", fontWeight: "600" }}>
                {project.title}
              </div>
              <div
                style={{
                  fontSize: "1.05rem",
                  color: "#33398f",
                  width: "100%",
                  paddingBottom: "2px",
                  borderBottom: "2px solid #5254548b",
                }}
              >
                Using: {project.technologies.join(", ")}
              </div>
              <p style={{ fontSize: "1.03rem", marginTop: "10px" }}>
                {project.description}
              </p>
              <ProjectFooter>
                <div>
                  {project.repo && (
                    <ProjectLink
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source
                    </ProjectLink>
                  )}
                  {project.liveUrl && "|"}
                  {project.liveUrl && (
                    <ProjectLink
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Version
                    </ProjectLink>
                  )}
                </div>
                {project.morePath && (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Link href={project.morePath} passHref={true}>
                      <ProjectLink
                        style={{
                          fontSize: "1.1rem",
                          marginRight: "3px",
                        }}
                      >
                        Read More
                      </ProjectLink>
                    </Link>
                    <Link href={project.morePath} passHref={true}>
                      <ChevronRight size={25} />
                    </Link>
                  </div>
                )}
              </ProjectFooter>
            </ProjectLayout>
          </Card>
        );
      })}
    </Container>
  );
};
