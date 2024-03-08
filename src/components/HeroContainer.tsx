import React, {useState} from "react";
import AnimationOnScroll from "../hooks/inView";
import styled from "styled-components";
import Image from "next/image";
import Laptop from "../../public/images/laptop.png";

import Circle from "./Circle";
interface ChildComponentProps {
    isInView?: boolean;
  }

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

const Paragraph = styled.p`
    margin: 0;
    font-size: 86px;
`;
const ImageContainer = styled.div`
    position: relative;
    > img {
        position: absolute;
        left: 402px;
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

const Hero: React.FC<ChildComponentProps> = () => {
    const [isInViewOfHero, setIsInViewOfhero] = useState<boolean>(false);

    return (
        <AnimationOnScroll setIsInView={setIsInViewOfhero}>
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
                    className={isInViewOfHero ? 'expandable' : ''}
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
                    className={isInViewOfHero ? 'expandable' : ''}
                />
                <Paragraph>Analytics</Paragraph>

                <ImageContainer>
                    <Image src={Laptop} alt="Laptop" width={250}
                    className={isInViewOfHero ? 'expandable' : ''}
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
                        right="600px"
                        top="-124px"
                        iconcolor={"#fff"}
                        className={isInViewOfHero ? 'expandable' : ''}
                    />
                </ImageContainer>
            </VerticalDiv>
            <VerticalDiv left="6%">
                <Paragraph>that 
                    <GreySpan>helps</GreySpan>
                     you</Paragraph>
            </VerticalDiv>
            <VerticalDiv left="20%">
                <Paragraph>shape
                   <SpanSeparator/>
                     the future</Paragraph>
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
                        left="240px"
                        top="30px"
                        iconcolor={"#222"}
                        className={isInViewOfHero ? 'expandable' : ''}
                    />
                    {'        '}
                    </span>
            </VerticalDiv>
        </Container>
        </AnimationOnScroll>
    );
};

export default Hero;
