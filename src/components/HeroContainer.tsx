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
   <Circle
        icon={<span className="material-symbols-outlined">
        bolt
        </span>}
        color="#F2F2F2"
        height="70px"
        width="70px"
        leftPosition='-152px'
        topPosition='5px'
        iconColor={'#FE4A22'}
      />
   <Circle
        icon={<span className="material-symbols-outlined">
        timeline
        </span>}
        color="#FE4A22"
        height="70px"
        width="70px"
        leftPosition='-102px'
        topPosition='5px'
        iconColor={'#fff'}
      />
        <Paragraph>Analytics</Paragraph>

        <ImageContainer>
        <Image src={Laptop} alt='Laptop' width={250}/>
        <Circle
        icon={<span className="material-symbols-outlined">
        play_arrow
        </span>}
        color="#FE4A22"
        height="40px"
        width="40px"
        rightPosition='600px'
        topPosition='-124px'
        iconColor={'#fff'}
      />

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
