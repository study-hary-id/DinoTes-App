import styled from 'styled-components';

const Button = styled.button`
  background: ${(props) => (props.danger ? '#F56565' : '#3182ce')};
  color: white;
  cursor: pointer;
  font-size: 1em;
  margin: 1rem 0;
  padding: 0.75rem;
  border: 2px solid white;
  border-radius: 5px;
`;

export default Button;
