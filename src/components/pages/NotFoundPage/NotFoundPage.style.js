import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NotFoundPagekWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;
`;

export const Number404 = styled.h1`
  padding-bottom: 20px;
  font-weight: 500;
  font-size: 60px;
  @media (min-width: 700px) {
    padding-bottom: 40px;
    font-size: 100px;
  }
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

export const ButtonLink = styled(NavLink)`
  width: 224px;
  height: 48px;
  background-color: black;
  font-family: "Roboto";
  font-size: 16px;
  line-height: 48px;
  text-align: center;
  text-decoration: none;
  color: white;
`;
