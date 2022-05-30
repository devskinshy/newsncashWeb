import React from 'react';
import {Stack} from "@mui/material";
import NewsItem from "./NewsItem";
import {styled} from "@mui/material/styles";
import Empty from "./Empty";

const RootStyled = styled(Stack)(({theme}) => ({
  padding: theme.spacing(2)
}))

const NewsList = ({list}) => {
  return !list.length
    ? (
      <Empty/>
    )
    : (
      <RootStyled spacing={2}>
        {
          list.map((news) => (
            <NewsItem key={news.idsk} news={news}/>
          ))
        }
      </RootStyled>
    );
};

export default NewsList;
