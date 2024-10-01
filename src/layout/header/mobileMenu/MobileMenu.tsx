import React, {useState} from 'react';
import {Menu} from "../menu/Menu";
import { S } from './MobileMenu_Styles';

export const MobileMenu: React.FC = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const onButtonClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onButtonClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={onButtonClick}>
                <Menu/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};
