import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home";
import { Layout } from "../layouts/Index";
import { ErrorPage } from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage statusCode={400} />,
    children: [
      { path: "", element: <Home /> },
      { path: "*", element: <ErrorPage statusCode={404} /> },
    ],
  },
]);

export default router;
