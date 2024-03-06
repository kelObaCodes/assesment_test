"use client";

import React from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color: #fff;
    max-width: 1024px;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
`;

const ParentContainer: React.FC = () => {
    return <Container></Container>;
};

export default ParentContainer;
