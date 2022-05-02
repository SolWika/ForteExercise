import styled from "styled-components";
import logo from "../assets/logo.svg";
import editicon from "../assets/edit-icon.svg";
export const Logo = styled.img.attrs({
  src: `${logo}`,
})``;

export const EditIcon = styled.img.attrs({
  src: `${editicon}`,
})`
  padding-right: 10px;
`;
