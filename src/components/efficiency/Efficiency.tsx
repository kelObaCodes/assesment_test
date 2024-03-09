import React from "react";

import Image from "next/image";
import Radar from "../../../public/images/radar.png";
import { useInView } from "react-intersection-observer";
import Wavy from "@/hooks/wavyAnimation";



import {
    Container,
    Section,
    FullWidthText,
    Row,
    Column,
    StyledColumn,
    StyledExploreColumn,
    Circle,
    StyledCircle,
    HorizontalButtons,
    StyledButton,
    Button,
    HorizontalLine,   
    Paragraph,

} from "./styles";


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
