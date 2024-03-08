import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Graph from "../../public/images/graph.png";
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
    background-image:  url(${background.src});
    background-repeat: repeat;
    padding-top: 40px;

`;

const LightGreyColumn = styled.div`
    padding: 10px;
    margin: 5px;
    position: relative;
`;

const RowText = styled.div``;

const Title = styled.h2`
    text-align: center;
    font-weight: 300;
    font-size: 18px;
    margin: 20px 0;
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
const TitleContainer = styled.div`
   background: #F9F9F9;
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
                        <LightGreyColumn>
                            <RowText>Row 1</RowText>
                            <RowText>Row 2</RowText>
                        </LightGreyColumn>
                        <TitleContainer>

                        <Title>Improved customer service</Title>
                        <Description>
                            Analytics helps optimize service processes by
                            providing information on how to improve interactions
                            with customers and increase satisfaction
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
                            <ThirdInsights>
                      
                            </ThirdInsights>
                            <RowText> </RowText>
                        </LightGreyColumn>
                        <TitleContainer>

                        <Title>Monitoring key indicators</Title>
                        <StyledDescription>
                            Analytics platforms allow businesses to track KPIs,
                            an important tool for measuring success and
                            achieving goals{" "}
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
