import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./Work";
import proj1 from '../../../assets/images/proj1.webp'
import proj2 from '../../../assets/images/proj2.webp'
import {TabMenu} from "./tabMenu/TabMenu";
import {Container} from "../../../components/Container";

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle title='My Works'/>
                <TabMenu items={['ALL', 'LANDING PAGE', 'REACT', 'SPA']}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap>
                    <Work image={proj1} title='Social Network'
                          text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'/>
                    <Work image={proj2} title='Timer'
                          text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  ${FlexWrapper} {
    gap: 30px;
  }
`