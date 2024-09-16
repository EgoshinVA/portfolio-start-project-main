import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

type HeaderMenuPropsType = {
    items: Array<string>
}

export const HeaderMenu = (props: HeaderMenuPropsType) => {
    let items = props.items.map((i, index) => <HeaderMenuItem key={index} title={i}/>)
    return (
        <StyledHeaderMenu>
            <ul>
                {items}
            </ul>
        </StyledHeaderMenu>
    );
};

type HeaderMenuItemPropsType = {
    title: string
}

const HeaderMenuItem = (props: HeaderMenuItemPropsType) => {
    return (
        <ListItem>
            <Link href="">
                {props.title}
                <Mask>
                    <span>{props.title}</span>
                </Mask>
                <Mask>
                    <span>{props.title}</span>
                </Mask>
            </Link>
        </ListItem>
    );
};

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`

const Link = styled.a`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 30px;
  font-weight: 400;
  text-align: center;
  color: transparent;
`

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  color: ${theme.colors.accent};
  
  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`

const ListItem = styled.li`
  position: relative;
  &::before {
    content: '';
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.accent};
    
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    
    transform: scale(0);
  }

  &:hover {
    &::before{
      transform: scale(1);
    }
    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color: ${theme.colors.font};
      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }
  }
`