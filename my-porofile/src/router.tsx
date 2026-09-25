import { Suspense, lazy } from "react";
import { createHashRouter } from "react-router-dom";
import App from "./App";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

const pageFallback = (
  <div className="flex min-h-[60vh] items-center justify-center text-soft">…</div>
);

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Portfolio /> },
      { path: "blog", element: <Suspense fallback={pageFallback}><Blog /></Suspense> },
      { path: "blog/:slug", element: <Suspense fallback={pageFallback}><BlogPost /></Suspense> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);