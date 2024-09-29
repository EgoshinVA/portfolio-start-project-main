import React from 'react';
import {Link} from "../../../../components/Link";
import { S } from './TabMenu_Styles';

type MenuPropsType = {
    items: Array<string>
}

export const TabMenu: React.FC<MenuPropsType> = (props) => {
    let items = props.items.map((i, index) => <MenuItem key={index} title={i}/>)
    return (
        <S.TabMenu>
            <ul>
                {items}
            </ul>
        </S.TabMenu>
    );
};

type MenuItemPropsType = {
    title: string
}

const MenuItem = (props: MenuItemPropsType) => {
    return (
        <S.ListItem>
            <Link href="src/layout/sections/works/tabMenu">{props.title}</Link>
        </S.ListItem>
    );
};