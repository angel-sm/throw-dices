import React from "react";
import styled from "styled-components";

const NavbarContent = styled.nav`
    display: flex;
    align-items: center;
    width: 100%;
    height: 10vh;
    background-color: #2c3e50;
    color: #fff;
    font-size: 1.5em;
    font-weight: bold;
    padding: 0 1em;
`;

export const Navbar = () => {
    return (
        <NavbarContent>
            Throw Dice
        </NavbarContent>
    )
};