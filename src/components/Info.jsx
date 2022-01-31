import React, { useContext } from "react";
import { StyledInfo } from "./styles/Info.styled";

import { TransactionInfoContext } from "../context/TransactionInofContext";

const Info = () => {
  const {
    rate,
    source,
    destination,
    transactionSource,
    transactionDestination,
  } = useContext(TransactionInfoContext);

  return (
    <StyledInfo>
      <p>
        You are converting:{" "}
        <span>{`${transactionSource === "USD" ? "$" : "€"}${
          source ? (+source).toFixed(2) : "0.00"
        }`}</span>
      </p>
      {rate ? (
        <p className="small">
          exchange rate:{" "}
          <span>{`1${transactionSource} = ${rate}${transactionDestination}`}</span>
        </p>
      ) : null}

      <p>
        You will get:{" "}
        <span>{`${transactionDestination === "EUR" ? "€" : "$"}${
          destination ? (+destination).toFixed(2) : "0.00"
        }`}</span>
      </p>
      <hr />
      <p>
        Source: <span>{`${transactionSource} wallet`}</span>
      </p>
      {rate ? (
        <p className="small">
          Destination: <span>{`${transactionDestination} wallet`}</span>
        </p>
      ) : null}
    </StyledInfo>
  );
};

export default Info;
