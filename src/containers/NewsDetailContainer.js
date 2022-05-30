import React from 'react';
import NewsDetail from "../components/NewsDetail";
import {useSelector} from "react-redux";
import Loading from "../components/Loading";
import Error from "../components/error/Error";

const NewsDetailContainer = () => {
  const {init, detail, error, loading} = useSelector(({news, loading}) => ({
    init: news.detail.init,
    detail: news.detail.data,
    error: news.error,
    loading: loading['news/INITIALIZE_DETAIL']
  }));

  return (
    !init || loading ? <Loading/>
    : error ? <Error title={error.rd}/>
    : <NewsDetail content={detail}/>
  )
};

export default NewsDetailContainer;
