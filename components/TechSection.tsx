import styled from "styled-components";
import { FaReact } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { IconBadge } from "./IconBadge";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h2`
  font-weight: 600;
  font-size: 28px;
  margin-bottom: 10px;
  color: ${(p) => p.theme.font.color.default};
`;

const Subtitle = styled.h3`
  margin-top: 5px;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  color: ${(p) => p.theme.font.color.default};
`;

const BadgeGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 5px 10px;
  max-width: 500px;

  @media screen and (min-width: 728px) {
    gap: 20px;
    max-width: 700px;
  }
`;

interface TechSectionProps {
  badges: React.ReactNode[];
}

export const TechSection = ({ badges }: TechSectionProps) => {
  return (
    <Container id="tech-section">
      <Header>Tech I Use</Header>
      <Subtitle>
        These technologies are ones I am familiar with and have used in projects
      </Subtitle>
      <BadgeGrid>{badges}</BadgeGrid>
    </Container>
  );
};
