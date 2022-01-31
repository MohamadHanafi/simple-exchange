import styled from "styled-components";

export const StyledInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 250px;
  max-width: 500px;
  background-color: #396eb0;
  color: #fff;
  border-radius: 4px;
  padding: 20px 0;

  hr {
    width: 15%;
    border-bottom: 2px solid #fff;
    border-radius: 50%;
  }

  .small {
    font-size: 10px;
  }
`;
