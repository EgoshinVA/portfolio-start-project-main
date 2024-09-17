import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {IconWrapper} from "../skills/Skill";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle title={'Testimony'}/>
            <FlexWrapper direction={'column'} align={'center'}>
                <IconWrapper>
                    <Icon iconId={'quote'}/>
                </IconWrapper>
                <Slider/>
            </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  background-color: #f18080;
  min-height: 50vh;
  
  ${IconWrapper} {
    margin: 40px 0 72px;
  }
`