import React from 'react';
import {Menu} from "../menu/Menu";
import { S } from './HeaderMenu_Styles';

export const HeaderMenu: React.FC = () => {
    return (
        <S.HeaderMenu>
            <Menu/>
        </S.HeaderMenu>
    );
};