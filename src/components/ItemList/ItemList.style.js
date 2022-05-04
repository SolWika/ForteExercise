import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const EditLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  text-decoration: none;
`;

export const Pharagrapf = styled.p`
  color: ${(props) => props.theme.fontColor};
  font-size: 18px;
  line-height: 24px;
`;
export const Edit = styled.p`
  color: ${(props) => props.theme.fontColor};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;
