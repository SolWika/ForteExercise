import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { PageContainer, MainContainer } from "../../../styles/Globals.style";
import { BackLinkWrapper, BackLink, Back, Header } from "./EditIntern.style";
import { BackIcon } from "../../../styles/Icon.style";
import { Nav } from "../../Nav/Nav";
import { FormCard } from "../../FormCard/FormCard";

const EditIntern = () => {
  const { id } = useParams();
  const [intern, setIntern] = useState(null);

  useEffect(() => {
    const fetchIntern = async () => {
      const response = await fetch(`http://localhost:3001/interns/${id}`);
      //Obsługa błędów do zrobienia
      const data = await response.json();
      setIntern(data);
    };

    fetchIntern();
  }, [id]);

  return (
    <>
      <PageContainer>
        <Nav />

        <BackLinkWrapper>
          <BackLink to="/">
            <BackIcon />
            <Back>Back to list </Back>
          </BackLink>
        </BackLinkWrapper>

        <MainContainer>
          <Header>Edit</Header>
          {intern && <FormCard intern={intern} />}
        </MainContainer>
      </PageContainer>
    </>
  );
};

export default EditIntern;
