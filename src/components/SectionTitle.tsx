import React from 'react';
import styled from "styled-components";

type SectionTitlePropsType = {
    title: string
}

export const SectionTitle = (props: SectionTitlePropsType) => {
    return (
        <StyledTitle>
            {props.title}
        </StyledTitle>
    );
};

const StyledTitle = styled.h2`
  color: #7467ec;
  text-align: center;
`
