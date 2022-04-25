import { useContext, useState } from "react";
import styled, { keyframes } from "styled-components";
import { MoonIcon } from "./Icons/MoonIcon";
import { DarkModeContext } from "./DarkModeProvider";
import { SunIcon } from "./Icons/SunIcon";

const rotateAndZoom = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

const reverseRotate = keyframes`
  from {
    transform: rotate(360deg);
  } to {
    transform: rotate(0deg);
  }
`;

const DarkModeButton = styled.button`
  position: fixed;
  top: 2rem;
  right: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  animation: ${rotateAndZoom} 2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

// ${rotateAndZoom} 2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

export const DarkModeToggle = ({ onClick }: { onClick: () => void }) => {
  const darkMode = useContext(DarkModeContext);

  return (
    <DarkModeButton onClick={onClick}>
      {(darkMode?.darkOn && <MoonIcon />) || (!darkMode?.darkOn && <SunIcon />)}
    </DarkModeButton>
  );
};
