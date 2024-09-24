import React from "react";
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {MobileMenu} from "./mobileMenu/MobileMenu";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <HeaderMenu items={['Home', 'Skills', 'Works', 'Testimony', 'Contact']}/>
                    <MobileMenu items={['Home', 'Skills', 'Works', 'Testimony', 'Contact']}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
  background-color: #1F1F20E5;
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`