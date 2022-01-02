import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoralisProvider } from "react-moralis";
import "./index.css";

import { MoralisDappProvider } from "./providers/MoralisDappProvider/MoralisDappProvider";


/** Get your free Moralis Account https://moralis.io/ */

const APP_ID = "UY7iyzpNW6GKGVOYUnki9DnEa3Ddd5L5O6S2jqN5";
const SERVER_URL = "https://ylmq1gdhcprg.usemoralis.com:2053/server";

const Application = () => {
  const isServerInfo = APP_ID && SERVER_URL ? true : false;
  if (isServerInfo)
    return (
      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <MoralisDappProvider>
          <App isServerInfo />
        </MoralisDappProvider>
      </MoralisProvider>
    );
  else {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
      </div>
    
    );
  }
};

ReactDOM.render(
  // <React.StrictMode>
  <Application />,
  // </React.StrictMode>,
  document.getElementById("root")
);
