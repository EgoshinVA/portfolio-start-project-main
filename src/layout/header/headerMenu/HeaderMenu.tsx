import React from 'react';
import {Menu} from "../menu/Menu";
import { S } from './HeaderMenu_Styles';

type HeaderMenuPropsType = {
    items: Array<string>
}

export const HeaderMenu: React.FC<HeaderMenuPropsType> = (props) => {
    return (
        <S.HeaderMenu>
            <Menu items={props.items}/>
        </S.HeaderMenu>
    );
};