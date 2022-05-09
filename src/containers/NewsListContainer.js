import React from 'react';
import NewsList from "../components/NewsList";
import {useSelector} from "react-redux";

const NewsListContainer = () => {
  const {list, error, loading} = useSelector(({news, loading}) => ({
    list: news.list,
    error: news.error,
    loading: loading['news/INITIALIZE_LIST']
  }));

  return (
    (!list && !error) || loading
      ? <div>loading</div>
      : error
        ? <div>{error.rd}</div>
        : <NewsList list={list}/>
  )
};

export default NewsListContainer;
