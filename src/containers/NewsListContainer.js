import React from 'react';
import NewsList from "../components/NewsList";
import {useSelector} from "react-redux";
import Loading from "../components/Loading";
import Error from "../components/error/Error";

const NewsListContainer = () => {
  const {init, list, error, loading} = useSelector(({news, loading}) => ({
    init: news.list.init,
    list: news.list.data,
    error: news.error,
    loading: loading['news/INITIALIZE_LIST']
  }));

  return (
    !init || loading ? <Loading/>
    : error ? <Error title={error.rd}/>
    : <NewsList list={list}/>
  )
};

export default NewsListContainer;
