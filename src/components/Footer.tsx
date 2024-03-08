import React from "react";
import styled from "styled-components";
import Image from "next/image";

import BarCode from "../../public/images/bar_code.png";
import { useInView } from "react-intersection-observer";
import Wavy from "@/hooks/wavyAnimation";

const FooterContainer = styled.div`
    background-color: #0d0d0d;
    color: #fff;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    padding: 40px 30px 20px;
`;

const Row = styled.div`
    display: flex;
    padding: 20px 0;
`;
const StyledRow = styled.div`
    display: flex;
    padding: 20px 0;
    align-items: center;
`;

const Column = styled.div`
    flex: 1;
`;

const HorizontalMenu = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

const HorizontalMenuItem = styled.li`
    display: inline-block;
    margin-right: 10px;
    color: #999;
`;

const VerticalMenu = styled.div`
    display: flex;
    flex-direction: column;
`;
const StyledVerticalMenu = styled(VerticalMenu)`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    text-align: end;
`;

const VerticalMenuItem = styled.div`
    margin-bottom: 10px;
`;

const Logo = styled.img`
    width: 100px;
    height: auto;
`;
const StyledHorizontalMenuItem = styled.div`
    font-size: 22px;
    text-align: right;
    margin-left: auto;
`;
const StyledBarCodeColumn = styled(Column)`
    position: relative;
    text-align: end;
    img {
        opacity: 0;
        margin-left: auto;
    }
`;
const StyledRowColumn = styled(Row)`
    position: relative;
    display: flex;
    align-items: center;
`;
const StyledTradeMarkColumn = styled.div`
    font-size: 36px;
    position: relative;
    top: 18px;

    > h1 {
        position: relative;
        top: 65px;
    }
`;
const StyledColorText = styled.div`
    color: #999;
`;
const StyledHorizontalBottomMenu = styled.div`
  
    position: relative;
    left: 100px;
    display: flex;
    justify-content: space-between;
    gap: 15px;
    width: 247px;
`;
const StyledHorizontalBottomMenuItem = styled.div`
    color: #999;
`;

const FullWidthText = styled.div`
    font-size: 35px;
    width: 100%;
    text-align: left;
    overflow: hidden;
    height: 86px;
    margin-bottom: 40px;
    `

const HrSeparator = styled.hr`
    background-color: #4a4a4a;
    height: 1px;
    border: none;
    margin: 20px 0;
`;
const Paragraph = styled.p`
    margin: 0;
    font-size: 86px;
    position: relative;
    bottom: -54px;
`;
const StyledHorizontalColumn = styled(Column)`
    margin: 0;
    position: relative;
    right: 32px;
    font-size: 12px;
`;

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
