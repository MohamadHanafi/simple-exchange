import React from "react";
import { StyledInfo } from "./styles/Info.styled";

const Info = () => {
  return (
    <StyledInfo>
      <p>
        You are converting: <span>$0.00</span>
      </p>
      <p>
        You will get: <span>$0.00</span>
      </p>
      <hr />
      <p>
        Source: <span>USD</span>
      </p>
    </StyledInfo>
  );
};

export default Info;
