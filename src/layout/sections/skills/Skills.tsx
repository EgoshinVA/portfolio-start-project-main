import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle title='My Skills'/>
            <FlexWrapper wrap justify='space-between'>
                <Skill skillIcon='code' skillTitle='HTML5' skillText='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'/>
                <Skill skillIcon='css' skillTitle='CSS3' skillText='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'/>
                <Skill skillIcon='react' skillTitle='REACT' skillText='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'/>
                <Skill skillIcon='typeScript' skillTitle='typescript' skillText='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'/>
                <Skill skillIcon='styledComponents' skillTitle='styled components' skillText='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'/>
                <Skill skillIcon='figma' skillTitle='WEB DESIGN' skillText='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  min-height: 100vh;
  background-color: #eac974;
`