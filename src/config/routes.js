import {Navigate} from "react-router-dom";
import Layout from "../components/Layout";
import NewsListPage from "../pages/NewsListPage";
import NewsSearchPage from "../pages/NewsSearchPage";
import NewsBookmarkPage from "../pages/NewsBookmarkPage";
import NewsDetailPage from "../pages/NewsDetailPage";

import Error from "../components/error/Error";

export const routes = [
  {
    path: '/',
    element: <Layout/>,
    children: [
      {index: true, element: <Navigate to={'list'} replace />},
      { path: 'list', element: <NewsListPage/> },
      { path: 'search', element: <NewsSearchPage/> },
      { path: 'bookmark', element: <NewsBookmarkPage/> },
      { path: 'detail', element: <NewsDetailPage/> },
      { path: 'error', element: <Error/> },
    ]
  },

  { path: '*', element: <Navigate to={'/error'} replace /> }
];
