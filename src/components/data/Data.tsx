import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Graph from "../../../public/images/graph.png";
import DP from "../../../public/images/dp_1.png";
import DP2 from "../../../public/images/dp_2.png";
import Counter from "../../hooks/countAnimation";
import Wavy from "@/hooks/wavyAnimation";

import { useInView } from "react-intersection-observer";

import {
    Container,
    FirstSection,
    FullWidthCover,
    FullWidthText,
    FirstSectionRow,
    FirstSectionColumn,
    LightGreyColumn,
    StyledLightGreyColumn,
    RowText,
    Title,
    Description,
    StyledDescription,
    SecondSection,
    Button,
    BigTextCover,
    BigText,
    DescriptionText,
    CenteredButton2,
    Paragraph,
    TotalProfit,
    CenteredButtons,
    CenteredButton1,
    Insights,
    SeparatorCover,
    Separator,
    SecondInsights,
    ThirdInsights,
    InsightsChild,
    ConversationsInsights,
    PercentageBox,
    SalesInsights,
    UserSales,
    TitleContainer,
    TitleText,
} from "./styles";

const Data: React.FC = () => {
    const { ref: getStarted, inView: isGetStarted } = useInView();
    const { ref: conversation, inView: isConversation } = useInView();
    const { ref: text, inView: isText } = useInView();

    return (
        <Container>
            <FirstSection>
                <FullWidthCover>
                    <FullWidthText ref={text}>
                        <Paragraph>
                            {isText && <Wavy text="We give you full" />}
                        </Paragraph>
                    </FullWidthText>

                    <FullWidthText>
                        <Paragraph>
                            {isText && (
                                <Wavy text="control" className="grey-span" />
                            )}
                            {isText && <Wavy text="over your data" />}
                        </Paragraph>
                    </FullWidthText>
                </FullWidthCover>

                <FirstSectionRow ref={conversation}>
                    <FirstSectionColumn
                        className={isConversation ? "slideIn" : ""}
                    >
                        <StyledLightGreyColumn>
                            <ConversationsInsights
                                className={
                                    isConversation ? "slide-in-left " : ""
                                }
                            >
                                <h3>Conversation rate</h3>
                                <PercentageBox
                                    className={
                                        isConversation ? "reveal-percent" : ""
                                    }
                                >
                                    2.3%
                                    <span
                                        className={`material-symbols-outlined ${
                                            isConversation ? "fadeInBounce" : ""
                                        }`}
                                    >
                                        monitoring
                                    </span>
                                </PercentageBox>
                                <p>Percentage of website visitors</p>
                            </ConversationsInsights>
                            <SalesInsights
                                className={
                                    isConversation ? "slide-in-right " : ""
                                }
                            >
                                <h3>Sales revenue</h3>
                                <h2>
                                    ${isConversation && <Counter count={131} />}{" "}
                                    K
                                </h2>
                                <SeparatorCover>
                                    <Separator
                                        bgcolor="#4AC785"
                                        className={
                                            isConversation ? "progress-bar" : ""
                                        }
                                    ></Separator>
                                    <Separator
                                        bgcolor="#FFCE1F"
                                        className={
                                            isConversation ? "progress-bar" : ""
                                        }
                                    ></Separator>
                                    <Separator
                                        bgcolor="#4AC785"
                                        className={
                                            isConversation ? "progress-bar" : ""
                                        }
                                    ></Separator>
                                </SeparatorCover>
                                <UserSales>
                                    <Image src={DP} alt="graph" width={30} />
                                    <h3>Min. price</h3>

                                    <p>1,200 $</p>
                                </UserSales>
                                <UserSales>
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
                    <FirstSectionColumn
                        className={isConversation ? "slideIn" : ""}
                    >
                        <LightGreyColumn>
                            <Insights
                                className={isConversation ? "slideIn" : ""}
                            >
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
                            <SecondInsights
                                className={isConversation ? "bounce-up" : ""}
                            >
                                <InsightsChild>
                                    <TitleText>
                                        <span className="material-symbols-outlined">
                                            linked_services
                                        </span>
                                        <h3>Finance reports</h3>
                                    </TitleText>
                                </InsightsChild>
                            </SecondInsights>
                            <ThirdInsights
                                className={isConversation ? "bounce-up" : ""}
                            ></ThirdInsights>
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
                <Button className={isGetStarted ? "animate-fly-in" : ""}>
                    <span className="material-symbols-outlined">link</span>
                </Button>

                <BigTextCover>
                    <BigText>
                        {isGetStarted && <Wavy text="Get Started" />}
                    </BigText>
                </BigTextCover>
                <DescriptionText>
                    Turn Information into advantage Start using
                </DescriptionText>
                <DescriptionText>
                    Monie Point today.Sign up for a free trial
                </DescriptionText>
                <CenteredButtons>
                    <CenteredButton1
                        className={isGetStarted ? "expandable" : ""}
                    >
                        Request a demo
                    </CenteredButton1>
                    <CenteredButton2
                        className={isGetStarted ? "expandable" : ""}
                    >
                        Start for free{" "}
                    </CenteredButton2>
                </CenteredButtons>
            </SecondSection>
        </Container>
    );
};

export default Data;
