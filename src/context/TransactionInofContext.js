import React, { createContext, useState } from "react";

export const TransactionInfoContext = createContext();

const TransactionInfoContextProvider = ({ children }) => {
  const [rate, setRate] = useState(0);
  const [source, setSource] = useState();
  const [destination, setDestination] = useState();
  const [transactionSource, setTransactionSource] = useState("");
  const [transactionDestination, setTransactionDestination] = useState("");

  return (
    <TransactionInfoContext.Provider
      value={{
        rate,
        source,
        destination,
        transactionSource,
        transactionDestination,
        setRate,
        setSource,
        setDestination,
        setTransactionSource,
        setTransactionDestination,
      }}
    >
      {children}
    </TransactionInfoContext.Provider>
  );
};

export default TransactionInfoContextProvider;
