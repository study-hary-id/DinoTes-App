import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './pages/Home';
import AddPage from './pages/Add';
import EditPage from './pages/Edit';

const Container = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Container>
      <Switch>
        <Route path="/add">
          <AddPage />
        </Route>
        <Route path="/edit/:id">
          <EditPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
