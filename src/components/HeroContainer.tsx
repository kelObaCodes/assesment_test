import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Laptop from "../../public/images/laptop.png"

import Circle from './Circle';

interface VerticalDivProps {
    leftPosition?: string;
  }

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

const VerticalDiv = styled.div<VerticalDivProps>`
  margin-bottom: 1px;
  position: relative;
  ${(props) => (props.leftPosition ? `left: ${props.leftPosition};` : '')}
`;

const Paragraph = styled.p`
  margin: 0;
  font-size: 86px;
`;
const ImageContainer = styled.div`
 position: relative;
 > img {
    position: absolute;
    left: 402px;
    bottom: -53px 
 }
`;

const Hero: React.FC = () => {
  return (
    <Container>
   <VerticalDiv leftPosition="30%">
        <Paragraph>Analytics</Paragraph>
        <ImageContainer>
        <Image src={Laptop} alt='Laptop' width={250}/>


        </ImageContainer>
      </VerticalDiv>
      <VerticalDiv leftPosition="6%">
        <Paragraph>that helps you</Paragraph>
      </VerticalDiv>
      <VerticalDiv leftPosition="20%">
        <Paragraph>shape the future</Paragraph>
      </VerticalDiv>
    </Container>
  );
};

export default Hero;
