import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Image from "next/image";
import User from "../../../public/images/user.png";
import Angle from "../../../public/images/angle.png";
import Angle2 from "../../../public/images/angle_2.png";
import Stat from "../../../public/images/stat.png";
import Circle from "../Circle";
import Counter from '../../hooks/countAnimation';
// Main container for the two-column layout

import { useInView } from 'react-intersection-observer';


import {Container, StartRow, Row, ColumnA, ColumnB,

    SubColumnImage, FirstSubColumn, SecondSubColumn, FullWidthRow, CenteredRow,
    StyledColumn, SettingUpButton, SubColumnCover, StyledSubColumn,
    StyledCenteredColumn, StyledCenteredColumnText, StyledCenteredFirstColumn,
    StatContainer, CounterDiv, TotalProfit, VisitorsColumn, GraphqColumn,
    GraphqRateColumn, SeparatorCover, Separator
} from './styles'


const Analytics: React.FC= () => {

    const [count, setCount] = useState(1);

    const { ref: text, inView: isText } = useInView()
    const { ref: percent, inView: isPercent } = useInView()

    useEffect(() => {
        const interval = setInterval(() => {
          if (count < 120) {
            setCount(count + 1);
          }
        }, 100); // Adjust the interval duration as needed
    
        return () => clearInterval(interval);
      }, [count]);
    return (
        <Container
        
        >
            <StartRow
            >
                <StyledColumn width="65%">
                    <h3>Your Key to strategic success through analytics</h3>
                </StyledColumn>
                <StyledColumn width="239px">
                    <h4>
                    Ready for exciting, instatenous, all-accessible insights in
                    real time?{" "}
                    </h4>
                  
                </StyledColumn>
            </StartRow>
            <Row>
                <ColumnA>
                    <FirstSubColumn>
                        <SettingUpButton>Setting up reports</SettingUpButton>
                        <h2>Fast and easy access to analytics</h2>
                        <p>
                            One platform is a comprehensive system of solutions
                            that will be the first step towards digitalization
                            of your business!
                        </p>
                    </FirstSubColumn>
                    <SecondSubColumn>
                        <h3>Sales statistic</h3>
                        <StatContainer>
                            <div style={{ position: "relative" }}>
                                <Circle
                                    icon={
                                        <span className="material-symbols-outlined">
                                            play_arrow
                                        </span>
                                    }
                                    color="#FE4A22"
                                    height="35px"
                                    width="35px"
                                    top="-18px"
                                    iconcolor={"#fff"}
                                />
                            </div>

                            <TotalProfit>
                                <h3>Total Profit</h3>
                                <h2>$264.2K</h2>
                            </TotalProfit>
                            <VisitorsColumn ref={text}>
                                <div>
                                    <h3>Visitors</h3>
                                </div>
                                <SeparatorCover>
                                    <Separator
                                        bgcolor="#4AC785"
                                        className={isText ? "progress-bar-separator" : ""}
                                    ></Separator>
                                    <Separator
                                        bgcolor="#E4E4E4"
                                        className={isText ? "progress-bar-separator" : ""}
                                    ></Separator>
                                   
                                </SeparatorCover>
                                <CounterDiv>
                                    <Image src={Angle2} alt="user" width={40} />
                                    <h1>
                                        {
                                    isText &&
                                    <Counter count={56} />}
                                   K</h1>
                                </CounterDiv>
                            </VisitorsColumn>
                        </StatContainer>
                        <GraphqColumn>
                            <Image src={Stat} alt="user" width={260} />
                            <GraphqRateColumn>
                                <span className="material-symbols-outlined">
                                    hexagon
                                </span>
                                <p>Rate</p>
                                <h2>+
                                    {
                                         isPercent &&
                                         <Counter count={58} />
                                    }
                                       %</h2>
                            </GraphqRateColumn>
                        </GraphqColumn>
                    </SecondSubColumn>
                </ColumnA>
                <ColumnB ref={percent}>
                    <SubColumnCover>
                        <SubColumnImage 
                          className={isPercent ? "slide-in-left " : ""}
                        >
                            <Image src={User} alt="user" width={60} />
                        </SubColumnImage>
                        <StyledSubColumn
                          className={isPercent ? "slide-in-right " : ""}
                        
                        >
                            <h3>Transactions</h3>
                            <Image src={Angle} alt="user" width={50} />
                            <h1 className="">
                                {
                                    isPercent &&
                                    <Counter count={43} />
                                }
                                K</h1>
                        </StyledSubColumn>
                    </SubColumnCover>

                    <FullWidthRow>
                        <h3>Widget control</h3>
                        <p>
                            Reports provide a comprehensive overview of
                            important aspects of web analytics
                        </p>
                    </FullWidthRow>
                </ColumnB>
            </Row>

            <CenteredRow>
                <Row>
                    <StyledCenteredFirstColumn>
                        <span>Up to</span>
                    </StyledCenteredFirstColumn>
                    <StyledCenteredColumn>
                        <span style={{ fontSize: "65px" }}>45%</span>
                    </StyledCenteredColumn>
                    <StyledCenteredColumnText
                    className={isPercent ? "slideIn " : ""}
                    >
                        <span style={{ fontSize: "13px" }}>
                            Increase your analytics efficiency by upto 45%.
                            unique algorithms provides insights from data,
                            reduce time for analysis and save time for making
                            important informed decisions.
                        </span>
                    </StyledCenteredColumnText>
                </Row>
            </CenteredRow>
        </Container>
    );
};

export default Analytics;
