import React from 'react';
import styled from "styled-components";

type WorkPropsType = {
    image: string
    title: string
    text: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.image} alt='image'/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href=''>DEMO</Link>
            <Link href=''>CODE</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  background-color: #ee6565;
  max-width: 540px;
  width: 100%;
`

const Image = styled.img`
  width: 100%;
  height: 260px;
`

const Title = styled.h3`
  font-weight: bold;
`
const Text = styled.p`
`
const Link = styled.a`
`
