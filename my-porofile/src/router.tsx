import { Suspense, lazy, type ReactNode } from "react";
import { Navigate, createBrowserRouter, useParams } from "react-router-dom";
import App from "./App";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";
import { LanguageProvider, isSupportedLang } from "./context/LanguageContext";
import { DEFAULT_LANG } from "./lib/seo";

const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

const pageFallback = (
  <div className="flex min-h-[60vh] items-center justify-center text-soft">…</div>
);

/** Serves a page only when the `:lang` segment is a supported language. */
function RequireLang({ children }: { children: ReactNode }) {
  const { lang } = useParams<{ lang: string }>();
  return isSupportedLang(lang) ? <>{children}</> : <NotFound />;
}

/** Keeps legacy, language-less URLs working: `/blog/x` -> `/fr/blog/x`. */
function LegacySlugRedirect() {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={`/${DEFAULT_LANG}/blog/${slug}`} replace />;
}

const guarded = (element: ReactNode) => <RequireLang>{element}</RequireLang>;

export const router = createBrowserRouter([
  // The language is part of the path, so each translation is its own indexable URL.
  {
    element: <LanguageProvider />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
          { index: true, element: <Navigate to={`/${DEFAULT_LANG}`} replace /> },
          { path: "blog", element: <Navigate to={`/${DEFAULT_LANG}/blog`} replace /> },
          { path: "blog/:slug", element: <LegacySlugRedirect /> },
          { path: ":lang", element: guarded(<Portfolio />) },
          {
            path: ":lang/blog",
            element: guarded(
              <Suspense fallback={pageFallback}>
                <Blog />
              </Suspense>,
            ),
          },
          {
            path: ":lang/blog/:slug",
            element: guarded(
              <Suspense fallback={pageFallback}>
                <BlogPost />
              </Suspense>,
            ),
          },
          { path: "*", element: <NotFound /> },
        ],
      },
    ],
  },
]);