import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";

type MenuPropsType = {
    items: Array<string>
}

export const TabMenu = (props: MenuPropsType) => {
    let items = props.items.map((i, index) => <MenuItem key={index} title={i}/>)
    return (
        <StyledTabMenu>
            <ul>
                {items}
            </ul>
        </StyledTabMenu>
    );
};

type MenuItemPropsType = {
    title: string
}

const MenuItem = (props: MenuItemPropsType) => {
    return (
        <ListItem>
            <Link href="src/layout/sections/works/tabMenu">{props.title}</Link>
        </ListItem>
    );
};

const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-bottom: 50px;
  }
`

const ListItem = styled.li``

