import styled from "styled-components";
import logo from "../assets/logo.svg";
import editicon from "../assets/edit-icon.svg";
import backicon from "../assets/back-icon.svg";
export const Logo = styled.img.attrs({
  src: `${logo}`,
})``;

export const EditIcon = styled.img.attrs({
  src: `${editicon}`,
})`
  padding-right: 10px;
`;

export const BackIcon = styled.img.attrs({
  src: `${backicon}`,
})`
  padding-right: 10px;
`;
