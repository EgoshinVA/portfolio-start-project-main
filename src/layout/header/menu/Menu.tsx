import React from 'react';
import {S} from "./Menu_Styles";


type MenuPropsType = {
    items: Array<string>
}

export const Menu: React.FC<MenuPropsType> = (props) => {
    return (
        <ul>
            {props.items.map((i, index) =>
            <S.ListItem key={index}>
                <S.Link href="">
                    {i}
                    <S.Mask>
                        <span>{i}</span>
                    </S.Mask>
                    <S.Mask>
                        <span>{i}</span>
                    </S.Mask>
                </S.Link>
            </S.ListItem>)}
        </ul>
    );
};