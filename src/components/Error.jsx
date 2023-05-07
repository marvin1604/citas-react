import React from "react";
import styled from "styled-components"

const Error = ({mensaje}) => {
  return (
    <ErrorContainer>
      <p>{mensaje}</p>
    </ErrorContainer>
  );
};

export default Error;

const ErrorContainer = styled.div`
  color: white;
  background: red;
  text-align:center;
  border-radius: 5px;
  padding: 5px;
` 