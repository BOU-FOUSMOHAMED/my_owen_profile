import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import "./index.css";
import "./lib/reveal";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </ThemeProvider>
);