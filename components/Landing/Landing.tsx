import styled from "styled-components";
import { FaGlobeAmericas } from "react-icons/fa";

const Container = styled.div`
  height: 95vh;
  color: ${(p) => p.theme.font.color.default};
  margin: 0;
  width: 100%;
  text-align: left;
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.5;
  font-family: "Montserrat", "Segoe-UI", sans-serif;

  @media screen and (min-width: 768px) {
    padding: 100px 20%;
  }
`;

const WhereIAm = styled.div`
  color: ${(p) => (p.theme.mode === "dark" ? "#733bcc" : "#c21279")};
  font-size: 1.5rem;
  margin-top: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  gap: 20px;
  transition: color 100ms linear;

  &:hover {
    color: ${(p) => (p.theme.mode === "dark" ? "#9154f3" : "#e42494")};
  }
`;

export const Landing = () => {
  return (
    <Container>
      <div style={{ fontSize: "2.5rem" }}>Brandon Ma</div>
      <div>Fullstack Developer</div>
      <WhereIAm>
        <FaGlobeAmericas />
        <span>San Jose, California</span>
      </WhereIAm>
    </Container>
  );
};
