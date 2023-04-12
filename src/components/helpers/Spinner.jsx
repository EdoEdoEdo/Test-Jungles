import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/variables";

const Spinner = styled.div`
  border: 8px solid ${colors.black};
  border-top: 8px ${colors.white} solid;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 80vh;
  background: ${colors.lightGrey};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpinnerPage = () => {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
};
