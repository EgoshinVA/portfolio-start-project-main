import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle title={'Contact'}/>
                <StyledForm>
                    <Field placeholder='Name'/>
                    <Field placeholder='Name'/>
                    <Field placeholder='Name' as='textarea'/>
                    <Button type={'submit'}>Send Message</Button>
                </StyledForm>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section``

const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;
  
  textarea {
    resize: none;
    height: 155px;
  }
`
const Field = styled.input`
  width: 100%;
  background-color: ${theme.colors.secondaryBg};
  border: 1px solid ${theme.colors.borderColor};
  padding: 7px 15px;
  
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.05em;
  color: ${theme.colors.font};
  
  &::placeholder {
    color: ${theme.colors.placeholderColor};
  }
  
  &:focus-visible {
    outline: 1px solid ${theme.colors.borderColor};
  }
`

