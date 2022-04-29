import React from 'react';
import {Stack} from "@mui/material";
import NewsItem from "./NewsItem";
import {styled} from "@mui/material/styles";

const RootStyled = styled(Stack)(({theme}) => ({
  padding: theme.spacing(2)
}))

const NewsList = ({list}) => {
  return (
    <RootStyled spacing={2}>
      {
        list.map((news, index) => (
          <NewsItem key={index} news={news}/>
        ))
      }
    </RootStyled>
  );
};

export default NewsList;