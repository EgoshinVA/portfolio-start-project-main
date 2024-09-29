import React, {useState} from "react";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {MobileMenu} from "./mobileMenu/MobileMenu";
import {S} from './Header_Styles'

export const Header: React.FC = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const breakpoint = 768

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize)

        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    {width < breakpoint ? <MobileMenu items={['Home', 'Skills', 'Works', 'Testimony', 'Contact']}/> :
                        <HeaderMenu items={['Home', 'Skills', 'Works', 'Testimony', 'Contact']}/>}
                </FlexWrapper>
            </Container>
        </S.Header>
    )
}

