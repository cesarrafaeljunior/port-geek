import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GlobalStyle from "./styles/modules/global";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ToastContainer
      autoClose={1000}
      toastStyle={{
        background: "var(--color-grey-0)",
        color: "var(--color-grey-3)",
      }}
    />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
