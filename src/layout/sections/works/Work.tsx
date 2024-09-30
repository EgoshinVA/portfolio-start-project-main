import React from 'react';
import {Link} from "../../../components/Link";
import {Button} from "../../../components/Button";
import { S } from './Works_Styles';

type WorkPropsType = {
    image: string
    title: string
    text: string
}

export const Work: React.FC<WorkPropsType> = (props) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.image} alt='image'/>
                <Button>view project</Button>
            </S.ImageWrapper>
            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <Link active href=''>DEMO</Link>
                <Link href=''>CODE</Link>
            </S.Description>
        </S.Work>
    );
};