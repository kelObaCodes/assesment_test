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
    max-width: 1024px;
    margin: 0 auto;
    justify-content: center;
    border-radius: 15px;
    width: 100%;
    box-sizing: border-box;
    padding-top: 5px;
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
