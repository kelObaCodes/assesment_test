import React, { useState } from "react";

import styled, { keyframes } from "styled-components";
import Image from "next/image";
import Radar from "../../public/images/radar.png";
import { useInView } from "react-intersection-observer";
import Wavy from "@/hooks/wavyAnimation";

export const slideRightAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const Container = styled.section`
    width: 100%;
    margin-bottom: 100px;
    padding: 60px 60px;
`;

export const Section = styled.div`
    padding: 20px 0;
`;

export const FullWidthText = styled.div`
    font-size: 35px;
    width: 100%;
    text-align: left;
    overflow: hidden;
    height: 70px;
    margin-bottom: 13px;
`;

export const Row = styled.div`
    display: flex;
`;

export const Column = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
export const StyledColumn = styled.div`
    display: flex;

    align-items: center;
    background-color: #ffd025;
    overflow: hidden;
    border-radius: 43px;
    height: 110px;
    width: 300px;
    > h3 {
        font-size: 73px;
        white-space: nowrap;
        font-weight: 400;
        animation: ${slideRightAnimation} 5s linear infinite;
    }
`;

export const StyledExploreColumn = styled.div`
    margin-right: auto;
    font-weight: 200;
    font-size: 12px;
    > h3 {
        font-size: 13px;
        font-weight: 200;
        width: 480px;
    }
`;

export const Circle = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #f2f2f2;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
    animation-delay: .7s;
    opacity: 0;
`;
export const StyledCircle = styled(Circle)`
    background-color: #ffd025;
    z-index: 0;
    position: relative;
    right: 22px;
    animation-delay: 0s;
    opacity: 0;
    > h3 {
        font-weight: 300;
    }

    > p {
        font-size: 8px;
        font-weight: 200;
        width: 60px;
        text-align: center;
        margin: 0 auto;
    }
`;

export const HorizontalButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-left: auto;
    > button {
        opacity: 0;
    }
`;

export const StyledButton = styled.button`
    margin-left: 10px;
    background: #fe4a22;
    border: 1px solid #fe4a22;
    border-radius: 8px;
    height: 30px;
    width: 110px;
    color: #fff;
    font-size: 10px;
    font-weight: 100;
`;
export const Button = styled(StyledButton)`
    margin-left: 10px;
    background: #f2f2f2;
    border: 1px solid #f2f2f2;
    color: #000;
    animation-duration: 2s;
`;
export const HorizontalLine = styled.hr`
    border: 0;
    border-top: 1px solid #ccc;
    margin: 20px 0;
`;
export const Paragraph = styled.p`
    margin: 0;
    font-size: 86px;
    position: relative;
    bottom: -54px;

`;


