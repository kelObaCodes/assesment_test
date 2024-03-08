import React, {useState} from "react";
import styled from "styled-components";
import Image from "next/image";
import AnimationOnScroll from "../hooks/inView";

import BarCode from "../../public/images/bar_code.png";

interface ChildComponentProps {
    isInView?: boolean;
  }

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
`;
const StyledColorText = styled.div`
    color: #999;
`;
const StyledHorizontalBottomMenu = styled.div`
    display: flex;
    justify-content: space-around;
    position: relative;
    left: 100px;
`;
const StyledHorizontalBottomMenuItem = styled.div`
    color: #999;
`;
const HrSeparator = styled.hr`
    background-color: #4a4a4a;
    height: 1px;
    border: none;
    margin: 20px 0;
`;

const Footer: React.FC<ChildComponentProps> = () => {
    const [isInViewOfFooter, setIsInViewFooter] = useState<boolean>(false);


    return (
        <AnimationOnScroll setIsInView={setIsInViewFooter}>
        <FooterContainer>
            <StyledRow>
                <Column>
                    <HorizontalMenu  className={isInViewOfFooter ? 'slideIn' : ''}>
                        <HorizontalMenuItem>About</HorizontalMenuItem>
                        <HorizontalMenuItem>Why Us</HorizontalMenuItem>
                        <HorizontalMenuItem>Platform</HorizontalMenuItem>
                        <HorizontalMenuItem>Pricing</HorizontalMenuItem>
                        <HorizontalMenuItem>Contacts</HorizontalMenuItem>
                    </HorizontalMenu>
                </Column>
                <Column>
                    <StyledHorizontalMenuItem>
                        <h2
                            className={isInViewOfFooter ? 'slideIn' : ''}
                        >help@moniepoint.com</h2>
                    </StyledHorizontalMenuItem>
                </Column>
            </StyledRow>
            <HrSeparator/>
            <Row
              className={isInViewOfFooter ? 'slideIn' : ''}
            >
                <Column
                  className={isInViewOfFooter ? 'slideIn' : ''}
                >
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
                <StyledTradeMarkColumn>
                    <h1>Moniepoint &reg;</h1>
                </StyledTradeMarkColumn>
                <Column className={isInViewOfFooter ? 'slideIn' : ''}>
                    <StyledHorizontalBottomMenu>
                        <StyledHorizontalBottomMenuItem>
                            Privacy policy
                        </StyledHorizontalBottomMenuItem>
                        <StyledHorizontalBottomMenuItem>
                            License Agreement
                        </StyledHorizontalBottomMenuItem>
                    </StyledHorizontalBottomMenu>
                </Column>
                <StyledBarCodeColumn>
                    <Image src={BarCode} alt="Bar code" width={100}
                    className={isInViewOfFooter ? 'expandable' : ''}/>
                </StyledBarCodeColumn>
            </StyledRowColumn>
        </FooterContainer>
        </AnimationOnScroll>
    );
};

export default Footer;
