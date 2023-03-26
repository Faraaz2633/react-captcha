import React from "react";
import ReactDOM from "react-dom/client";

//router
import { BrowserRouter as Router } from "react-router-dom";

//css
import "./index.css";

//components
import App from "./App";

//library
import { ThemeProvider } from "./context/ThemeContext";
import { ToastProvider } from "./context/ToastContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ToastProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ToastProvider>
    </Router>
  </React.StrictMode>
);