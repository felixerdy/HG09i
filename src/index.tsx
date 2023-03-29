import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, GlobalStyle } from "@react95/core";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <>
        <GlobalStyle />
        <App />
      </>
    </ThemeProvider>
    {process.env.NODE_ENV === 'production' && (
      <script
          async
          defer
          data-website-id="ac2e5b24-87d2-49b9-9702-35d21ae7c7ba"
          src="https://umami-eta-one.vercel.app/umami.js"
      ></script>
    )}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
