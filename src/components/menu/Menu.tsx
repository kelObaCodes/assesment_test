import React from "react";

import styled from "styled-components";
import { useInView } from "react-intersection-observer";



import {
    MenuContainer,
    Logo,
    MenuItems,
    MenuItem,
    SignUpButton

} from "./styles";

const Menu: React.FC= () => {
    const { ref: menuRef, inView: isMenu } = useInView();
    return (
        <MenuContainer ref={menuRef}>
            <Logo
                className={isMenu ? 'slideIn' : ''}
            >
                <span className="material-symbols-outlined">link</span>
                <p> monie point</p>
            </Logo>
            <MenuItems
              className={isMenu ? 'slideIn' : ''}
            >
                <MenuItem>Dashboard</MenuItem>
                <MenuItem>Reports</MenuItem>
                <MenuItem>Documents</MenuItem>
                <MenuItem>History</MenuItem>
                <MenuItem>Settings</MenuItem>
            </MenuItems>
            <SignUpButton
                className={isMenu ? 'slideIn' : ''}
            >Sign Up</SignUpButton>
        </MenuContainer>
    );
};

export default Menu;
