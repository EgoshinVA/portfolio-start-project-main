import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import { S } from './Contact_Styles';

export const Contact: React.FC = () => {
    return (
        <S.Contact>
            <Container>
                <SectionTitle title={'Contact'}/>
                <S.StyledForm>
                    <S.Field placeholder='Name'/>
                    <S.Field placeholder='Name'/>
                    <S.Field placeholder='Name' as='textarea'/>
                    <Button type={'submit'}>Send Message</Button>
                </S.StyledForm>
            </Container>
        </S.Contact>
    );
};
