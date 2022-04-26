import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

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
      <StyledApp>
        {" "}
        <div>
          {interns.map((u) => (
            <div key={u.id}>
              {u.name} <NavLink to={`/interns/${u.id}`}>Edit</NavLink>
            </div>
          ))}
        </div>
      </StyledApp>
    </>
  );
};

export default InternList;
