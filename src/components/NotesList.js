import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import getLocalStorageData from '../utils/getLocalStorageData';

const NotesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 30vw;
  text-align: center;
  margin: 1rem;
  padding: 1rem;
  border: 2px solid #a0aec0;
  border-radius: 5px;
`;

const List = styled.ul`
  list-style: none;
  margin-top: 0;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 0.5rem;
`;

const Separator = styled.hr`
  margin: -1px;
  color: #edf2f7;
  background-color: #edf2f7;
`;

const NotesList = () => {
  const notes = getLocalStorageData('notes');

  const listItem = notes.map((note) => (
    <ListItem key={note.id}>
      <h4>
        <Link to={`/edit/${note.id}`}>{note.title}</Link>
      </h4>
      <p>{note.note.slice(0, 99)}</p>
      <Separator />
    </ListItem>
  ));

  return (
    <NotesListContainer>
      <List>{listItem}</List>
    </NotesListContainer>
  );
};

export default NotesList;
