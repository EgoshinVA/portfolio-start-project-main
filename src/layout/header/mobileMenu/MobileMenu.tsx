import React, {useState} from 'react';
import {Menu} from "../menu/Menu";
import { S } from './MobileMenu_Styles';

type HeaderMenuPropsType = {
    items: Array<string>
}

export const MobileMenu: React.FC<HeaderMenuPropsType> = (props) => {
    const [value, setPopup] = useState(false)
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={value}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={value}>
                <Menu items={props.items}/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};
