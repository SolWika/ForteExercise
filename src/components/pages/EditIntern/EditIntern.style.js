import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const BackLinkWrapper = styled.div`
  position: absolute;
  top: 52px;
  left: 105px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  width: 656px;
  @media (min-width: 700px) {
    left: 145px;
  }
  @media (min-width: 950px) {
    left: auto;
  }
`;

export const BackLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  text-decoration: none;
`;

export const Back = styled.p`
  color: ${(props) => props.theme.buttons.text};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const Header = styled.h1`
  padding-bottom: 20px;
  font-weight: 500;
  font-size: 30px;
  @media (min-width: 700px) {
    padding-bottom: 40px;
    font-size: 40px;
  }
`;
