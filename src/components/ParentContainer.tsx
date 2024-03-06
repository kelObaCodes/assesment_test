"use client";

import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
import Hero from "./HeroContainer"

const Container = styled.div`
    background-color: #fff;
    max-width: 1024px;
    margin: 0 auto;
    height: 100vh;
    justify-content: center;
    border-radius: 15px;
    width: 100%;
    box-sizing: border-box;
    padding-top: 5px;
`;

const ParentContainer: React.FC = () => {
    return <Container>
<Menu/>
<Hero/>

    </Container>;
};

export default ParentContainer;
