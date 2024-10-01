import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {S} from "../skills/Skill_Styles";
import {Container} from "../../../components/Container";
import styled from "styled-components";

export const Testimony: React.FC = () => {
    return (
        <StyledTestimony id={'testimony'}>
            <Container>
                <SectionTitle title={'Testimony'}/>
                <FlexWrapper direction={'column'} align={'center'}>
                    <S.IconWrapper>
                        <Icon iconId={'quote'}/>
                    </S.IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  background-color: #f18080;
  min-height: 50vh;
  position: relative;

  ${S.IconWrapper} {
    margin: 28px 0 72px;
  }
`