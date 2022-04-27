import Link from "next/link";
import styled from "styled-components";

interface SideBarProps {
  name: string;
  path: string;
}

const SideBarLink = styled.a`
  text-decoration: none;
  color: ${(p) =>
    p.theme.mode === "dark" ? p.theme.color.black : p.theme.color.white};
  cursor: pointer;
  margin-left: 20px;
  font-size: ${(p) => p.theme.fontSizes[4]};
  font-weight: ${(p) => p.theme.fontWeights.subtitle};
  max-width: 100px;
  overflow: hidden;
`;

export const SideBarItem = ({ name, path }: SideBarProps) => {
  return (
    <Link href={path} passHref={true}>
      <SideBarLink>{name}</SideBarLink>
    </Link>
  );
};
