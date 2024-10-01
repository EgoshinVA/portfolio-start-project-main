import React from 'react';
import {S} from "./Menu_Styles";

const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']

export const Menu: React.FC = () => {
    return (
        <ul>
            {items.map((item, index) =>
                <S.ListItem key={index}>
                    <S.NavLink activeClass={'active'} to={item.toLowerCase()} smooth={true} spy={true} offset={-50}>
                        {item}
                        <S.Mask>
                            <span>{item}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{item}</span>
                        </S.Mask>
                    </S.NavLink>
                </S.ListItem>)}
        </ul>
    );
};