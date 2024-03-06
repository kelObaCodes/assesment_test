import React from 'react';
import styled from 'styled-components';

interface CircleProps {
  icon: React.ReactNode;
  color: string;
  height: string;
  width: string;
  leftPosition?: string;
  topPosition?: string;
  rightPosition?: string;
  iconColor?: string;
}

const CircleContainer = styled.div<{
  color: string;
  height: string;
  width: string;
  leftPosition?: string;
  topPosition?: string;
  rightPosition?: string;
}>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: 50%;
  left: ${(props) => props.leftPosition};
  top: ${(props) => props.topPosition};
  right: ${(props) => props.rightPosition};
`;

const Icon = styled.div<{ iconColor?: string }>`
  color: ${(props) => props.iconColor || 'inherit'};
`;

const Circle: React.FC<CircleProps> = ({
  icon,
  color,
  height,
  width,
  leftPosition,
  topPosition,
  rightPosition,
  iconColor
}) => {
  return (
    <CircleContainer
      color={color}
      height={height}
      width={width}
      leftPosition={leftPosition}
      topPosition={topPosition}
      rightPosition={rightPosition}
    >
      <Icon iconColor={iconColor}>{icon}</Icon>
    </CircleContainer>
  );
};

export default Circle;
