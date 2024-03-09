import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    padding: 70px 60px;
    background-color: #f9f9f9;
    border-radius: 90px;
    margin-bottom: 100px;
    padding: 60px 60px;
`;

// Row container for the columns
export const StartRow = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`;
export const Row = styled.div`
    display: flex;
    gap: 12px;
`;

// Styled component for column A
export const ColumnA = styled.div`
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
export const ColumnB = styled.div`
    border-radius: 15px;
    width: 40%;
    padding: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    background: #0d0d0d;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    border: 1px solid #f0f2f3;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.02);
`;

// Styled component for the two sub-columns inside column A and B
export const SubColumn = styled.div`
    width: 50%;
    > h2 {
        font-size: 17px;
        font-weight: 400;
    }
`;
export const SubColumnImage = styled(SubColumn)`
    opacity: 0;
`;

export const FirstSubColumn = styled(SubColumn)`
    display: flex;
    height: 250px;
    flex-direction: column;
    justify-content: space-around;
    width: 63%;
    > p {
        font-size: 12px;
        color: #8d8d8d;
        font-weight: 200;
    }
`;
export const SecondSubColumn = styled(SubColumn)`
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
        font-weight: 300;
    }
`;


export const FullWidthRow = styled.div`
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    
    > h3 {
        font-size: 17px;
        color: #f3f3f3;
        text-align: center;
        padding-bottom: 14px;
        font-weight: 400;
    }
    > p {
        font-size: 12px;
        color: #aaaaaa;
        text-align: center;
        width: 230px;
        margin: 0 auto;
        font-weight: 200;
    }
`;

// Styled component for center-aligned row
export const CenteredRow = styled.div`
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

export const StyledColumn = styled.div<{ width?: string }>`
    width: ${(props) => props.width};
    margin: 30px 0;
    > h3 {
        font-size: 29px;
        width: 345px;
        font-weight: 300;
    }
    > h4 {
        font-size: 12px;
    width: 181px;
    font-weight: 200;
    }
`;
export const SettingUpButton = styled.button`
    height: 30px;
    border-radius: 10px;
    font-size: 12px;
    border: 1px solid #ffd025;
    background: #ffd025;
    width: 130px;
    box-shadow: #cccc 0px 1px 12px 0px;
    font-weight: 200;
`;
export const SubColumnCover = styled.div`
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
export const StyledSubColumn = styled(SubColumn)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: 0;
    > h3 {
        font-size: 8px;
        color: #fff;
        position: relative;
        bottom: 2px;
        right: 19px;
        font-weight: 200;
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
    font-weight: 300;

    }
`;
export const StyledCenteredColumn = styled(StyledColumn)`
    display: flex;
    justify-content: space-between;
`;
export const StyledCenteredColumnText = styled(StyledColumn)`
    font-weight: 200;
    margin-left: 20px;
`;
export const StyledCenteredFirstColumn = styled(StyledColumn)`
    display: flex;
    justify-content: space-between;
    width: 142px;
    top: 18px;
    left: 25px;
    position: relative;
`;
export const StatContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    justify-content: space-between;
    align-items: center;
`;
export const CounterDiv = styled.div`
>h1 {
    font-weight: 300;

}
`;
export const TotalProfit = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    left: 20px;
    > h3 {
        color: #cccccc;
        font-size: 12px;
        margin-bottom: 2px;
    font-weight: 300;

    }
    > h2 {
        font-size: 22px;
        font-weight: 400;
    }
`;
export const VisitorsColumn = styled.div`
    background: #f6f6f6;
    width: 86px;
    padding: 9px;
    border-radius: 15px;
    position: relative;
    height: 85px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
        position: absolute;
        margin-bottom: 0;
        left: 44px;
        bottom: 20px;
    }
    > div > h3 {
        font-size: 11px;
        margin-bottom: 11px;
        font-weight: 200;
    }
    > div > h1 {
        font-size: 19px;
    }
`;

export const GraphqColumn = styled.div`
    position: relative;
    margin-top: 15px;
`;
export const GraphqRateColumn = styled.div`
    position: absolute;
    background: #fe4a22;
    height: 59px;
    width: 100px;
    border-radius: 10px;
    bottom: 20px;
    padding: 10px;
    right: 12px;

    > p {
        font-size: 9px;
        color: #fff;
        font-weight: 200;
    }
    > h2 {
        font-size: 20px;
        color: #fff;
        font-weight: 200;
        margin-top: 10px;
    }
    > span {
        color: #fff;
        position: absolute;
        right: 12px;
        font-size: 16px;
    }
`;

export const SeparatorCover = styled.div`
    display: flex;
    width: 100%;
    gap: 2px;
    position: relative;
    bottom: 12px;

    div:nth-child(1) {
        animation-delay: 0s;
    }
    div:nth-child(2) {
        animation-delay: 1s;
    }

`;
export const Separator = styled.div<{ bgcolor?: string }>`
    display: flex;

    border-radius: 10px;
    height: 3px;
    background: ${(props) => props.bgcolor};
`;

