import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Graph from "../../public/images/graph.png";
import DP from "../../public/images/dp_1.png";
import DP2 from "../../public/images/dp_2.png";
import background from "../../public/images/background.png";
import Counter from "../hooks/countAnimation";
import Wavy from "@/hooks/wavyAnimation";

import { useInView } from 'react-intersection-observer';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    padding: 0 40px;
`;

const FirstSection = styled.div`
    width: 100%;
    padding: 20px;
    margin-top: 40px;
`;

const FullWidthText = styled.div`
    font-size: 35px;
    width: 100%;
    text-align: left;
    overflow: hidden;
    height: 86px;
    margin-bottom: 13px;
`;

const FirstSectionRow = styled.div`
    display: flex;
`;

const FirstSectionColumn = styled.div`
    flex: 1;
    background-color: #f9f9f9;
    margin: 5px;
    border-radius: 15px;
    border: 1px solid #ededed;
    background-image: url(${background.src});
    background-position-x: -19px;
    background-repeat: repeat;
    padding-top: 40px;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
        opacity: 0;
`;

const LightGreyColumn = styled.div`
    padding: 10px;
    margin: 5px;
    position: relative;
    margin-bottom: 18px;
`;
const StyledLightGreyColumn = styled(LightGreyColumn)`
    padding: 10px;
    margin: 5px;
    position: relative;
    margin-top: -65px;
    margin-bottom: 40px;
`;

const RowText = styled.div``;

const Title = styled.h2`
    text-align: center;
    font-weight: 300;
    font-size: 18px;
    margin-bottom: 20px;
`;

const Description = styled.p`
    text-align: center;
    font-size: 13px;
    width: 305px;
    margin: 0 auto;
    font-weight: 200;
    padding: 5px 0;
`;
const StyledDescription = styled(Description)`
    width: 280px;
`;

const SecondSection = styled.div`
    margin: 80px 0 100px 0;
`;

const Button = styled.button`
    background-color: #fe4a22;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    font-size: 20px;
    height: 80px;
    cursor: pointer;
    width: 80px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: center;
    opacity: 0;
    align-items: center;
    box-shadow: #fe4a22 0px 7px 12px 0px;
    > span {
        font-size: 44px;
        rotate: 120deg;
    }
`;

const BigTextCover = styled.div`
    overflow: hidden;
    height: 100px;
    margin: 20px 0;
`;
const BigText = styled.h1`
    font-size: 90px;
    text-align: center;
    margin-top: 14px;
    font-weight: 400;
    position: relative;
    top: 53px;
`;

const DescriptionText = styled.p`
    text-align: center;
    color: #b2b2b2;
`;

const CenteredButtons = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`;

const CenteredButton1 = styled.button`
    margin: 0 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 15px;
    font-size: 16px;
    cursor: pointer;
    background: #f2f2f2;
    font-size: 11px;
`;
const CenteredButton2 = styled(CenteredButton1)`
    background: #fe4a22;
    color: #fff;
`;
const Paragraph = styled.p`
    margin: 0;
    font-size: 86px;
    position: relative;
    bottom: -54px;
`;

const Insights = styled.div`
    width: 300px;
    height: 180px;
    border-radius: 15px;
    background: #fff;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    border: 1px solid #ededed;
    justify-content: space-between;
    margin-top: 40px;
    position: relative;
    z-index: 3;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    > span {
        font-size: 12px;
    }
`;
const SecondInsights = styled(Insights)`
    position: absolute;
    bottom: 141px;
    height: 80px;
    left: 81px;
    width: 250px;
    z-index: 1;
`;
const ThirdInsights = styled(SecondInsights)`
    position: absolute;
    bottom: 161px;
    height: 80px;
    width: 180px;
    z-index: 0;
    left: 123px;
`;
const InsightsChild = styled.div`
    flex-direction: column;

    display: flex;
`;
const ConversationsInsights = styled(Insights)`
    width: 170px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 230px;
    right: 88px;
    > h3 {
        font-size: 13px;
        font-weight: 200;
        text-align: center;
        margin: 0 auto;
    }
    span {
        background: #fff;
        border-radius: 50%;
        padding: 5px;
        position: absolute;
        font-size: 11px;
        left: 25px;
        border: 4px solid #f2f2f2;
        top: 66px;
    }
    > p {
        font-weight: 200;
        text-align: center;
        font-size: 11px;
        width: 84px;
        margin-top: 10px;
    }
`;

const PercentageBox = styled.div`
    width: 100px;
    background: #ffd025;
    height: 70px;
    margin-top: 12px;
    border-radius: 20px;
    font-size: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const SalesInsights = styled(Insights)`
    width: 190px;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    height: 230px;
    position: absolute;
    bottom: -9px;
    right: 41px;

    > h3 {
        color: #848484;
        font-size: 13px;
        font-weight: 200;
    }
    > hr {
        width: 100%;
        background-color: #848484;
        height: 1px;
        border: none;
        margin: 5px 0;
    }
`;
const SeparatorCover = styled.div`
    display: flex;
    width: 100%;
    gap: 2px;
    div:nth-child(1) {
        animation-delay: 0s;
    }
    div:nth-child(2) {
        animation-delay: 2s;
    }
    div:nth-child(3) {
        animation-delay: 3s;
    }
`;
const Separator = styled.div<{ bgcolor?: string }>`
    display: flex;

    border-radius: 10px;
    height: 4px;
    background: ${(props) => props.bgcolor};
`;
const UserSales = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    img {
        margin-right: 10px;
    }
    h3 {
        font-size: 13px;
        color: #848484;
        font-weight: 200;
    }

    p {
        margin-left: auto;
        font-size: 12px;
    }
`;

const TitleContainer = styled.div`
    background: #f9f9f9;
    height: 120px;
`;
const TitleText = styled.div`
    display: flex;
    align-items: center;
    span {
        font-size: 12px;
    }
    > h3 {
        font-weight: 200;
        font-size: 13px;
        margin-left: 5px;
    }
`;
const TotalProfit = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 100px;
    position: relative;
    top: 23px;
    > h3 {
        font-weight: 200;
        font-size: 14px;
        color: #a9a9a9;
    }
    > h2 {
        font-size: 19px;
        font-weight: 400;
        margin-top: 4px;
    }
    > button {
        background: #ffd025;
        font-size: 7px;
        width: 95px;
        color: #000;
        margin-top: auto;
        margin-left: 0;
    }
`;
const Data: React.FC = () => {

    const { ref: getStarted, inView: isGetStarted } = useInView()
    const { ref: conversation, inView: isConversation } = useInView()
    const { ref: text, inView: isText } = useInView()


    return (
        <Container>
            <FirstSection>
            <FullWidthText ref={text}>
                    <Paragraph>
                        {
                            isText &&
                    <Wavy text="We give you full" />

                        }
                    
                    </Paragraph>
                    </FullWidthText>

            <FullWidthText>
                    <Paragraph>
                     
                        {
                            isText &&
                            <Wavy text="control" className="grey-span" />
                        }
                           {
                            isText &&
                    <Wavy text="over your data" />

                        }
                    </Paragraph>
                    </FullWidthText>

                <FirstSectionRow
                   ref={conversation}
                >
                    
                    <FirstSectionColumn  className={isConversation ? "slideIn" : ""}
                 
                    >
                        <StyledLightGreyColumn>
                            <ConversationsInsights
                             className={isConversation ? "slide-in-left " : ""}
                            >
                                <h3>Conversation rate</h3>
                                <PercentageBox 
                                    className={isConversation ? "reveal-percent" : ""}
                                >
                                    2.3%
                                    <span className="material-symbols-outlined">
                                        monitoring
                                    </span>
                                </PercentageBox>
                                <p>Percentage of website visitors</p>
                            </ConversationsInsights>
                            <SalesInsights
                              className={isConversation ? "slide-in-right " : ""}
                            >
                                <h3>Sales revenue</h3>
                                <h2>
                                    $
                                    {
                                        isConversation && 
                                        <Counter count={131} />
                                    } K
                                </h2>
                                <SeparatorCover>
                                    <Separator
                                        bgcolor="#4AC785"
                                        className={isConversation ? "progress-bar" : ""}
                                    ></Separator>
                                    <Separator
                                        bgcolor="#FFCE1F"
                                        className={isConversation ? "progress-bar" : ""}
                                    ></Separator>
                                    <Separator
                                        bgcolor="#4AC785"
                                        className={isConversation ? "progress-bar" : ""}
                                    ></Separator>
                                </SeparatorCover>
                                <UserSales>
                                    <Image src={DP} alt="graph" width={30} />
                                    <h3>Min. price</h3>

                                    <p>1,200 $</p>
                                </UserSales>
                                <UserSales
                              
                                >
                                    <Image src={DP2} alt="graph" width={30} />
                                    <h3>Max. price</h3>

                                    <p>2,320 $</p>
                                </UserSales>
                                <hr />
                                <UserSales>
                                    <h3>Engagement rate</h3>

                                    <p>47.84 %</p>
                                </UserSales>
                            </SalesInsights>
                        </StyledLightGreyColumn>
                        <TitleContainer>
                            <Title>Improved customer service</Title>
                            <Description>
                                Analytics helps optimize service processes by
                                providing information on how to improve
                                interactions with customers and increase
                                satisfaction
                            </Description>
                        </TitleContainer>
                    </FirstSectionColumn>
                    <FirstSectionColumn className={isConversation ? "slideIn" : ""}>
                        <LightGreyColumn>
                            <Insights   className={isConversation ? "slideIn" : ""}>
                                <InsightsChild>
                                    <TitleText>
                                        <span className="material-symbols-outlined">
                                            show_chart
                                        </span>
                                        <h3>Insights</h3>
                                    </TitleText>
                                    <TotalProfit>
                                        <h3>Total profit</h3>

                                        <h2>$262.2K</h2>
                                        <CenteredButton2>
                                            Data visualization
                                        </CenteredButton2>
                                    </TotalProfit>
                                </InsightsChild>
                                <InsightsChild>
                                    <Image
                                        src={Graph}
                                        alt="graph"
                                        width={180}
                                    />
                                </InsightsChild>
                            </Insights>
                            <SecondInsights   className={isConversation ? "bounce-up" : ""}>
                                <InsightsChild>
                                    <TitleText>
                                        <span className="material-symbols-outlined">
                                            linked_services
                                        </span>
                                        <h3>Finance reports</h3>
                                    </TitleText>
                                </InsightsChild>
                            </SecondInsights>
                            <ThirdInsights   className={isConversation ? "bounce-up" : ""}></ThirdInsights>
                            <RowText> </RowText>
                        </LightGreyColumn>
                        <TitleContainer>
                            <Title>Monitoring key indicators</Title>
                            <StyledDescription>
                                Analytics platforms allow businesses to track
                                KPIs, an important tool for measuring success
                                and achieving goals{" "}
                            </StyledDescription>
                        </TitleContainer>
                    </FirstSectionColumn>
                </FirstSectionRow>
            </FirstSection>
            {/* <hr style={{ width: '100%' }} /> */}
            <SecondSection ref={getStarted}>
                <Button 
                className={isGetStarted ? "animate-fly-in" : ""}
                >
                    <span className="material-symbols-outlined">link</span>
                </Button>

                <BigTextCover>
                    <BigText >
                        {
                            isGetStarted &&
                            <Wavy text="Get Started" />
                        }
                         
                    </BigText>
                </BigTextCover>
                <DescriptionText>
                    Turn Information into advantage Start using
                </DescriptionText>
                <DescriptionText>
                    Monie Point today.Sign up for a free trial
                </DescriptionText>
                <CenteredButtons>
                    <CenteredButton1 className={isGetStarted ? "expandable" : ""}>
                        Request a demo
                    </CenteredButton1>
                    <CenteredButton2 className={isGetStarted ? "expandable" : ""}>
                        Start for free{" "}
                    </CenteredButton2>
                </CenteredButtons>
            </SecondSection>
        </Container>
    );
};

export default Data;
