import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/fonts.css";
import "./styles/reset.css";
import GlobalStyle from "./styles/GlobalStyle.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);
