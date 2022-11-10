import RoutesMain from "./routes";
import GeneralProvider from "./contexts/GeneralContext";
import GlobalStyle from "./styles/modules/global";
import { ToastContainer } from "react-toastify";
import LoadingProvider from "./contexts/LoadingContext";

function App() {
  return (
    <>
      <GeneralProvider>
        <LoadingProvider>
          <RoutesMain />
        </LoadingProvider>
      </GeneralProvider>
      <GlobalStyle />
      <ToastContainer
        autoClose={1000}
        toastStyle={{
          background: "var(--color-grey-0)",
          color: "var(--color-grey-3)",
        }}
      />
    </>
  );
}

export default App;
