import {  createHashRouter } from "react-router-dom";
import App from "./App";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

export const router = createHashRouter ([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Portfolio /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
