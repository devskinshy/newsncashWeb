import React from 'react';
import NewsDetail from "../components/NewsDetail";
import {useSelector} from "react-redux";

const NewsDetailContainer = () => {
  const {detail, error, loading} = useSelector(({news, loading}) => ({
    detail: news.detail,
    error: news.error,
    loading: loading['news/INITIALIZE_DETAIL']
  }));

  return (
    (!detail && !error) || loading
      ? <div>loading</div>
      : error
        ? <div>{error.rd}</div>
        : <NewsDetail content={detail}/>
  )
};

export default NewsDetailContainer;
