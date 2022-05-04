// import React from "react";
import { EditIcon } from "../../styles/Icon.style";
import { Edit, EditLink, Pharagrapf } from "./ItemList.style";

export const ItemList = ({ id, name }) => {
  return (
    <>
      <li>
        <Pharagrapf>{name}</Pharagrapf>
        <EditLink to={`/interns/${id}`}>
          <EditIcon />
          <Edit>Edit</Edit>
        </EditLink>
      </li>
    </>
  );
};
