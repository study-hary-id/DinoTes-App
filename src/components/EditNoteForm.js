/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, TextArea } from './ui/Form';
import Button from './ui/Button';
import Message from './ui/Message';
import getLocalStorageData from '../utils/getLocalStorageData';

const InfoWrapper = (props) => {
  const { status } = props;

  if (status !== null) {
    if (status === false) {
      return <Message type="error" text="Title is required in this note" />;
    }
    return <Message type="success" text="Data successfully saved in your account" />;
  }

  return <></>;
};

const EditNoteForm = () => {
  const history = useHistory();
  const location = useLocation();
  const [isSuccess, setIsSuccess] = useState(null);
  const [currentNote, setCurrentNote] = useState({ title: '', note: '' });
  const [allNotes, setAllNotes] = useState(null);

  useEffect(() => {
    const notes = getLocalStorageData('notes');

    setAllNotes(notes);

    const noteId = location.pathname.replace('/edit/', '');
    const currentNotes = notes.filter((note) => note.id === noteId);

    setCurrentNote(currentNotes[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTitleChange = (e) => {
    setCurrentNote({ ...currentNote, title: e.target.value });
  };

  const handleNoteChange = (e) => {
    setCurrentNote({ ...currentNote, note: e.target.value });
  };

  const handleSubmit = (e) => {
    const newNotes = allNotes.map((note) => {
      if (note.id === currentNote.id) {
        return { ...note, title: currentNote.title, note: currentNote.note };
      }
      return note;
    });

    if (currentNote.title !== '') {
      localStorage.setItem('notes', JSON.stringify(newNotes));
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
    }

    e.preventDefault();
  };

  const handleDeleteNote = () => {
    const newNotes = allNotes.filter((note) => note.id !== currentNote.id);

    setCurrentNote(null);
    setAllNotes(newNotes);

    localStorage.setItem('notes', JSON.stringify(newNotes));
    history.push('/');
  };

  const { title, note } = currentNote;

  return (
    <>
      <InfoWrapper status={isSuccess} />
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Title :</Label>
          <Input type="text" name="title" value={title} onChange={handleTitleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Note :</Label>
          <TextArea name="note" rows="12" value={note} onChange={handleNoteChange} />
        </FormGroup>
        <FormGroup>
          <Button type="submit">Save</Button>
          <Button danger onClick={handleDeleteNote}>
            Delete
          </Button>
        </FormGroup>
      </Form>
    </>
  );
};

export default EditNoteForm;
