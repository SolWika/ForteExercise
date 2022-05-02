import React from "react";
import { NavContainer, LogoContainer } from "./Nav.style";
import { Logo } from "../../styles/Icon.style";

export const Nav = () => {
  return (
    <>
      <NavContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </NavContainer>
    </>
  );
};
