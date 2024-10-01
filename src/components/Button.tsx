import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Button = styled.button`
  width: 170px;
  height: 32px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  position: relative;
  z-index: 0;
  
  &:hover{
    &::before{
      width: 100%;
      height: 100%;
    }
  }

  &::before{
    content: '';
    display: inline-block;
    width: 77px;
    height: 10px;
    background-color: ${theme.colors.accent};
    transition: ${theme.animations.transition};

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    z-index: -1;
  }
`