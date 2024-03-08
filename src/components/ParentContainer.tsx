"use client";

import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
import Hero from "./HeroContainer";
import Analytics from "./Analytics";
import Footer from "./Footer";
import Data from "./Data";
import Efficiency from "./Efficiency";
import Actions from "./Actions";

const Container = styled.div`
    background-color: #fff;
    margin: 0 auto;
    overflow: hidden;
    justify-content: center;
    border-radius: 15px;
    width: 100%;
    box-sizing: border-box;
    padding-top: 5px;
    @media (min-width: 1023px) {
        max-width: 1023px;
    }
    @media (max-width: 1024px) {
        max-width: 940px;
    }
`;

const ParentContainer: React.FC = () => {
    return (
        <Container>
            <Menu />
            <Hero />
            <Analytics />
            <Efficiency />
            <Actions />
            <Data />
            <Footer />
        </Container>
    );
};

export default ParentContainer;
