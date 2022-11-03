import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GlobalStyle from "./styles/modules/global";
import{ UserProvider }from './contexts/userContext';
import{ ModalProvider }from './contexts/modalContext';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
  <BrowserRouter>
      <UserProvider>
          <ModalProvider>
              <GlobalStyle />
              <App />
          </ModalProvider>
      </UserProvider>
  </BrowserRouter>
</React.StrictMode>
);
