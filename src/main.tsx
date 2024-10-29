import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ContactApp } from "./components/ContactApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContactApp />
  </StrictMode>
);
