import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import NewsListPage from "../pages/NewsListPage";
import NewsSearchPage from "../pages/NewsSearchPage";
import NewsBookmarkPage from "../pages/NewsBookmarkPage";
import NewsDetailPage from "../pages/NewsDetailPage";

import Error from "../components/error/Error";
import TOSPage from "../pages/TOSPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to={"list"} replace /> },
      { path: "list", element: <NewsListPage /> },
      { path: "search", element: <NewsSearchPage /> },
      { path: "bookmark", element: <NewsBookmarkPage /> },
      { path: "detail", element: <NewsDetailPage /> },
      { path: "tos", element: <TOSPage /> },
      { path: "privacyPolicy", element: <PrivacyPolicyPage /> },
      { path: "error", element: <Error /> },
    ],
  },

  { path: "*", element: <Navigate to={"/error"} replace /> },
];
