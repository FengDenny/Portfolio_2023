import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ScrollToTop from "./components/helper/ScrollToTop";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>
);
