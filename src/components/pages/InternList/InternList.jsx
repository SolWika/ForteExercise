import React, { useEffect, useState } from "react";
import {
  InternListContainer,
  ListContainer,
  Header,
  UnorderedList,
} from "./InternList.style";
import { Nav } from "../../Nav/Nav";
import { ItemList } from "../../ItemList/ItemList";

const InternList = () => {
  const [interns, setInterns] = useState([]);

  useEffect(() => {
    const fetchInterns = async () => {
      const response = await fetch("http://localhost:3001/interns");
      console.log(response);
      const interns = await response.json();
      setInterns(interns);
    };
    fetchInterns();
  }, []);

  return (
    <>
      <Nav />
      <InternListContainer>
        <ListContainer>
          <Header>Participants</Header>
          <UnorderedList>
            {interns.map((u) => (
              <ItemList id={u.id} name={u.name} key={u.id} />
            ))}
          </UnorderedList>
        </ListContainer>
      </InternListContainer>
    </>
  );
};

export default InternList;
