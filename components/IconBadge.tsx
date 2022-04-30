import styled from "styled-components";
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
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  width: fit-content;
  min-width: 100px;
  height: 35px;
  font-weight: 600;
  transform: scale(1.1);
  color: ${(p) => p.color ?? p.theme.color.primary};
`;

const Label = styled.span`
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
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
      <Icon size={20} />
      <Label>{label}</Label>
    </Badge>
  );
};
