import React, { createContext, useContext, useState } from "react";

export const WalletInfoContext = createContext();

const WalletInfoContextProvider = ({ children }) => {
  const [wallet, setWallet] = useState({
    USD: 1000,
    EUR: 0,
  });

  return (
    <WalletInfoContext.Provider value={{ wallet }}>
      {children}
    </WalletInfoContext.Provider>
  );
};

export default WalletInfoContextProvider;
