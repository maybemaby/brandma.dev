import React from "react";
import styled, { CSSProperties } from "styled-components";

interface CardProps {
  children?: React.ReactNode;
  width: string;
  maxWidth?: string;
  height: string;
  bgColor?: string;
  borderRadius?: string;
  styles?: CSSProperties;
}

interface ContainerProps {
  width: string;
  maxWidth?: string;
  height: string;
  bgColor?: string;
  borderRadius?: string;
  styles?: CSSProperties;
}

const Container = styled.div<ContainerProps>`
  width: ${(p) => p.width};
  max-width: ${(p) => p.maxWidth};
  height: ${(p) => p.height};
  color: ${(p) => (p.theme.mode === "dark" ? "#b4bdc7" : p.theme.color.black)};
  background-color: ${(p) =>
    p.theme.mode === "dark" ? "rgb(40, 40, 46)" : p.theme.color.white};
  border-radius: ${(p) => p.borderRadius ?? "none"};
  box-shadow: ${(p) =>
    p.theme.mode === "dark" ? "none" : "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px"};
  border: ${(p) =>
    p.theme.mode === "dark" ? "3px solid rgb(57, 57, 58)" : "none"};
`;

export const Card = (props: CardProps) => {
  return <Container {...props}>{props.children}</Container>;
};
