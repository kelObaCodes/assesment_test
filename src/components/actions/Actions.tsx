import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

import Deskptop from "../../../public/images/desktop.png";
import Mobile from "../../../public/images/mobile.png";
import Menu from "../../../public/images/menu.png";
import background from "../../../public/images/background.png";
import { useInView } from 'react-intersection-observer';

import {Container, Section, Column, Title, ButtonContainer, Button,

    ButtonText, PlusIcon, SecondSection, BigText, BigReveal


} from './styles'



const Actions: React.FC= () => {
    const { ref: actionRef, inView: isAction } = useInView()
    const { ref: bigTextRef, inView: isBigText } = useInView()
    
    return (
            <Container>
                <Section>
                    <Column>
                        <Title className={isAction ? "slideIn " : ""}>
                            Turning data into real actions and ideas.
                        </Title>
                        <ButtonContainer >
                            <Button
                                className={isAction ? "slideIn " : ""}
                                ref={actionRef}
                            >
                                <ButtonText>Instant insights</ButtonText>
                                <PlusIcon>
                                    <span className="material-symbols-outlined">
                                        add
                                    </span>
                                </PlusIcon>
                            </Button>
                            <Button
                                className={isAction ? "slideIn " : ""}
                            >
                                <ButtonText>AI technology</ButtonText>
                                <PlusIcon>
                                    <span className="material-symbols-outlined">
                                        add
                                    </span>
                                </PlusIcon>
                            </Button>
                            <Button
                                className={isAction ? "slideIn " : ""}
                            >
                                <ButtonText>Easy integration</ButtonText>
                                <PlusIcon>
                                    <span className="material-symbols-outlined">
                                        add
                                    </span>
                                </PlusIcon>
                            </Button>
                        </ButtonContainer>
                    </Column>
                    <Column>
                        <Image
                            src={Deskptop}
                            alt="Des;top"
                            className={isAction ? "slideIn " : ""}
                            width={590}
                        />
                        <Image
                            src={Mobile}
                            alt="Mobile"
                            className={`${
                                isAction ? "slideIn" : ""
                            }  mobile-device`}
                            width={190}
                        />
                        <Image
                            src={Menu}
                            alt="Menu"
                            className={`${
                                isAction ? "slideIn" : ""
                            }  menu`}
                            width={177}
                        />
                    </Column>
                </Section>
                <SecondSection ref={bigTextRef}>
                    <BigReveal
                   className={`${
                    isBigText ? "reveal-bar" : ""
                }`}
                    />
                    <BigText>Moniepoint</BigText>
                
                </SecondSection>
            </Container>
    );
};

export default Actions;
