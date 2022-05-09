import {Navigate} from "react-router-dom";
import Error from "../pages/error/Error";
import NewsListPage from "../pages/NewsListPage";
import NewsDetailPage from "../pages/NewsDetailPage";

export const routes = [
  { path: 'list', element: <NewsListPage/> },
  { path: 'post', element: <NewsDetailPage/> },
  { path: 'error', element: <Error/> },
  { path: '/', element: <Navigate to={'list'} replace /> },
  { path: '*', element: <Navigate to={'/error'} replace /> }
];
