import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home";
import { Layout } from "../layouts/Index";
import { ErrorPage } from "../pages/ErrorPage";
import { ProductList } from "../pages/ProductList";
import { ProductDetail } from "../pages/ProductDetail";
import { SearchResult } from "../pages/SearchResult";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage statusCode={400} />,
    children: [
      { path: "", element: <Home /> },
      { path: "products", element: <ProductList /> },
      { path: "products/:slug", element: <ProductDetail /> },
      { path: "search", element: <SearchResult /> },
      { path: "*", element: <ErrorPage statusCode={404} /> },
    ],
  },
]);

export default router;
