/* eslint-disable no-underscore-dangle */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3001/api/notes');
      const data = await response.json();
      setNotes({ data });
    }

    fetchData();
  }, []);

  const listItem =
    notes &&
    notes.data.map((note) => (
      <ListItem key={note._id}>
        <h4>
          <Link to={`/edit/${note._id}`}>{note.title}</Link>
        </h4>
        <p>{note.note.slice(0, 101)}</p>
        <Separator />
      </ListItem>
    ));

  return (
    <NotesListContainer>
      <List>
        <Separator />
        {listItem}
      </List>
    </NotesListContainer>
  );
};

export default NotesList;
