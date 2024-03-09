"use client";

import React from "react";
import styled from "styled-components";
import Menu from "./menu/Menu";
import Hero from "./hero/HeroContainer";
import Analytics from "./analytics/Analytics";
import Footer from "./footer/Footer";
import Data from "./data/Data";
import Efficiency from "./efficiency/Efficiency";
import Actions from "./actions/Actions";

const Container = styled.main`
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
