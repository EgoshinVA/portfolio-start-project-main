import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const HeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }

@media ${theme.media.tablet} {
  display: none;
}
`

export const S = {
    HeaderMenu
}