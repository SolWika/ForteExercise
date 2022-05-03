import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { PageContainer, MainContainer } from "../../../styles/Globals.style";
import { BackLinkWrapper, BackLink, Back, Header } from "./EditIntern.style";
import { BackIcon } from "../../../styles/Icon.style";
import { Nav } from "../../Nav/Nav";
import { FormCard } from "../../FormCard/FormCard";
const EditIntern = () => {
  const { id } = useParams();
  const [intern, setIntern] = useState({});

  useEffect(() => {
    const fetchIntern = async () => {
      const response = await fetch(`http://localhost:3001/interns/${id}`);
      // console.log(response);
      //TODO obsługa błędów
      const data = await response.json();
      console.log(data);
      setIntern(data);
    };

    fetchIntern();
  }, [id]);

  // useEffect(() => {
  //   //TODO: get intern from REST api http://localhost:3001/interns/:id
  //   console.log(`I want to get intern with id: ${id}!`);
  // }, [id]);

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

          <FormCard intern={intern} />

          {/* <form>
            <label>Name</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="text" name="email" />

            <input type="submit" value="Submit" />
          </form> */}
        </MainContainer>
      </PageContainer>
    </>
  );
};

export default EditIntern;
