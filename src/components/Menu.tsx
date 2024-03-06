import React from "react";
import styled from "styled-components";

const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    background-color: #0d0d0d;
    color: white;
    height: 50px;
    border-radius: 15px;
    max-width: 100%;
    box-sizing: border-box;
    margin: 20px;
    margin-top: 5px;
    overflow: hidden;
`;

const Logo = styled.div`
    position: relative;
    > p {
        position: relative;
        left: 30px;
    }
    > span {
        position: absolute;
        left: 5px;
    }
`;

const MenuItems = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    background-color: #252525;
    border-radius: 15px;
    font-size: 14px;
    height: 40px;
    font-weight: 400;
    line-height: 28px;
`;

const MenuItem = styled.li`
    margin: 0 10px;
    cursor: pointer;
`;

const SignUpButton = styled.button`
    background-color: white;
    color: black;
    border: 1px solid white;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
`;

const Menu: React.FC = () => {
    return (
        <MenuContainer>
            <Logo>
                <span className="material-symbols-outlined">link</span>
                <p> monie point</p>
            </Logo>
            <MenuItems>
                <MenuItem>Dashboard</MenuItem>
                <MenuItem>Reports</MenuItem>
                <MenuItem>Documents</MenuItem>
                <MenuItem>History</MenuItem>
                <MenuItem>Settings</MenuItem>
            </MenuItems>
            <SignUpButton>Sign Up</SignUpButton>
        </MenuContainer>
    );
};

export default Menu;
