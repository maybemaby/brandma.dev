import { useState } from "react";
import styled, { keyframes } from "styled-components";

interface DockProps {
  open: boolean;
}

const SlideOut = keyframes`
  from {
    width: 0;
  } to {
    width: 200px;
  }
`;

const DockButton = styled.button<DockProps>`
  position: fixed;
  top: 7rem;
  right: ${(p) => (p.open ? "200px" : "0px")};
  border-top-left-radius: 30%;
  border-bottom-left-radius: 30%;
  border-top-right-radius: -10%;
  height: 45px;
  width: 35px;
  border: none;
  cursor: pointer;
  background-color: ${(p) => p.theme.bg.secondary};
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  z-index: 2;
  &:hover {
    width: ${(p) => (p.open ? "30px" : "45px")};
  }
`;

const Dock = styled.nav<DockProps>`
  position: fixed;
  right: 0;
  height: 100%;
  background-color: ${(p) => p.theme.bg.secondary};
  width: ${(p) => (p.open ? "200px" : "0px")};
  z-index: 2;
  animation: ${SlideOut} 300ms cubic-bezier(0.23, 1, 0.32, 1);
`;

const CollapsingDock = styled(Dock)`
  animation: ${SlideOut} 200ms cubic-bezier(0.23, 1, 0.32, 1) reverse;
`;

export const SideBar = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <DockButton onClick={toggleOpen} open={open}></DockButton>
      {open && <Dock open={open}></Dock>}
      {!open && <CollapsingDock open={open}></CollapsingDock>}
    </div>
  );
};
