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
  background-color: ${(p) => p.bgColor ?? p.theme.color.white};
  border-radius: ${(p) => p.borderRadius ?? "none"};
  box-shadow: ${(p) =>
    p.theme.mode === "dark"
      ? "rgba(104, 104, 105, 0.705) 2.4px 2.4px 3.2px"
      : "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px"};
`;

export const Card = (props: CardProps) => {
  return <Container {...props}>{props.children}</Container>;
};
