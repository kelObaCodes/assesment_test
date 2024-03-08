import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Image from "next/image";
import User from "../../public/images/user.png";
import Angle from "../../public/images/angle.png";
import Angle2 from "../../public/images/angle_2.png";
import Stat from "../../public/images/stat.png";
import Circle from "./Circle";
import Counter from '../hooks/countAnimation';
// Main container for the two-column layout
import AnimationOnScroll from "../hooks/inView";

interface ChildComponentProps {
    isInView?: boolean;
  }

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 70px 60px;
    background-color: #f9f9f9;
    border-radius: 90px;
    margin-bottom: 40px;
`;

// Row container for the columns
const StartRow = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`;
const Row = styled.div`
    display: flex;
    gap: 12px;
`;

// Styled component for column A
const ColumnA = styled.div`
    width: 60%;
    padding: 10px 30px;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.02);
    border-radius: 15px;
    display: flex;
    border: 1px solid #f0f2f3;
    background: #fff;
    overflow: hidden;
`;

// Styled component for column B
const ColumnB = styled.div`
    border-radius: 15px;
    width: 40%;
    padding: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    background: #0d0d0d;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #f0f2f3;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.02);
`;

// Styled component for the two sub-columns inside column A and B
const SubColumn = styled.div`
    width: 50%;

    > h2 {
        font-size: 17px;
    }
`;

const FirstSubColumn = styled(SubColumn)`
    display: flex;
    height: 250px;
    flex-direction: column;
    justify-content: space-around;
    width: 63%;
    > p {
        font-size: 14px;
        color: #8d8d8d;
    }
`;
const SecondSubColumn = styled(SubColumn)`
    border: 1px solid #eaeaea;
    border-radius: 20px;
    position: relative;
    left: 39px;
    top: 23px;
    height: 290px;
    padding: 15px;
    width: 368px;
    > h3 {
        font-size: 12px;
    }
`;


const FullWidthRow = styled.div`
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

    > h3 {
        font-size: 17px;
        color: #f3f3f3;
        text-align: center;
        padding-bottom: 14px;
    }
    > p {
        font-size: 12px;
        color: #aaaaaa;
        text-align: center;
        width: 230px;
        margin: 0 auto;
    }
`;

// Styled component for center-aligned row
const CenteredRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    > div {
        justify-content: center;
        max-width: 600px;
        align-items: center;
    }
`;

const StyledColumn = styled.div<{ width?: string }>`
    width: ${(props) => props.width};
    margin: 30px 0;
    > h3 {
        font-size: 29px;
        width: 345px;
    }
`;
const SettingUpButton = styled.button`
    height: 30px;
    border-radius: 10px;
    font-size: 12px;
    border: 1px solid #ffd025;
    background: #ffd025;
    width: 130px;
`;
const SubColumnCover = styled.div`
    display: flex;
    gap: 5px;
    max-width: 250px;
    margin: 0 auto;
    > div {
        border: 1px solid #424141;
        border-radius: 15px;
        background: #141111;
        height: 110px;
        display: flex;
        width: 120px;
        justify-content: center;
        align-items: center;
    }
`;
const StyledSubColumn = styled(SubColumn)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > h3 {
        font-size: 8px;
        color: #fff;
        position: relative;
        bottom: 2px;
        right: 19px;
    }
    > img {
        position: relative;
        left: 27px;
    }
    > h1 {
        font-size: 35px;
        color: #fff;
        position: relative;
        right: 12px;
    }
`;
const StyledCenteredColumn = styled(StyledColumn)`
    display: flex;
    justify-content: space-between;
`;
const StyledCenteredFirstColumn = styled(StyledColumn)`
    display: flex;
    justify-content: space-between;
    width: 142px;
    top: 18px;
    left: 25px;
    position: relative;
`;
const StatContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    justify-content: space-between;
    align-items: center;
`;
const TotalProfit = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    left: 20px;
    > h3 {
        color: #cccccc;
        font-size: 12px;
        margin-bottom: 2px;
    }
    > h2 {
        font-size: 22px;
    }
`;
const VisitorsColumn = styled.div`
    background: #f6f6f6;
    width: 86px;
    padding: 9px;
    border-radius: 15px;
    position: relative;
    img {
        position: absolute;
        margin-bottom: 0;
        left: 44px;
        bottom: 20px;
    }
    > div > h3 {
        font-size: 12px;
        margin-bottom: 12px;
    }
    > div > h1 {
        font-size: 19px;
    }
`;

const GraphqColumn = styled.div`
    position: relative;
    margin-top: 15px;
`;
const GraphqRateColumn = styled.div`
    position: absolute;
    background: #fe4a22;
    height: 59px;
    width: 100px;
    border-radius: 10px;
    bottom: 20px;
    padding: 5px;
    right: 12px;

    > p {
        font-size: 10px;
        color: #fff;
    }
    > h2 {
        font-size: 20px;
        color: #fff;
        margin-top: 10px;
    }
    > span {
        color: #fff;
        position: absolute;
        right: 12px;
        font-size: 16px;
    }
`;
const Analytics: React.FC<ChildComponentProps>= ({ isInView }) => {
    const [isInViewOfAnalytics, setIsInOfAnalytics] = useState<boolean>(false);

    const [count, setCount] = useState(1);


    useEffect(() => {
        const interval = setInterval(() => {
          if (count < 120) {
            setCount(count + 1);
          }
        }, 100); // Adjust the interval duration as needed
    
        return () => clearInterval(interval);
      }, [count]);
    return (
        <AnimationOnScroll setIsInView={setIsInOfAnalytics}>
        <Container>
            <StartRow>
                <StyledColumn width="65%">
                    <h3>Your Key to strategic success through analytics</h3>
                </StyledColumn>
                <StyledColumn width="239px">
                    Ready for exciting, instatenous, all-accessible insights in
                    real time?{" "}
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
                            <VisitorsColumn>
                                <div>
                                    <h3>Visitors</h3>
                                </div>
                                <div>
                                    <Image src={Angle2} alt="user" width={40} />
                                    <h1>
                                        {
                                    isInViewOfAnalytics &&
                                    <Counter count={56} />}
                                   K</h1>
                                </div>
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
                                         isInViewOfAnalytics &&
                                         <Counter count={58} />
                                    }
                                       %</h2>
                            </GraphqRateColumn>
                        </GraphqColumn>
                    </SecondSubColumn>
                </ColumnA>
                <ColumnB>
                    <SubColumnCover>
                        <SubColumn 
                          className={isInViewOfAnalytics ? "slide-in-left " : ""}
                        >
                            <Image src={User} alt="user" width={60} />
                        </SubColumn>
                        <StyledSubColumn
                          className={isInViewOfAnalytics ? "slide-in-right " : ""}
                        
                        >
                            <h3>Transactions</h3>
                            <Image src={Angle} alt="user" width={50} />
                            <h1 className="">
                                {
                                    isInViewOfAnalytics &&
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
                    <StyledCenteredColumn
                    className={isInViewOfAnalytics ? "slideIn " : ""}
                    >
                        <span style={{ fontSize: "13px" }}>
                            Increase your analytics efficiency by upto 45%.
                            unique algorithms provides insights from data,
                            reduce time for analysis and save time for making
                            important informed decisions.
                        </span>
                    </StyledCenteredColumn>
                </Row>
            </CenteredRow>
        </Container>
        </AnimationOnScroll>
    );
};

export default Analytics;
