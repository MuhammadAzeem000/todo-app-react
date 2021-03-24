import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./Components/App";
import { GlobalProvider } from "./GlobalContext/Context";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
