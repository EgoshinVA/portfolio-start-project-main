import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./Work";
import proj1 from '../../../assets/images/proj1.webp'
import proj2 from '../../../assets/images/proj2.webp'
import {Menu} from "../../../components/menu/Menu";

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle title='My Works'/>
            <Menu items={['ALL', 'LANDING PAGE', 'REACT', 'SPA']}/>
            <FlexWrapper justify={'space-around'}>
                <Work image={proj1} title='Social Network' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'/>
                <Work image={proj2} title='Timer' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #c59df1;
`