import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 16px;
  width: 100vw;
  color: ${(props) => props.theme.fontColor};
`;

export const MainContainer = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 20px;
  padding: 20px 40px;
  min-width: 250px;
  min-height: 300px;
  background-color: ${(props) => props.theme.background};
  @media (min-width: 700px) {
    padding: 40px 80px 80px;
    width: 656px;
    min-height: 500px;
  }
`;
