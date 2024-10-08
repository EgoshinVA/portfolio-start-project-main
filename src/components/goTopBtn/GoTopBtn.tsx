import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from "react-scroll/modules";

export const GoTopBtn = () => {

    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [])

    return (
        <>
            {showBtn && <StyledGoTopBtn onClick={() => {
                scroll.scrollToTop()
            }}>
                <Icon iconId={'arrow'} width={'16'} height={'15'} viewBox={'0 0 16 15'}/>
            </StyledGoTopBtn>}
        </>
    );
};

const StyledGoTopBtn = styled.button`
  padding: 7px;
  background-color: #0000004D;
  position: fixed;
  bottom: 30px;
  right: 30px;
`