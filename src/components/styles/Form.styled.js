import styled from "styled-components";

export const StyledForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  input {
    width: 100%;
    min-width: 250px;
    max-width: 500px;
    padding: 6px;
    border-radius: 4px;
    border: 1px solid #396eb0;
  }
  button {
    width: 100%;
    min-width: 250px;
    max-width: 500px;
    padding: 8px;
    border-radius: 4px;
    border: 0;
    background-color: #396eb0;
    color: #fff;
  }
  h5 {
    color: #396eb0;
  }
`;
