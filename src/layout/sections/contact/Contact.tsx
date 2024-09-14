import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";

export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle title={'Contact'}/>
            <StyledForm>
                <Field placeholder='Name'/>
                <Field placeholder='Name'/>
                <Field placeholder='Name' as='textarea'/>
                <Button type={'submit'}>Send Message</Button>
            </StyledForm>
        </StyledContact>
    );
};

const StyledContact = styled.section`
  min-height: 50vh;
  background-color: #6ac5f6;
`
const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
`
const Field = styled.input`
  
`

