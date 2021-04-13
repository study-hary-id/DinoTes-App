import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 30vw;
  margin: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  text-align: left;
  color: #4a5568;
`;

const Input = styled.input`
  margin: 1rem 0;
  padding: 0.5rem;
`;

const TextArea = styled.textarea`
  margin: 1rem 0;
  padding: 0.5rem;
  resize: none;
`;

export { Form, FormGroup, TextArea, Input, Label };
