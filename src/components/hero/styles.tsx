import styled from "styled-components";

interface VerticalDivProps {
    left?: string;
}

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    margin: 100px 0;
    @media (max-width: 1024px) {
        position: relative;
    right: 35px;
    }
  
`;

export const VerticalDiv = styled.div<VerticalDivProps>`
    margin-bottom: 1px;
    position: relative;
    ${(props) => (props.left ? `left: ${props.left};` : "")}
`;


export const ImageContainer = styled.div`
    position: relative;
    > img {
        position: absolute;
        bottom: -53px;
        left: 371px;
    }
`;
export const SpanSeparator = styled.span`
  margin: 0 50px;
`;
export const GreySpan = styled.span`
  color: #CCCCCC;
  margin: 0 10px;
`;

export const FullWidthText = styled.div`
    font-size: 35px;
    width: 100%;
    overflow: hidden;
    height: 86px;
`;
export const Paragraph = styled.p`
    margin: 0;
    font-size: 86px;
    position: relative;
    bottom: -54px;
`;