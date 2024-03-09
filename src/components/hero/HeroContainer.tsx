import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Laptop from "../../../public/images/laptop_.png";
import Wavy from "@/hooks/wavyAnimation";

import { useInView } from 'react-intersection-observer';
import Circle from "../Circle";



import {
    Container,
    VerticalDiv,
    FullWidthText,
    ImageContainer,
    SpanSeparator,
    Paragraph 

} from "./styles";


const Hero: React.FC = () => {
    const { ref: text, inView: isText } = useInView()

    return (
        <Container>
            <VerticalDiv left="30%">
                <Circle
                    icon={
                        <span 
                        className={`material-symbols-outlined ${isText ? 'rotate-animation ': ''}`}
                       >bolt</span>
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
                        <span 
                        
                        className={`material-symbols-outlined ${isText ? 'rotate-animation ': ''}`}
                        >
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
                        right="634px"
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
                            <span 
                            
                            className={`material-symbols-outlined ${isText ? 'expandable ': ''}`}
                       >
                            signal_cellular_alt
                            </span>
                        }
                        color="#FFD025"
                        height="70px"
                        width="70px"
                        left="247px"
                        top="7px"
                        iconcolor={"#222"}
                        className={isText ? 'expandable' : 'no-opacity'}
                    />
                    {'        '}
                    </span>
               
                    </FullWidthText>
                  
            </VerticalDiv>
        </Container>
    );
};

export default Hero;
