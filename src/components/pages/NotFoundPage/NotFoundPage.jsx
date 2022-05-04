import React from "react";
import { PageContainer, MainContainer } from "../../../styles/Globals.style";
import { NotFoundPagekWrapper, Header, Number404, ButtonLink } from "./NotFoundPage.style";
import { Nav } from "../../Nav/Nav";

const NotFoundPage = () => {
  return (
    <>
      <PageContainer>
        <Nav />
        <MainContainer>
          <NotFoundPagekWrapper>
            <Number404>404</Number404>
            <Header>Page Not Found</Header>
            <ButtonLink to="/">Back to Start</ButtonLink>
          </NotFoundPagekWrapper>
        </MainContainer>
      </PageContainer>
    </>
  );
};

export default NotFoundPage;
