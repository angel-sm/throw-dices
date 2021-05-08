import React from "react";
import styled from "styled-components";

const Navbar = styled.nav`
    display: flex;
    align-items: center;
    width: 100%;
    height: 10vh;
    background-color: #2c3e50;
`;

const Title = styled.h1`
    color: #fff;
    font-size: 1.5em;
    margin: 0 1em;
`;

export const Header = () => {
    return (
        <Navbar>
            <Title>
                Throw Dice
            </Title>
        </Navbar>
    )
};