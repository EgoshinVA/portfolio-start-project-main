import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    skillIcon: string
    skillTitle: string
    skillText: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.skillIcon}/>
            <SkillTitle>{props.skillTitle}</SkillTitle>
            <SkillText>{props.skillText}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 30%;
  background-color: rgba(255, 255, 255, 0.21);
  margin: 10px;
`
const SkillTitle = styled.h3`
`
const SkillText = styled.p`
`