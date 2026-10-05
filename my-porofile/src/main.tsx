import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";
import "./lib/reveal";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);