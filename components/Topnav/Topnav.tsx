import styled from "styled-components";
import Link from "next/link";

const Container = styled.nav`
  display: none;
  font-size: 1.2rem;
  font-weight: 600;
  align-items: center;
  color: ${(p) => p.theme.font.color.default};
  margin: 0 50px;

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }
`;

const NavLink = styled.a`
  text-decoration: none;

  &:visited {
    color: inherit;
  }
`;

export const Topnav = () => {
  return (
    <Container>
      <Link href="/" passHref={true}>
        <NavLink>Home</NavLink>
      </Link>
      <Link href="/resume" passHref={true}>
        <NavLink>Resume</NavLink>
      </Link>
    </Container>
  );
};
