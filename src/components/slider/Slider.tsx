import {S} from './Slider_Styles';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './../../styles/Slider.css'

type SlidePropsType = {
    text: string,
    name: string
}

const Slide: React.FC<SlidePropsType> = (props) => {
    return (
        <S.Slide>
            <S.Text>{props.text}</S.Text>
            <S.Name>@{props.name}</S.Name>
        </S.Slide>)
}

const items = [
    <Slide text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n' +
        '                labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing\n' +
        '                elit.'} name={'ivan ivanow'}/>,
    <Slide text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n' +
        '                labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing\n' +
        '                elit.'} name={'viktor kvalow'}/>,
    <Slide text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n' +
        '                labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing\n' +
        '                elit.'} name={'unknown user'}/>
];

export const Slider = () => (
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}
            disableButtonsControls
        />
    </S.Slider>
);