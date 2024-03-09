import styled from "styled-components";

import background from "../../../public/images/background.png";


export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    margin-bottom: 40px;
    padding: 0 60px;
`;

export const FirstSection = styled.div`
    width: 100%;
    padding: 20px 0;
    margin-top: 40px;
`;
export const FullWidthCover = styled.div`
   
    margin-bottom: 40px;
`;

export const FullWidthText = styled.div`
    font-size: 35px;
    width: 100%;
    text-align: left;
    overflow: hidden;
    height: 86px;
    margin-bottom: 13px;
`;

export const FirstSectionRow = styled.div`
    display: flex;
`;

export const FirstSectionColumn = styled.div`
    flex: 1;
    background-color: #f9f9f9;
    margin: 5px;
    border-radius: 15px;
    border: 1px solid #ededed;
    background-image: url(${background.src});
    background-position-x: -19px;
    background-repeat: repeat;
    padding-top: 40px;
    overflow: hidden;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
        opacity: 0;
`;

export const LightGreyColumn = styled.div`
    padding: 10px;
    margin: 5px;
    position: relative;
    margin-bottom: 18px;
`;
export const StyledLightGreyColumn = styled(LightGreyColumn)`
    padding: 10px;
    margin: 5px;
    position: relative;
    margin-top: -65px;
    margin-bottom: 40px;
`;

export const RowText = styled.div``;

export const Title = styled.h2`
    text-align: center;
    font-weight: 300;
    font-size: 18px;
    margin-bottom: 20px;
`;

export const Description = styled.p`
    text-align: center;
    font-size: 13px;
    width: 305px;
    margin: 0 auto;
    font-weight: 200;
    padding: 5px 0;
`;
export const StyledDescription = styled(Description)`
    width: 280px;
`;

export const SecondSection = styled.div`
    margin: 80px 0 100px 0;
`;

export const Button = styled.button`
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

export const BigTextCover = styled.div`
    overflow: hidden;
    height: 100px;
    margin: 20px 0;
`;
export const BigText = styled.h1`
    font-size: 90px;
    text-align: center;
    margin-top: 14px;
    font-weight: 400;
    position: relative;
    top: 53px;
`;

export const DescriptionText = styled.p`
    text-align: center;
    color: #b2b2b2;
`;

export const CenteredButtons = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`;

export const CenteredButton1 = styled.button`
    margin: 0 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 15px;
    font-size: 16px;
    cursor: pointer;
    background: #f2f2f2;
    font-size: 11px;
`;
export const CenteredButton2 = styled(CenteredButton1)`
    background: #fe4a22;
    color: #fff;
`;
export const Paragraph = styled.p`
    margin: 0;
    font-size: 86px;
    position: relative;
    bottom: -54px;
`;

export const Insights = styled.div`
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
export const SecondInsights = styled(Insights)`
    position: absolute;
    bottom: 146px;
    height: 80px;
    left: 89px;
    width: 250px;
    z-index: 1;
`;
export const ThirdInsights = styled(SecondInsights)`
    position: absolute;
    bottom: 161px;
    height: 80px;
    width: 180px;
    z-index: 0;
    left: 123px;
`;
export const InsightsChild = styled.div`
    flex-direction: column;

    display: flex;
`;
export const ConversationsInsights = styled(Insights)`
    width: 170px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 230px;
    right: 88px;
    opacity: 0;
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
        top: 85px;
    }
    > p {
        font-weight: 200;
        text-align: center;
        font-size: 11px;
        width: 84px;
        margin-top: 10px;
    }
`;

export const PercentageBox = styled.div`
    background: #ffd025;
    height: 70px;
    margin-top: 12px;
    border-radius: 20px;
    font-size: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation-duration: 3s;

    > span {
        animation-delay: 2s;
    }
`;
export const SalesInsights = styled(Insights)`
    width: 190px;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    height: 230px;
    position: absolute;
    bottom: -9px;
    right: 41px;
opacity: 0;
    > h3 {
        color: #848484;
        font-size: 13px;
        font-weight: 200;
        
    }
    > h2 {
    
        font-weight: 300;

    }
    > hr {
        width: 100%;
        background-color: #848484;
        height: 1px;
        border: none;
        margin: 5px 0;
    }
`;
export const SeparatorCover = styled.div`
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
export const Separator = styled.div<{ bgcolor?: string }>`
    display: flex;

    border-radius: 10px;
    height: 4px;
    background: ${(props) => props.bgcolor};
`;
export const UserSales = styled.div`
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

export const TitleContainer = styled.div`
    background: #f9f9f9;
    height: 120px;
`;
export const TitleText = styled.div`
    display: flex;
    align-items: center;
    span {
        font-size: 12px;
        background: #F0F0F0;
        padding: 4px;
        border-radius: 5px;
    }
    > h3 {
        font-weight: 200;
        font-size: 13px;
        margin-left: 5px;
    }
`;
export const TotalProfit = styled.div`
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
        font-weight: 200;
    }
`;
