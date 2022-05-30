import React from 'react';
import {useSelector} from "react-redux";
import NewsList from "../components/NewsList";
import Loading from "../components/Loading";
import Error from "../components/error/Error";
import {ScreenSearchDesktopOutlined} from '@mui/icons-material';

const NewsSearchContainer = () => {
  const {keyword, list, error, loading} = useSelector(({news, loading}) => ({
    keyword: news.search.keyword,
    list: news.search.data,
    error: news.error,
    loading: loading['news/GET_SEARCH']
  }));

  return (
    !keyword ? <ScreenSearchDesktopOutlined fontSize={'large'}/>
    : loading ? <Loading/>
    : error ? <Error title={error.rd}/>
    : <NewsList list={list}/>
  )
};

export default NewsSearchContainer;
