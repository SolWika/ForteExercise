import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100vw;
  background-color: transparent;

  @media (min-width: 700px) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;
export const LogoContainer = styled.div`
  margin: 10px 10px;
  height: 80px;

  @media (min-width: 700px) {
    margin: 40px 40px;
  }
`;
