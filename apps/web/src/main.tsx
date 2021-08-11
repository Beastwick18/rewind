import { MobXProvider } from "@rewind/feature-replay-viewer";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom";

import App from "./app/app";
import { io } from "socket.io-client";
import { Provider } from "react-redux";
import store from "./app/store";

// TODO: process.env.URL
const url = "http://localhost:7271";

const socket = io(url);
socket.on("connect", () => {
  console.log("Connected to WebSocket");
});

const reducer = {};

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <MobXProvider url={url} socket={socket}>
        <App />
      </MobXProvider>
    </Provider>
  </StrictMode>,

  document.getElementById("root"),
);
