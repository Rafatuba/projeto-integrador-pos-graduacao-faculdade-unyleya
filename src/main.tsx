import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AosInit from "./components/aos-init.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <AosInit />
  </StrictMode>
);
