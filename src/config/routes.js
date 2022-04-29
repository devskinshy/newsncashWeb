import {Navigate} from "react-router-dom";
import Error from "../pages/error/Error";
import NewsListPage from "../pages/NewsListPage";
import NewsPostPage from "../pages/NewsPostPage";

export const routes = [
  {
    path: 'list',
    children: [
      { index: true, element: <Navigate to={'/list/hot'} replace /> },
      { path: ':category', element: <NewsListPage/> },
    ]
  },
  { path: 'post/:id', element: <NewsPostPage/> },
  { path: 'error', element: <Error/> },
  { path: '/', element: <Navigate to={'list'} replace /> },
  { path: '*', element: <Navigate to={'/error'} replace /> }
];