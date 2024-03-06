import React from 'react';
import styled from 'styled-components';

interface CircleProps {
  icon: React.ReactNode;
  color: string;
  height: string;
  width: string;
}

const CircleContainer = styled.div<{ color: string; height: string; width: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: 50%;
`;

const Circle: React.FC<CircleProps> = ({ icon, color, height, width }) => {
  return (
    <CircleContainer color={color} height={height} width={width}>
      {icon}
    </CircleContainer>
  );
};

export default Circle;
