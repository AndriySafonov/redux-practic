import { NavLink } from "react-router-dom";
import styled from "styled-components"

export const StyleLink = styled(NavLink)`
text-decoration: none;
color: #414141;
&.active {
    color: red;
}
`