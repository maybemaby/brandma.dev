import { useState, useContext, useEffect } from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { DarkModeContext } from "../DarkModeProvider";
import { SideBarItem } from "./SideBarItem";

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

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

const Dock = styled.nav<DockProps>`
  padding: 30px 5px 20px 0;
  position: fixed;
  right: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: ${(p) => p.theme.bg.secondary};
  width: ${(p) => (p.open ? "200px" : "0px")};
  z-index: 6;
  animation: ${SlideOut} 300ms cubic-bezier(0.23, 1, 0.32, 1);

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

const CollapsingDock = styled(Dock)`
  animation: ${SlideOut} 300ms cubic-bezier(0.23, 1, 0.32, 1) reverse;

  @media screen and (min-width: 1920px) {
    display: none;
  }
`;

interface SideBarProps {
  links: {
    name: string;
    path: string;
  }[];
}

export const SideBar = ({ links }: SideBarProps) => {
  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const darkMode = useContext(DarkModeContext);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && open) {
        toggleOpen();
        console.log("close");
      }
    });
  }, [open]);

  const toggleOpen = () => {
    setIsClosing(!open);
    setOpen(!open);
    // setTimeout(() => setIsClosing(false), 300);
    setIsClosing(false);
  };

  return (
    <div>
      <DockButton onClick={toggleOpen} open={open}>
        <Image
          src={
            darkMode?.darkOn
              ? "/baseline_menu_black_36dp.png"
              : "/baseline_menu_white_36dp.png"
          }
          alt="Menu icon"
          width={30}
          height={30}
        />
      </DockButton>
      {open && (
        <Dock open={open}>
          {links.map((link, index) => (
            <SideBarItem key={index} name={link.name} path={link.path} />
          ))}
        </Dock>
      )}
      {!open && isClosing && <CollapsingDock open={open}></CollapsingDock>}
    </div>
  );
};
