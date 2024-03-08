import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Graph from "../../public/images/graph.png";
import DP from "../../public/images/dp_1.png";
import DP2 from "../../public/images/dp_2.png";
import background from "../../public/images/background.png";
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
`;

const FullWidthText = styled.div`
    font-size: 35px;
    text-align: left;
    margin-bottom: 40px;
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
    background-repeat: repeat;
    padding-top: 40px;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
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
    margin: 134px 0 100px 0;
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
    align-items: center;
    > span {
        font-size: 44px;
        rotate: 120deg;
    }
`;

const BigText = styled.h1`
    font-size: 90px;
    text-align: center;
    margin-top: 14px;
    font-weight: 400;
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
`;
const GreySpan = styled.span`
    color: #cccccc;
    margin: 0 10px;
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

    >h3 {
        color: #848484;
        font-size: 13px;
        font-weight: 200;
    }
    > hr  {
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
`;
const Separator = styled.div<{bgColor?: string}>`
    display: flex;
    width: 35%;
    border-radius: 10px;
    height: 4px;
    background: ${(props) => props.bgColor};;
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
    return (
        <Container>
            <FirstSection>
                <FullWidthText>
                    <Paragraph>We give you full</Paragraph>
                    <Paragraph>
                        <GreySpan>control</GreySpan> over your data
                    </Paragraph>
                </FullWidthText>
                <FirstSectionRow>
                    <FirstSectionColumn>
                        <StyledLightGreyColumn>
                            <ConversationsInsights>
                                <h3>Conversation rate</h3>
                                <PercentageBox>
                                    2.3%
                                    <span className="material-symbols-outlined">
                                        monitoring
                                    </span>
                                </PercentageBox>
                                <p>Percentage of website visitors</p>
                            </ConversationsInsights>
                            <SalesInsights>
                                <h3>Sales revenue</h3>
                                <h2>$131.2K</h2>
                                <SeparatorCover>
                                    <Separator bgColor="#4AC785"></Separator>
                                    <Separator bgColor="#FFCE1F"></Separator>
                                    <Separator bgColor="#4AC785"></Separator>
                                </SeparatorCover>
                                <UserSales>
                                <Image
                                        src={DP}
                                        alt="graph"
                                        width={30}
                                    />
                                    <h3>
                                        Min. price
                                    </h3>

                                    <p>1,200 $</p>
                                </UserSales>
                                <UserSales>
                                <Image
                                        src={DP2}
                                        alt="graph"
                                        width={30}
                                    />
                                    <h3>
                                        Max. price
                                    </h3>

                                    <p>2,320 $</p>
                                </UserSales>
                                <hr/>
                                <UserSales>
                            
                                    <h3>
                                      Engagement rate
                                    </h3>

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
                    <FirstSectionColumn>
                        <LightGreyColumn>
                            <Insights>
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
                            <SecondInsights>
                                <InsightsChild>
                                    <TitleText>
                                        <span className="material-symbols-outlined">
                                            linked_services
                                        </span>
                                        <h3>Finance reports</h3>
                                    </TitleText>
                                </InsightsChild>
                            </SecondInsights>
                            <ThirdInsights></ThirdInsights>
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
            <SecondSection>
                <Button>
                    <span className="material-symbols-outlined">link</span>
                </Button>
                <BigText>Get Started</BigText>
                <DescriptionText>
                    Turn Information into advantage Start using
                </DescriptionText>
                <DescriptionText>
                    Monie Point today.Sign up for a free trial
                </DescriptionText>
                <CenteredButtons>
                    <CenteredButton1>Request a demo</CenteredButton1>
                    <CenteredButton2>Start for free </CenteredButton2>
                </CenteredButtons>
            </SecondSection>
        </Container>
    );
};

export default Data;
