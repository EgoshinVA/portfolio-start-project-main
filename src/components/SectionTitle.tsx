import React from 'react';
import styled from "styled-components";
import {theme} from "../styles/Theme";

type SectionTitlePropsType = {
    title: string
}

export const SectionTitle = (props: SectionTitlePropsType) => {
    return (
        <StyledTitle>
            {props.title}
        </StyledTitle>
    );
};

const StyledTitle = styled.h2`
  text-align: center;
  font-family: Josefin Sans, sans-serif;
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 5px;
  position: relative;
  margin-bottom: 90px;
  
  &::before{
    position: absolute;
    display: inline-block;
    content: '';
    width: 55px;
    height: 1px;
    background-color: ${theme.colors.accent};
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
  }
`
