import React, {useState} from 'react';
import {Menu} from "../menu/Menu";
import { S } from './MobileMenu_Styles';

type HeaderMenuPropsType = {
    items: Array<string>
}

export const MobileMenu: React.FC<HeaderMenuPropsType> = (props) => {
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
                <Menu items={props.items}/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};
