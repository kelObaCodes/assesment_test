
import styled, { keyframes } from "styled-components";
import background from "../../../public/images/background.png";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f9f9f9;
    border-radius: 90px;
    margin-bottom: 100px;
    padding: 60px 60px;
    overflow: hidden;
`;

export const Section = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    position: relative;
    z-index: 3;
`;

export const Column = styled.div`
    flex: 1;
    position: relative;
    .mobile-device {
        position: absolute;
        left: 7px;
        top: 200px;
        animation-delay: .7s;

    }
    .menu {
        position: absolute;
        left: 14px;
    bottom: -113px;
        animation-delay: .4s;
        animation-delay: 1.4s;
        
    }

    img:first-child {
        left: 100px;
    position: relative;
    }
    img {
        opacity: 0;

    }
`;

export const Title = styled.h2`
    font-size: 28px;
    padding: 30px 0;
    font-weight: 300;
    width: 300px;
    opacity: 0;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px 0;

    .material-symbols-outlined {
        font-size: 15px;
    }
    button:nth-child(1) {
        animation-delay: .5s;
    }
    button:nth-child(2) {
        animation-delay: 1s;
    }
    button:nth-child(3) {
        animation-delay: 1.5s;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border-radius: 15px;
    background-color: white;
    margin-bottom: 10px;
    width: 230px;
    opacity: 0;
    border: 1px solid #f2f2f2;
    height: 57px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

export const ButtonText = styled.span`
    margin-right: auto;
    font-weight: 200;
`;

export const PlusIcon = styled.span`
    margin-left: auto;
    background: #f2f2f2;
    padding: 10px;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    font-weight: 100;
    justify-content: center;
`;

export const SecondSection = styled.div`
    width: 100%;
    padding: 20px 0;
    background-image: url(${background.src});
    background-position-x: -19px;
    background-repeat: repeat;
    text-align: center;
    position: relative;
    z-index: 0;
`;

export const BigText = styled.h1`
    font-size: 174px;
    color: #fe4a22;
    @media (max-width: 1024px) {
        font-size: 158px;
    }
`;
export const BigReveal = styled.div`
   height: 300px;
   background: #F9F9F9;
   width: 800px;
   position: absolute;
    height: 233px;
    width: 1020px;
    right: -8px;
    animation-delay: .8s;
`;
