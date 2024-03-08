"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import Hero from "./HeroContainer";
import Analytics from "./Analytics";
import Footer from "./Footer";
import Data from "./Data";
import Efficiency from "./Efficiency";
import Actions from "./Actions";
import AnimationOnScroll from "../hooks/inView";

const Container = styled.div`
    background-color: #fff;
    max-width: 1024px;
    margin: 0 auto;
    overflow: hidden;
    justify-content: center;
    border-radius: 15px;
    width: 100%;
    box-sizing: border-box;
    padding-top: 5px;
`;

const ParentContainer: React.FC = () => {
    const [isInView, setIsInView] = useState<boolean>(false);

    return (
        <Container>
                <Menu isInView={isInView} />
                <Hero isInView={isInView} />
                <Analytics isInView={isInView} />
                <Efficiency isInView={isInView} />
                <Actions isInView={isInView} />
                <Data/>
                <Footer />
        </Container>
    );
};

export default ParentContainer;
