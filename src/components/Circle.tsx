import React from 'react';
import styled from 'styled-components';

interface CircleProps {
  icon: React.ReactNode;
  color: string;
  height: string;
  width: string;
  left?: string;
  top?: string;
  right?: string;
  iconcolor?: string;
}

const CircleContainer = styled.div<{
  color: string;
  height: string;
  width: string;
  left?: string;
  top?: string;
  right?: string;
}>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: 50%;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
`;

const Icon = styled.div<{ iconcolor?: string }>`
  color: ${(props) => props.iconcolor || 'inherit'};
`;

const Circle: React.FC<CircleProps> = ({
  icon,
  color,
  height,
  width,
  left,
  top,
  right,
  iconcolor
}) => {
  return (
    <CircleContainer
      color={color}
      height={height}
      width={width}
      left={left}
      top={top}
      right={right}
    >
      <Icon iconcolor={iconcolor}>{icon}</Icon>
    </CircleContainer>
  );
};

export default Circle;
