import React from "react";
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

export const Header = () => {
    return (
        <StyledHeader>
            <Menu items={['Home', 'Skills', 'Works', 'Testimony', 'Contact']}/>
            <Logo/>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
  background-color: #5e5d5d;
  display: flex;
  justify-content: space-between;
`