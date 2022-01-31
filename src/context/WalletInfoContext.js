import React, { createContext, useState } from "react";

export const WalletInfoContext = createContext();

const WalletInfoContextProvider = ({ children }) => {
  const [wallet, setWallet] = useState({
    USD: 1000,
    EUR: 0,
  });

  return (
    <WalletInfoContext.Provider value={{ wallet, setWallet }}>
      {children}
    </WalletInfoContext.Provider>
  );
};

export default WalletInfoContextProvider;
