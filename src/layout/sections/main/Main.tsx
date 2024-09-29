import React from 'react';
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import { S } from './Main_Styles';

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align='center' justify='space-around' wrap>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Vitaliy Egoshin</span></S.Name>
                        <S.Title>A Web Developer.</S.Title>
                    </div>

                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt="photo"/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

