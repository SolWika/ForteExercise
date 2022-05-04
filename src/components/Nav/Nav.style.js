import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100vw;
  background-color: transparent;
`;

export const LogoContainer = styled(NavLink)`
  margin: 10px 10px 0;
  height: 80px;

  @media (min-width: 700px) {
    margin: 40px 40px 0;
  }
`;
