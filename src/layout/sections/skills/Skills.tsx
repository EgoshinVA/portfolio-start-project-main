import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./Skill";
import {Container} from "../../../components/Container";
import {S} from './Skill_Styles';

const skillData = [
    {
        skillIcon: 'code',
        skillTitle: 'HTML5',
        skillText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        skillIcon: 'css',
        skillTitle: 'CSS3',
        skillText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        skillIcon: 'react',
        skillTitle: 'REACT',
        skillText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        skillIcon: 'typeScript',
        skillTitle: 'typescript',
        skillText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        skillIcon: 'styledComponents',
        skillTitle: 'styled components',
        skillText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        skillIcon: 'figma',
        skillTitle: 'WEB DEsIGN',
        skillText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
]

export const Skills: React.FC = () => {
    return (
        <S.Skills id={'skills'}>
            <Container>
                <SectionTitle title='My Skills'/>
                <FlexWrapper wrap justify='space-between'>
                        {skillData.map((item, index) =>
                            <Skill key={index}
                                   skillIcon={item.skillIcon}
                                   skillTitle={item.skillTitle}
                                   skillText={item.skillText}/>
                        )}
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};

