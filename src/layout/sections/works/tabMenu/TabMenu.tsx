import React from 'react';
import {Link} from "../../../../components/Link";
import {S} from './TabMenu_Styles';
import {TabsItemsType, TabsStatusType} from "../Works";

type MenuPropsType = {
    items: TabsItemsType,
    changeFilterStatus: (value: TabsStatusType) => void,
    currentFilterStatus: TabsStatusType
}

export const TabMenu: React.FC<MenuPropsType> = (props) => {
    return (
        <S.TabMenu>
            <ul>
                {props.items.map((i, index) =>
                    <S.ListItem key={index}>
                        <Link active={props.currentFilterStatus === i.status} as={'button'} onClick={() => props.changeFilterStatus(i.status)}>{i.title}</Link>
                    </S.ListItem>)}
            </ul>
        </S.TabMenu>
    );
};