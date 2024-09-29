import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from './Footer_Styles';

const footerIconData = ['instagram', 'telegram', 'vk', 'link']

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.Name>Vitaliy</S.Name>
                <S.SocialList>
                    {footerIconData.map((item, index) =>
                        <S.SocialItem key={index}>
                            <S.SocialLink>
                                <Icon height={'21px'} width={'21px'} viewBox={'0 0 21 21'} iconId={item}/>
                            </S.SocialLink>
                        </S.SocialItem>
                    )}
                </S.SocialList>
                <S.Copyright>© 2024 Vitaliy Egoshin, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};