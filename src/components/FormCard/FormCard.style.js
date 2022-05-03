import styled from "styled-components";
import { Form, Field, ErrorMessage } from "formik";

export const EditForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto;
  width: 496px;
`;

export const FieldContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 152px;
`;

export const Label = styled.label`
  align-self: flex-start;

  font-weight: 500;
  font-size: 18px;
  color: black;
`;

export const StyledField = styled(Field)`
  align-self: flex-start;
  margin-top: 8px;
  padding: 12px 16px;
  width: 100%;
  height: 48px;
  background: #f7f7f7;
  font-family: "Roboto";
  font-size: 18px;
  color: black;
  &:focus {
    border: 2px solid #222222;
    box-shadow: 0px 0px 0px 2px #d3f2ff;
  }
  &.invalid {
    border: 1px solid #222222;
    box-shadow: 0px 0px 0px 2px #a3270c;
  }
`;

export const StyledInlineErrorMessage = styled(ErrorMessage)`
  color: ${({ theme }) => theme.colors.warning || "#FF0000"};
  align-self: flex-start;
  margin-top: 8px;
  font-size: 16px;
  line-height: 24px;
  ${StyledField} {
    border: 1px solid #222222;
    box-shadow: 0px 0px 0px 2px #a3270c;
  }
`;

export const Button = styled.button`
  width: 224px;
  height: 48px;
  background-color: black;
  font-family: "Roboto";
  font-size: 16px;
  line-height: 48px;
  color: white;
`;
