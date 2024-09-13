import React from 'react';
import styled from "styled-components";

type MenuPropsType = {
    items: Array<string>
}

export const Menu = (props: MenuPropsType) => {
    let items = props.items.map((i, index) => <MenuItem key={index} title={i}/>)
    return (
        <StyledNav>
            <ul>
                {items}
            </ul>
        </StyledNav>
    );
};

type MenuItemPropsType = {
    title: string
}

const MenuItem = (props: MenuItemPropsType) => {
    return (
        <li>
            <a href="">{props.title}</a>
        </li>
    );
};

const StyledNav = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`

