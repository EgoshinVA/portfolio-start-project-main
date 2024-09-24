import React from 'react';
import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

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
  ${font({family: 'Josefin Sans, sans-serif', weight: 600, Fmax: 36, Fmin: 30})}
  
  text-align: center;
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
    
    @media ${theme.media.mobile}{
      bottom: -24px;
    }
  }

  @media ${theme.media.mobile}{
    margin-bottom: 50px;
  }
`
