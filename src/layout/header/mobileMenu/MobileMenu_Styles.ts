import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";

const MobileMenu = styled.nav``

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: rgba(31, 31, 32, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s ease-in-out;
  transform: translateY(-100%);
  
  ul {
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 1s ease-in-out;
  }

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    transform: translateY(0);
    & ul {
      gap: 40px;
    }
  `}
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 50px;
    transition: 0.5s;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);
      transition: 0.5s;

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: '';
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);
      transition: 0.5s;

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
      `}
    }
  }
`

export const S = {
    MobileMenu,
    MobileMenuPopup,
    BurgerButton
}