import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Providers } from "./contexts/Providers";
import GlobalStyle from "./styles/modules/global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
