import React from "react";
import styled from "styled-components";
import Image from "next/image";

import BarCode from "../../../public/images/bar_code.png";
import { useInView } from "react-intersection-observer";
import Wavy from "@/hooks/wavyAnimation";

import {
    FooterContainer,
    StyledRow,
    FullWidthText,
    Row,
    Column,
    HorizontalMenu,
    HorizontalMenuItem,
    VerticalMenu,
    StyledVerticalMenu,
    VerticalMenuItem,
    StyledHorizontalMenuItem,
    StyledBarCodeColumn,
    StyledRowColumn,   
    StyledTradeMarkColumn,
    StyledColorText,
    StyledHorizontalBottomMenu,
    StyledHorizontalBottomMenuItem,
    StyledHorizontalColumn,
    Paragraph,
    HrSeparator
 

} from "./styles";




const Footer: React.FC= () => {

    const { ref: logoRef, inView: isLogo } = useInView();
    const { ref: menuRef, inView: isMenu } = useInView();

    return (
            <FooterContainer>
                <StyledRow>
                    <Column>
                        <HorizontalMenu
                        ref={menuRef}
                            className={isMenu ? "slideIn" : ""}
                        >
                            <HorizontalMenuItem>About</HorizontalMenuItem>
                            <HorizontalMenuItem>Why Us</HorizontalMenuItem>
                            <HorizontalMenuItem>Platform</HorizontalMenuItem>
                            <HorizontalMenuItem>Pricing</HorizontalMenuItem>
                            <HorizontalMenuItem>Contacts</HorizontalMenuItem>
                        </HorizontalMenu>
                    </Column>
                    <Column>
                        <StyledHorizontalMenuItem>
                            <h2 className={isMenu ? "slideIn" : ""}>
                                help@moniepoint.com
                            </h2>
                        </StyledHorizontalMenuItem>
                    </Column>
                </StyledRow>
                <HrSeparator />
                <Row className={isMenu ? "slideIn" : ""}>
                    <Column className={isMenu ? "slideIn" : ""}>
                        <VerticalMenu>
                            <VerticalMenuItem>
                                Warrensville Heights
                            </VerticalMenuItem>
                            <StyledColorText>
                                14418 Vineyard Drive, NC
                            </StyledColorText>
                            <StyledColorText>44128</StyledColorText>
                        </VerticalMenu>
                    </Column>
                    <Column>
                        <VerticalMenu>
                            <VerticalMenuItem>Saint Louis</VerticalMenuItem>
                            <StyledColorText>1366 Penn Street</StyledColorText>
                            <StyledColorText>63101</StyledColorText>
                        </VerticalMenu>
                    </Column>
                    <Column>
                        <StyledVerticalMenu>
                            <VerticalMenuItem>Linkedin</VerticalMenuItem>
                            <VerticalMenuItem>Instagram</VerticalMenuItem>
                            <VerticalMenuItem>Facebook</VerticalMenuItem>
                        </StyledVerticalMenu>
                    </Column>
                </Row>
                <StyledRowColumn>
                    <StyledTradeMarkColumn ref={logoRef}>
                        <FullWidthText>
                        <Paragraph>{isLogo && <Wavy text="Moniepoint&reg;" />} </Paragraph>

                        </FullWidthText>

                        {/* <h1>Moniepoint </h1> */}
                    </StyledTradeMarkColumn>
                    <StyledHorizontalColumn className={isLogo ? "slideIn" : ""}>
                        <StyledHorizontalBottomMenu>
                            <StyledHorizontalBottomMenuItem>
                                Privacy policy
                            </StyledHorizontalBottomMenuItem>
                            <StyledHorizontalBottomMenuItem>
                                License Agreement
                            </StyledHorizontalBottomMenuItem>
                        </StyledHorizontalBottomMenu>
                    </StyledHorizontalColumn>
                    <StyledBarCodeColumn>
                        <Image
                            src={BarCode}
                            alt="Bar code"
                            width={100}
                            className={isLogo ? "expandable" : ""}
                        />
                    </StyledBarCodeColumn>
                </StyledRowColumn>
            </FooterContainer>
    );
};

export default Footer;
