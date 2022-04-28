import styled from "styled-components";
import { FaReact } from "react-icons/fa";
import { IconType } from "react-icons";

interface BadgeStyleProps {
  bgColor?: string;
  color?: string;
}

const Badge = styled.div<BadgeStyleProps>`
  background-color: ${(p) => p.bgColor ?? p.theme.bg.secondary};
  border-radius: 20px;
  padding: 5px 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  max-width: 100px;
  width: fit-content;
  font-weight: 600;
  transform: scale(1.1);
  color: ${(p) => p.color ?? p.theme.color.primary};
`;

const Label = styled.span`
  font-size: 16px;
`;

interface IconBadgeProps {
  label: string;
  bgColor?: string;
  color?: string;
  Icon: IconType;
}

export const IconBadge = ({ label, bgColor, color, Icon }: IconBadgeProps) => {
  return (
    <Badge color={color} bgColor={bgColor}>
      <Icon size={"1.5em"} />
      <Label>{label}</Label>
    </Badge>
  );
};
