import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ContactApp } from "./ContactApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContactApp />
  </StrictMode>
);
