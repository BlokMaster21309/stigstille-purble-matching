import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./login.css";
import LoginPage from "./LoginPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginPage />
  </StrictMode>
);
