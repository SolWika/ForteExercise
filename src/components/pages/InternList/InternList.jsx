import React, { useEffect, useState } from "react";
import { PageContainer, MainContainer } from "../../../styles/Globals.style";
import { Header, List } from "./InternList.style";
import { Nav } from "../../Nav/Nav";
import { ItemList } from "../../ItemList/ItemList";

const InternList = () => {
  const [interns, setInterns] = useState([]);

  useEffect(() => {
    const fetchInterns = async () => {
      const response = await fetch("http://localhost:3001/interns");
      const interns = await response.json();
      setInterns(interns);
    };
    fetchInterns();
  }, []);

  return (
    <>
      <PageContainer>
        <Nav />
        <MainContainer>
          <Header>Participants</Header>
          <List>
            {interns.map((u) => (
              <ItemList id={u.id} name={u.name} key={u.id} />
            ))}
          </List>
        </MainContainer>
      </PageContainer>
    </>
  );
};

export default InternList;
