import styled from "styled-components";


export const FooterContainer = styled.section`
    background-color: #0d0d0d;
    color: #fff;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    padding: 30px 60px;
`;

export const Row = styled.div`
    display: flex;
    padding: 20px 0;
`;
export const StyledRow = styled.div`
    display: flex;
    padding: 20px 0;
    align-items: center;
`;

export const Column = styled.div`
    flex: 1;
`;

export const HorizontalMenu = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    opacity: 0;
`;

export const HorizontalMenuItem = styled.li`
    display: inline-block;
    margin-right: 10px;
    color: #999;
`;

export const VerticalMenu = styled.div`
    display: flex;
    flex-direction: column;
`;
export const StyledVerticalMenu = styled(VerticalMenu)`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    text-align: end;
`;

export const VerticalMenuItem = styled.div`
    margin-bottom: 10px;
`;

export const StyledHorizontalMenuItem = styled.div`
    font-size: 22px;
    text-align: right;
    margin-left: auto;
`;
export const StyledBarCodeColumn = styled(Column)`
    position: relative;
    text-align: end;
    img {
        opacity: 0;
        margin-left: auto;
    }
`;
export const StyledRowColumn = styled(Row)`
    position: relative;
    display: flex;
    align-items: center;
`;
export const StyledTradeMarkColumn = styled.div`
    font-size: 36px;
    position: relative;
    top: 18px;

    > h1 {
        position: relative;
        top: 65px;
    }
`;
export const StyledColorText = styled.div`
    color: #999;
`;
export const StyledHorizontalBottomMenu = styled.div`
  
    position: relative;
    left: 100px;
    display: flex;
    justify-content: space-between;
    gap: 15px;
    width: 226px;
    @media (max-width: 1024px) {
        width: 194px;
    }
`;
export const StyledHorizontalBottomMenuItem = styled.div`
    color: #999;
`;

export const FullWidthText = styled.div`
    font-size: 35px;
    width: 100%;
    text-align: left;
    overflow: hidden;
    height: 86px;
    margin-bottom: 40px;
    `

export const HrSeparator = styled.hr`
    background-color: #4a4a4a;
    height: 1px;
    border: none;
    margin: 20px 0;
`;
export const Paragraph = styled.p`
    margin: 0;
    font-size: 86px;
    position: relative;
    bottom: -54px;
`;
export const StyledHorizontalColumn = styled(Column)`
    margin: 0;
    position: relative;
    right: 54px;
    font-size: 12px;
    @media (max-width: 1024px) {
        right: 74px;
    }
`;
