import React, {useState} from "react";
import styled from "styled-components";
import Image from "next/image";
import Laptop from "../../public/images/laptop_.png";
import Wavy from "@/hooks/wavyAnimation";

import { useInView } from 'react-intersection-observer';
import Circle from "./Circle";

interface VerticalDivProps {
    left?: string;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    margin-bottom: 40px;
`;

const VerticalDiv = styled.div<VerticalDivProps>`
    margin-bottom: 1px;
    position: relative;
    ${(props) => (props.left ? `left: ${props.left};` : "")}
`;


const ImageContainer = styled.div`
    position: relative;
    > img {
        position: absolute;
        left: 350px;
        bottom: -53px;
    }
`;
const SpanSeparator = styled.span`
  margin: 0 50px;
`;
const GreySpan = styled.span`
  color: #CCCCCC;
  margin: 0 10px;
`;

const FullWidthText = styled.div`
    font-size: 35px;
    width: 100%;
    overflow: hidden;
    height: 86px;
`;
const Paragraph = styled.p`
    margin: 0;
    font-size: 86px;
    position: relative;
    bottom: -54px;
`;
const Hero: React.FC = () => {
    const { ref: text, inView: isText } = useInView()

    return (
        <Container>
            <VerticalDiv left="30%">
                <Circle
                    icon={
                        <span className="material-symbols-outlined">bolt</span>
                    }
                    color="#F2F2F2"
                    height="70px"
                    width="70px"
                    left="-152px"
                    top="5px"
                    iconcolor={"#FE4A22"}
                    className={isText ? 'expandable' : ''}
                />
                <Circle
                    icon={
                        <span className="material-symbols-outlined">
                            timeline
                        </span>
                    }
                    color="#FE4A22"
                    height="70px"
                    width="70px"
                    left="-102px"
                    top="5px"
                    iconcolor={"#fff"}
                    className={isText ? 'expandable' : ''}
                />
                  <FullWidthText ref={text}>
                    <Paragraph>
                        {
                            isText &&
                    <Wavy text="Analytics" />

                        }
                    
                    </Paragraph>
                    </FullWidthText>

                <ImageContainer>
                    <Image src={Laptop} alt="Laptop" width={290}
                    className={isText ? 'expandable' : ''}
                    />
                    <Circle
                        icon={
                            <span className="material-symbols-outlined">
                                play_arrow
                            </span>
                        }
                        color="#FE4A22"
                        height="40px"
                        width="40px"
                        right="648px"
                        top="-127px"
                        
                        iconcolor={"#fff"}
                        className={isText ? 'expandable' : ''}
                    />
                </ImageContainer>
            </VerticalDiv>
            <VerticalDiv left="7%">
            <FullWidthText>
                    <Paragraph>
                    {
                            isText &&
                    <Wavy text="that" />

                        }
                        {
                            isText &&
                            <Wavy text="helps" className="grey-span" />
                        }
                        {
                            isText &&
                            <Wavy text="you"/>
                        }
                        
                    </Paragraph>
                    </FullWidthText>
             
            </VerticalDiv>
            <VerticalDiv left="23%">
            <FullWidthText>
                    <Paragraph>
                    {
                            isText &&
                    <Wavy text="shape" />

                        }
                          <SpanSeparator/>
                        {
                            isText &&
                            <Wavy text="the future" />
                        }
                     
                        
                    </Paragraph>
                    <span>
                    <Circle
                        icon={
                            <span className="material-symbols-outlined">
                            signal_cellular_alt
                            </span>
                        }
                        color="#FFD025"
                        height="70px"
                        width="70px"
                        left="247px"
                        top="7px"
                        iconcolor={"#222"}
                        className={isText ? 'expandable' : ''}
                    />
                    {'        '}
                    </span>
               
                    </FullWidthText>
                  
            </VerticalDiv>
        </Container>
    );
};

export default Hero;
