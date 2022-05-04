import styled from "styled-components";

export const Header = styled.h1`
  padding-bottom: 20px;
  font-weight: 500;
  font-size: 30px;
  @media (min-width: 700px) {
    padding-bottom: 40px;
    font-size: 40px;
  }
`;

export const List = styled.ul`
  width: 100%;
  list-style: none;

  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-width: 250px;
    height: 64px;
    padding: 8px 24px;
    background: ${(props) => props.theme.colors.secondary};
    transition: 0.3s;
    &:nth-child(odd) {
      background: ${(props) => props.theme.colors.primary};
    }
    @media (min-width: 700px) {
      &:hover {
        background: ${(props) => props.theme.colors.tertiary};
        border: 2px solid #222222;
      }
    }
  }
`;
