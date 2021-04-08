/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  padding: 0 1rem;
  border: 2px solid ${(props) => (props.danger ? '#F56565' : '#68d391')};
  border-radius: 5px;
`;

const Message = (props) => {
  const { text, type } = props;

  return (
    <>
      {type === 'error' ? (
        <MessageContainer danger>
          <p>❌ {text}</p>
        </MessageContainer>
      ) : (
        <MessageContainer>
          <p>✅ {text}</p>
        </MessageContainer>
      )}
    </>
  );
};

export default Message;
