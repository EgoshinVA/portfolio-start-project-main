import React from 'react';
import {Menu} from "../menu/Menu";
import { S } from './MobileMenu_Styles';

type HeaderMenuPropsType = {
    items: Array<string>
}

export const MobileMenu: React.FC<HeaderMenuPropsType> = (props) => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={false}>
                <Menu items={props.items}/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};
