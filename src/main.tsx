import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StateGameProvider, useStateGame } from "./contexts/StateGameContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StateGameProvider>
      <App />
    </StateGameProvider>
  </React.StrictMode>
);
