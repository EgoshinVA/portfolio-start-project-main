import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "react-scroll";

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  color: ${theme.colors.accent};
  transition: ${theme.animations.transition};

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`

const NavLink = styled(Link)`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 30px;
  font-weight: 400;
  text-align: center;
  color: transparent;

  &::before {
    content: '';
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.accent};

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;

    transform: scale(0);
    transition: ${theme.animations.transition};
  }

  &:hover, &.active {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color: ${theme.colors.font};

      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }
  }
`

const ListItem = styled.li`
  position: relative;
`

export const S = {
    NavLink,
    Mask,
    ListItem
}