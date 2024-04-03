import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { SelectedContextProvider } from "./context/SelectedContext.jsx";
import { SocketContextProvider } from "./context/SocketContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <SelectedContextProvider>
          <SocketContextProvider>
            <App />
          </SocketContextProvider>
        </SelectedContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
