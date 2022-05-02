import styled from "styled-components";

export const InternListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100vw;
  color: ${(props) => props.theme.fontColor};
`;

export const ListContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 20px;
  padding: 20px 40px;
  min-width: 250px;
  min-height: 300px;
  background-color: #f7f7f7;
  @media (min-width: 700px) {
    margin: 126px auto;
    padding: 40px 80px 80px;
    width: 656px;
    min-height: 500px;
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

export const UnorderedList = styled.ul`
  width: 100%;

  list-style: none;

  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px 24px;
    height: 64px;
    background: #f2f2f2;
    transition: 0.3s;
    &:nth-child(odd) {
      background: #ededed;
    }
    @media (min-width: 700px) {
      &:hover {
        background: #f7f7f7;
        border: 2px solid #222222;
      }
    }
  }
`;
