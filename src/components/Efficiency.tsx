import React, { useState } from "react";

import styled, { keyframes } from "styled-components";
import Image from "next/image";
import Radar from "../../public/images/radar.png";
import { useInView } from "react-intersection-observer";
import Wavy from "@/hooks/wavyAnimation";

const slideRightAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const Container = styled.div`
    width: 100%;
    padding: 30px;
`;

const Section = styled.div`
    padding: 20px;
`;

const FullWidthText = styled.div`
    font-size: 35px;
    width: 100%;
    text-align: left;
    overflow: hidden;
    height: 70px;
    margin-bottom: 13px;
`;

const Row = styled.div`
    display: flex;
`;

const Column = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const StyledColumn = styled.div`
    display: flex;

    align-items: center;
    background-color: #ffd025;
    overflow: hidden;
    border-radius: 43px;
    height: 110px;
    width: 300px;
    > h3 {
        font-size: 73px;
        white-space: nowrap;
        font-weight: 400;
        animation: ${slideRightAnimation} 5s linear infinite;
    }
`;

const StyledExploreColumn = styled.div`
    margin-right: auto;
    font-weight: 200;
    font-size: 12px;
    > h3 {
        font-size: 13px;
        font-weight: 200;
        width: 480px;
    }
`;

const Circle = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #f2f2f2;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
    animation-delay: 0;
    opacity: 0;
`;
const StyledCircle = styled(Circle)`
    background-color: #ffd025;
    z-index: 0;
    position: relative;
    right: 22px;
    animation-delay: 0.3s;
    opacity: 0;
    > h3 {
        font-weight: 300;
    }

    > p {
        font-size: 8px;
        font-weight: 200;
        width: 60px;
        text-align: center;
        margin: 0 auto;
    }
`;

const HorizontalButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-left: auto;
`;

const StyledButton = styled.button`
    margin-left: 10px;
    background: #fe4a22;
    border: 1px solid #fe4a22;
    border-radius: 8px;
    height: 30px;
    width: 110px;
    color: #fff;
    font-size: 10px;
    font-weight: 100;
`;
const Button = styled(StyledButton)`
    margin-left: 10px;
    background: #f2f2f2;
    border: 1px solid #f2f2f2;
    color: #000;
    animation-duration: 2s;
`;
const HorizontalLine = styled.hr`
    border: 0;
    border-top: 1px solid #ccc;
    margin: 20px 0;
`;
const Paragraph = styled.p`
    margin: 0;
    font-size: 86px;
    position: relative;
    bottom: -54px;

`;

const Efficiency: React.FC = () => {

    const { ref: wavyRef, inView: isWavy } = useInView();
    const { ref: conversation, inView: isConversation } = useInView();

    return (
            <Container>
                <Section ref={wavyRef}>
                    <FullWidthText>
                        <Paragraph>
                            {isWavy && <Wavy text="Maximize" />}
                            {isWavy && (
                                <Wavy text="Efficiency" className="grey-span" />
                            )}
                        </Paragraph>
                    </FullWidthText>

                    <FullWidthText>
                        <Paragraph>
                            {isWavy && <Wavy text="With our intuitive" />}
                        </Paragraph>
                    </FullWidthText>
                </Section>
                <Section>
                    <Row>
                        <Column ref={conversation}>
                            <Circle
                                className={
                                    isConversation ? "expandable" : ""
                                }
                            >
                                <Image src={Radar} alt="graph" width={70} />
                            </Circle>
                            <StyledCircle
                                className={
                                    isConversation ? "expandable" : ""
                                }
                            >
                                <h3>45%</h3>
                                <p>System grow faster</p>
                            </StyledCircle>
                        </Column>
                        <StyledColumn
                            className={
                                isConversation
                                    ? "progress-bar-slider "
                                    : ""
                            }
                        >
                            <h3> Analytics service</h3>
                        </StyledColumn>
                    </Row>
                </Section>
                <HorizontalLine />
                <Section>
                    <Row>
                        <StyledExploreColumn>
                            <h3>
                                Explore traffic sources, page behavior,
                                conversations and more to gain deep insight into
                                your audience. With us your business doesn't
                                just adapt - it evolves
                            </h3>
                        </StyledExploreColumn>
                        <Column>
                            <HorizontalButtons>
                                <Button
                                    className={
                                        isConversation ? "expandable" : ""
                                    }
                                >
                                    Request a demo
                                </Button>
                                <StyledButton
                                    className={
                                        isConversation ? "expandable" : ""
                                    }
                                >
                                    Start for free{" "}
                                </StyledButton>
                            </HorizontalButtons>
                        </Column>
                    </Row>
                </Section>
            </Container>
    );
};

export default Efficiency;
