import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from './Skill_Styles';

type SkillPropsType = {
    skillIcon: string
    skillTitle: string
    skillText: string
}

export const Skill: React.FC<SkillPropsType> = (props) => {
    return (
        <S.Skill>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.IconWrapper>
                    <Icon iconId={props.skillIcon}/>
                </S.IconWrapper>
                <S.SkillTitle>{props.skillTitle}</S.SkillTitle>
                <S.SkillText>{props.skillText}</S.SkillText>
            </FlexWrapper>
        </S.Skill>
    );
};