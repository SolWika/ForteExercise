import styled from "styled-components";
import logo from "../assets/logo.svg";
import editicon from "../assets/edit-icon.svg";
import backicon from "../assets/back-icon.svg";
import warningicon from "../assets/warning-icon.svg";

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
  padding-right: 12px;
`;

export const WarningIcon = styled.img.attrs({
  src: `${warningicon}`,
})`
  display: none;
  padding-right: 12px;
  &.invalid {
    position: absolute;
    top: 42px;
    right: 0px;
    display: block;
    width: 34px;
  }
`;
