import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout';
import Container from '../components/ui/Container';
import NotesList from '../components/NotesList';
import Button from '../components/ui/Button';

const HomePage = () => (
  <PageLayout>
    <Container>
      <Link to="/add">
        <Button>Add New Note</Button>
      </Link>
      <NotesList />
    </Container>
  </PageLayout>
);

export default HomePage;
