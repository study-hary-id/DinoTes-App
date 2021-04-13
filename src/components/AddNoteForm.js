/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, TextArea } from './ui/Form';
import Button from './ui/Button';
import Message from './ui/Message';

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

const AddNoteForm = () => {
  const [isSuccess, setIsSuccess] = useState(null);
  const [currentNote, setCurrentNote] = useState({ title: '', note: '' });

  const handleTitleChange = (e) => {
    setCurrentNote({ ...currentNote, title: e.target.value });
  };

  const handleNoteChange = (e) => {
    setCurrentNote({ ...currentNote, note: e.target.value });
  };

  const handleSubmit = (e) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(currentNote)
    };

    async function fetchData() {
      const response = await fetch('http://localhost:3001/api/notes', options);

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setIsSuccess(false);
      }
    }

    fetchData();
    e.preventDefault();
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
          <Button type="submit">Add</Button>
        </FormGroup>
      </Form>
    </>
  );
};

export default AddNoteForm;
