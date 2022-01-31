import Form from "./components/Form";
import Info from "./components/Info";
import { Container } from "./components/styles/Container.styled";
import GlobalStyle from "./components/styles/Global";

// context
import WalletInfoProvider from "./context/WalletInfoContext";
import TransactionInfoContextProvider from "./context/TransactionInofContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container direction="column" padding="0 20px" gap="10px" main={true}>
        <h4>Convert from one to another currency</h4>
        <Container direction="row" padding="0" wrap gap="20px">
          <WalletInfoProvider>
            <TransactionInfoContextProvider>
              <Form />
              <Info />
            </TransactionInfoContextProvider>
          </WalletInfoProvider>
        </Container>
      </Container>
    </>
  );
}

export default App;
